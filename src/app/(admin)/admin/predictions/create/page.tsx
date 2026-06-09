'use client';

import * as React from 'react';
import { useState } from 'react';
import { useReactTable, getCoreRowModel, flexRender, CellContext } from '@tanstack/react-table';
import { LotteryCategory, AIPredictionData } from './types';
import Skeleton from '@/components/ui/skeleton';

// Mock lottery categories (in a real app, we would fetch from Prisma)
const lotteryCategories: LotteryCategory[] = [
  { id: '1', name: 'Magnum 4D', slug: 'magnum-4d' },
  { id: '2', name: 'Sports Toto 4D', slug: 'sports-toto-4d' },
  { id: '3', name: 'Da Ma Cai 4D', slug: 'da-ma-cai-4d' },
  { id: '4', name: 'Powerball', slug: 'powerball' },
  { id: '5', name: 'Magnum 5D', slug: 'magnum-5d' },
  { id: '6', name: 'Sports Toto 5D', slug: 'sports-toto-5d' },
  { id: '7', name: 'Da Ma Cai 5D', slug: 'da-ma-cai-5d' },
  { id: '8', name: 'Lotto 6/49', slug: 'lotto-6-49' },
  { id: '9', name: 'Lucky Falten', slug: 'lucky-falten' },
];

// Mock AI generation function (simulates 2-second delay)
const generateAIPrediction = async (selectedCategories: string[]): Promise<AIPredictionData[]> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 2000));

  // Generate mock data for each selected category
  const mockData: AIPredictionData[] = [];
  selectedCategories.forEach(categoryId => {
    const category = lotteryCategories.find(c => c.id === categoryId);
    if (!category) return;

    // Generate 4 sets of numbers: main, hot, cold, overdue
    const generateNumbers = (count: number) => {
      const nums = new Set<number>();
      while (nums.size < count) {
        nums.add(Math.floor(Math.random() * 10000));
      }
      return Array.from(nums).map(n => n.toString().padStart(4, '0'));
    };

    mockData.push({
      id: Math.random().toString(36).substring(2, 9),
      lotteryCategory: category,
      mainNumbers: generateNumbers(5),
      hotNumbers: generateNumbers(3),
      coldNumbers: generateNumbers(3),
      overdueNumbers: generateNumbers(2),
      scientificNote: '', // Will be filled in step 4
      status: 'DRAFT' as const,
    });
  });

  return mockData;
};

const PredictionWizard = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [aiGeneratedData, setAiGeneratedData] = useState<AIPredictionData[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [tableData, setTableData] = useState<AIPredictionData[]>([]);
  const [editingCell, setEditingCell] = useState<{ rowIndex: number; columnId: string } | null>(null);
  const [scientificNote, setScientificNote] = useState('');
  const [scheduleDate, setScheduleDate] = useState<Date | null>(null);
  const [scheduleTime, setScheduleTime] = useState<string>('');

  // Step 1: Handle lottery selection
  const toggleCategory = (categoryId: string) => {
    setSelectedCategories(prev =>
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  // Step 2: Handle AI generation
  const handleGenerateAI = async () => {
    if (selectedCategories.length === 0) return;
    setIsGenerating(true);
    try {
      const data = await generateAIPrediction(selectedCategories);
      setAiGeneratedData(data);
      setTableData(data); // Initialize table data with AI generated data
    } finally {
      setIsGenerating(false);
    }
  };

  // Step 3: Handle table editing with @tanstack/react-table (v8)
  const columns = React.useMemo(() => [
    {
      Header: 'Lottery',
      accessorKey: 'lotteryCategory.name',
    },
    {
      Header: 'Main Numbers',
      accessorKey: 'mainNumbers',
      cell: ({ getValue }: CellContext<AIPredictionData, string[]>) => {
        const value = getValue() as string[] || [];
        return (
          <div className="flex gap-1">
            {value.map((num: string) => (
              <span
                key={num}
                className="px-2 py-0.5 bg-muted/50 rounded text-xs font-inter"
              >
                {num}
              </span>
            ))}
          </div>
        );
      },
    },
    {
      Header: 'Hot Numbers',
      accessorKey: 'hotNumbers',
      cell: ({ getValue }: CellContext<AIPredictionData, string[]>) => {
        const value = getValue() as string[] || [];
        return (
          <div className="flex gap-1">
            {value.map((num: string) => (
              <span
                key={num}
                className="px-2 py-0.5 bg-muted/50 rounded text-xs font-inter"
              >
                {num}
              </span>
            ))}
          </div>
        );
      },
    },
    {
      Header: 'Cold Numbers',
      accessorKey: 'coldNumbers',
      cell: ({ getValue }: CellContext<AIPredictionData, string[]>) => {
        const value = getValue() as string[] || [];
        return (
          <div className="flex gap-1">
            {value.map((num: string) => (
              <span
                key={num}
                className="px-2 py-0.5 bg-muted/50 rounded text-xs font-inter"
              >
                {num}
              </span>
            ))}
          </div>
        );
      },
    },
    {
      Header: 'Overdue Numbers',
      accessorKey: 'overdueNumbers',
      cell: ({ getValue }: CellContext<AIPredictionData, string[]>) => {
        const value = getValue() as string[] || [];
        return (
          <div className="flex gap-1">
            {value.map((num: string) => (
              <span
                key={num}
                className="px-2 py-0.5 bg-muted/50 rounded text-xs font-inter"
              >
                {num}
              </span>
            ))}
          </div>
        );
      },
    },
  ], []);

  const table = useReactTable<AIPredictionData>({
    columns,
    data: tableData,
    getCoreRowModel: getCoreRowModel(),
  });

  // Types for TanStack Table v8 to avoid `any` types
  type HeaderGroupType = NonNullable<ReturnType<typeof table.getHeaderGroups>[0]>;
  type HeaderType = NonNullable<HeaderGroupType['headers'][0]>;
  type RowType = NonNullable<ReturnType<typeof table.getRowModel>['rows'][0]>;
  type CellType = NonNullable<ReturnType<RowType['getVisibleCells']>[0]>;

  // Handle cell click for editing


  // Handle cell click for editing
  const handleCellClick = (rowIndex: number, columnId: string) => {
    setEditingCell({ rowIndex, columnId });
  };

  // Handle cell value change
  const handleCellChange = (rowIndex: number, columnId: string, value: string) => {
    setTableData(prev => {
      return prev.map((row, index) => {
        if (index !== rowIndex) return row;
        switch (columnId) {
          case 'mainNumbers':
            return {
              ...row,
              mainNumbers: value.split(',').map(v => v.trim()).filter(v => v !== '')
            };
          case 'hotNumbers':
            return {
              ...row,
              hotNumbers: value.split(',').map(v => v.trim()).filter(v => v !== '')
            };
          case 'coldNumbers':
            return {
              ...row,
              coldNumbers: value.split(',').map(v => v.trim()).filter(v => v !== '')
            };
          case 'overdueNumbers':
            return {
              ...row,
              overdueNumbers: value.split(',').map(v => v.trim()).filter(v => v !== '')
            };
          default:
            return row;
        }
      });
    });
    setEditingCell(null); // Exit editing mode
  };

  // Step 4: Handle form submission
  const handleSubmit = () => {
    // In a real app, we would save to database via Prisma
    console.log('Submitting prediction:', {
      selectedCategories,
      tableData,
      scientificNote,
      scheduleDate,
      scheduleTime,
    });
    // Reset form
    setCurrentStep(1);
    setSelectedCategories([]);
    setAiGeneratedData([]);
    setTableData([]);
    setScientificNote('');
    setScheduleDate(null);
    setScheduleTime('');
  };

  // Render based on current step
  let stepContent = null;
  switch (currentStep) {
    case 1:
      stepContent = (
        <div className="space-y-6">
          <h2 className="font-poppins text-xl font-bold">Pilih Lottery</h2>
          <p className="text-muted-foreground">
            Sila pilih sekurang-kurangnya satu kategori lottery untuk menjana ramalan.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3">
            {lotteryCategories.map(category => (
              <button
                key={category.id}
                onClick={() => toggleCategory(category.id)}
                className={`flex flex-col items-center justify-center p-4 rounded-xl border ${selectedCategories.includes(category.id) ? 'bg-forest-900 text-white' : 'border-gray-200 hover:bg-gray-50'} transition-all duration-200`}
              >
                <div className="mb-2">
                  {/* In a real app, we would show an icon or logo here */}
                  <div className="h-8 w-8 bg-muted rounded flex items-center justify-center">
                    {category.name.charAt(0)}
                  </div>
                </div>
                <p className="font-inter text-sm text-center">{category.name}</p>
              </button>
            ))}
          </div>
        </div>
      );
      break;
    case 2:
      stepContent = (
        <div className="space-y-6">
          <h2 className="font-poppins text-xl font-bold">Jana dengan AI</h2>
          <p className="text-muted-foreground">
            Klik butang di bawah untuk menjana ramalan berdasarkan algoritma AI kami.
          </p>
          <button
            onClick={handleGenerateAI}
            disabled={isGenerating || selectedCategories.length === 0}
            className={`w-full flex items-center justify-center gap-3 px-6 py-4 font-poppins font-semibold bg-gradient-to-r from-green-500 via-amber-500 to-green-500 text-white rounded-xl ${isGenerating ? 'animate-pulse' : ''} hover:shadow-[0_0_20px_rgba(212,175,55,0.6)] transition-all duration-300 ${selectedCategories.length === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            Jana dengan AI
            {isGenerating && (
              <div className="flex h-4 w-4 space-x-1">
                {[0, 1, 2].map(i => (
                  <div
                    key={i}
                    className={`h-1.5 w-1.5 bg-white rounded-full animate-[bounce_0.5s_ease-in-out_infinite] ${i * 0.1}s`}
                  />
                ))}
              </div>
            )}
          </button>
          {isGenerating && (
            <div className="mt-6">
              <h3 className="font-poppins text-lg font-bold mb-4">Sedang menjana data...</h3>
              {/* Skeleton for the incoming data tables */}
              <div className="space-y-4">
                {[...Array(3)].map((_, idx) => (
                  <div key={idx} className="space-y-2">
                    <Skeleton className="h-4 w-32" /> {/* Lottery name */}
                    <Skeleton className="h-4 w-24" /> {/* Main numbers */}
                    <Skeleton className="h-4 w-24" /> {/* Hot numbers */}
                    <Skeleton className="h-4 w-24" /> {/* Cold numbers */}
                    <Skeleton className="h-4 w-24" /> {/* Overdue numbers */}
                  </div>
                ))}
              </div>
            </div>
          )}
          {!isGenerating && aiGeneratedData.length > 0 && (
            <div className="mt-6">
              <h3 className="font-poppins text-lg font-bold mb-4">Data yang dijana:</h3>
              <div className="space-y-4">
                {aiGeneratedData.map((data) => (
                  <div key={data.id} className="bg-white dark:bg-slate-800/80 backdrop-blur-md rounded-xl p-4">
                    <h4 className="font-poppins font-medium">{data.lotteryCategory.name}</h4>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <div>
                        <span className="text-xs font-inter text-muted-foreground">Main:</span>
                        <div className="flex gap-1 mt-0.5">
                          {data.mainNumbers.map((num: string) => (
                            <span
                              key={num}
                              className="px-2 py-0.5 bg-green-100 text-green-800 rounded text-xs font-inter"
                            >
                              {num}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <span className="text-xs font-inter text-muted-foreground">Hot:</span>
                        <div className="flex gap-1 mt-0.5">
                          {data.hotNumbers.map((num: string) => (
                            <span
                              key={num}
                              className="px-2 py-0.5 bg-blue-100 text-blue-800 rounded text-xs font-inter"
                            >
                              {num}
                            </span>
                          ))}
                        </div>
                      </div>
                      {/* ...we could show more, but for brevity we'll stop here */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      );
      break;
    case 3:
      stepContent = (
        <div className="space-y-6">
          <h2 className="font-poppins text-xl font-bold">Sunting Matriks</h2>
          <p className="text-muted-foreground">
            Suntilah nombor ramalan jika diperlukan. Klik pada sebarang sel untuk menyuntingnya.
          </p>
          {/* TanStack Table v8 - Rewritten for strict syntax compliance */}
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white dark:bg-slate-800/80 backdrop-blur-md rounded-xl">
              <thead>
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <th key={header.id}
                        className="px-4 py-3 text-left text-xs font-inter text-muted-foreground bg-muted/50"
                      >
                        {header.isSortable ? (
                          <>
                            {flexRender(header.column.columnDef.header, header.getContext())}
                            <span className="ml-1">{header.isSorted ? (header.isSortedDesc ? '🔼' : '🔽') : ''}</span>
                          </>
                        ) : (
                          flexRender(header.column.columnDef.header, header.getContext())
                        )}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody>
                {table.getRowModel().rows.map((row) => {
                  return (
                    <tr key={row.id}>
                      {row.getVisibleCells().map((cell) => {
                        const columnId = cell.column.id;
                        const isEditing =
                          editingCell &&
                          editingCell.rowIndex === row.index &&
                          editingCell.columnId === columnId;

                        return (
                          <td key={cell.id}
                            className="px-4 py-3 text-sm font-inter whitespace-nowrap"
                            onClick={() => !isGenerating && handleCellClick(row.index, columnId)}
                          >
                            {isEditing ? (
                              <input
                                type="text"
                                value={Array.isArray(cell.getValue()) ? cell.getValue().join(', ') : ''}
                                onChange={(e) => handleCellChange(row.index, columnId, e.target.value)}
                                onBlur={() => setEditingCell(null)}
                                className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                              autoFocus
                            />
                          ) : (
                            flexRender(cell.column.columnDef.cell, cell.getContext())
                          )}
                        </td>
                      );
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {table.getRowModel().rows.length > 0 && (
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setCurrentStep(4)}
                className="px-4 py-2 font-poppins font-semibold bg-green-500 text-white rounded-xl hover:bg-green-600 transition-colors"
              >
                Selepasnya: Sains & Jadual
              </button>
            </div>
          )}
        </div>
      );
      break;
    case 4:
      stepContent = (
        <div className="space-y-6">
          <h2 className="font-poppins text-xl font-bold">Sains & Jadual</h2>
          <p className="text-muted-foreground">
            Masukkan alasan statistik untuk ramalan ini dan tetapkan jadual penempatan.
          </p>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-inter mb-2">Alasan Sains</label>
              <textarea
                value={scientificNote}
                onChange={(e) => setScientificNote(e.target.value)}
                placeholder="Terangkan model statistik, sejarah data, dan faktor-faktor yang dipertimbangkan..."
                className="w-full px-4 py-3 font-inter border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary h-24 resize-none"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-inter mb-2">Tariff Penempatan</label>
                <input
                  type="date"
                  value={scheduleDate ? scheduleDate.toISOString().split('T')[0] : ''}
                  onChange={(e) => {
                    const date = e.target.value ? new Date(e.target.value) : null;
                    setScheduleDate(date);
                  }}
                  className="w-full px-4 py-3 font-inter border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-inter mb-2">Masa Penempatan</label>
                <input
                  type="time"
                  value={scheduleTime}
                  onChange={(e) => setScheduleTime(e.target.value)}
                  className="w-full px-4 py-3 font-inter border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <button
              onClick={handleSubmit}
              className="w-full md:w-auto px-6 py-3 font-poppins font-semibold bg-gradient-to-r from-green-500 via-amber-500 to-green-500 text-white rounded-xl hover:shadow-[0_0_20px_rgba(212,175,55,0.6)] transition-all duration-300"
            >
              Jadual Ramalan
            </button>
          </div>
        </div>
      );
      break;
    default:
      stepContent = <div>Unknown step</div>;
  }

  return (
    <div className="min-h-[calc(100vh-4.5rem)] flex items-center justify-center px-4 py-6">
      {/* Glassmorphic Card */}
      <div className="w-full max-w-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-3xl shadow-xl p-6">
        {/* Wizard Header */}
        <div className="mb-6">
          <h1 className="font-poppins text-2xl font-bold">Jana Ramalan Baharu</h1>
          <div className="flex mt-2 space-x-2">
            {[1, 2, 3, 4].map(step => (
              <div
                key={step}
                className={`flex-1 text-center px-2 py-1.5 rounded-lg ${currentStep >= step ? 'bg-forest-900 text-white' : 'bg-muted/50 text-muted-foreground'} transition-all duration-300`}
              >
                {step}
                {step < 4 && <span className="mx-1">→</span>}
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        {stepContent}

        {/* Navigation Buttons (for steps 1-3) */}
        {currentStep > 1 && currentStep < 4 && (
          <div className="mt-6 flex justify-between">
            <button
              onClick={() => setCurrentStep(currentStep - 1)}
              className="px-4 py-2 font-poppins font-semibold bg-muted/50 text-muted-foreground hover:bg-muted/100 rounded-xl transition-colors"
            >
              Sebelumnya
            </button>
            {currentStep === 3 && (
              <button
                onClick={() => setCurrentStep(4)}
                className="px-4 py-2 font-poppins font-semibold bg-green-500 text-white rounded-xl hover:bg-green-600 transition-colors"
              >
                Selepasnya: Sains & Jadual
              </button>
            )}
          </div>
        )}
        {currentStep === 2 && (
          <div className="mt-6 flex justify-end">
            <button
              onClick={() => setCurrentStep(3)}
              disabled={aiGeneratedData.length === 0}
              className={`px-4 py-2 font-poppins font-semibold ${aiGeneratedData.length === 0 ? 'bg-muted/50 text-muted-foreground cursor-not-allowed' : 'bg-green-500 text-white rounded-xl hover:bg-green-600'} transition-colors`}
            >
              Selepasnya: Sunting Matriks
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PredictionWizard;