'use client';

import { DragDropContext, Droppable, Draggable, DropResult } from '@hello-pangea/dnd';
import { GripVertical } from 'lucide-react';
import { useState } from 'react';

// Define the block types
type BlockType =
  | 'Dynamic Hero'
  | 'Prediction Grid'
  | 'Expert Insights'
  | 'Legal Disclaimer';

// Define the block structure
interface Block {
  id: string;
  type: BlockType;
}

// Initial library of blocks
const libraryBlocks: Block[] = [
  { id: 'dynamic-hero', type: 'Dynamic Hero' },
  { id: 'prediction-grid', type: 'Prediction Grid' },
  { id: 'expert-insights', type: 'Expert Insights' },
  { id: 'legal-disclaimer', type: 'Legal Disclaimer' },
];

const PillarPageBuilder = () => {
  // State for the blocks in the canvas (initially empty)
  const [canvasBlocks, setCanvasBlocks] = useState<Block[]>([]);

  // Handle drag end
  const handleDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;

    // If dropping outside a droppable area, return
    if (!destination) return;

    // If dragging within the same list (canvas) and same index, return
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    // If dragging from library to canvas
    // Library droppableId is undefined (not wrapped in a Droppable)
    if (!source.droppableId && destination.droppableId === 'CANVAS') {
      // We are dragging from the library (source.droppableId is undefined)
      // We need to get the block from the library by the draggableId
      const draggedBlock = libraryBlocks.find(b => b.id === draggableId);
      if (!draggedBlock) return;
      // We don't actually remove from library because it's a static list
      // Instead, we add a copy to the canvas
      setCanvasBlocks(prev => [
        ...prev.slice(0, destination.index),
        { ...draggedBlock, id: `${draggedBlock.id}-${Date.now()}` }, // Generate a unique ID for the instance
        ...prev.slice(destination.index),
      ]);
      return;
    }

    // If dragging within the canvas (reordering)
    if (source.droppableId === 'CANVAS' && destination.droppableId === 'CANVAS') {
      const sourceBlocks = [...canvasBlocks];
      const [movedBlock] = sourceBlocks.splice(source.index, 1);
      sourceBlocks.splice(destination.index, 0, movedBlock);
      setCanvasBlocks(sourceBlocks);
      return;
    }

    // If dragging from canvas to library (we don't allow removing from canvas to library in this example)
    // But if we wanted to, we would handle it here. For now, we ignore.
  };

  return (
    <div className="min-h-[calc(100vh-4.5rem)] flex flex-col px-4 py-6">
      {/* Header with Save Layout button */}
      <div className="mb-6">
        <button
          className="w-full md:w-auto px-6 py-3 font-poppins font-semibold bg-gradient-to-r from-green-500 via-amber-500 to-green-500 text-white rounded-xl hover:shadow-[0_0_20px_rgba(212,175,55,0.6)] transition-all duration-300"
        >
          Save Layout
        </button>
      </div>

      {/* Main dual-pane layout */}
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="flex-1 flex grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Pane: Component Library */}
        <aside className="lg:col-span-3 bg-white/65 dark:bg-slate-900/65 backdrop-blur-md rounded-2xl border border-white/10 p-4">
          <h2 className="font-poppins text-lg font-bold mb-4">Library Blok</h2>
          <div className="space-y-2">
            {libraryBlocks.map((block, index) => (
              <Draggable
                key={block.id}
                draggableId={block.id}
                index={index}
              >
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className={`flex items-center justify-between p-3 rounded-xl border
                      ${snapshot.isDragging ? 'bg-primary/10 border-primary' : 'bg-muted/50 border-muted/50'}
                      transition-all duration-200`}
                  >
                    <div className="flex items-center gap-3">
                      <GripVertical className="h-4 w-4 text-muted-foreground" />
                      <span className="font-inter">{block.type}</span>
                    </div>
                  </div>
                )}
              </Draggable>
            ))}
          </div>
        </aside>

        {/* Right Pane: Active Builder Canvas */}
        <section className="lg:col-span-9 bg-neutral-50/50 dark:bg-slate-800/50 rounded-xl p-6">
          <div className="mb-4">
            <h2 className="font-poppins text-lg font-bold">Struktur Halaman</h2>
            <p className="text-sm text-muted-foreground">
              Drag blocks from the library to build your pillar page structure.
            </p>
          </div>

          {/* Droppable area for the canvas */}
          <Droppable droppableId="CANVAS">
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className={`min-h-[200px] ${snapshot.isDraggingOver ? 'bg-primary/5' : 'bg-transparent'}
                  border-dashed border-2 border-primary/20 rounded-xl
                  transition-all duration-200`}
              >
                {canvasBlocks.map((block, index) => (
                  <Draggable
                    key={block.id}
                    draggableId={block.id}
                    index={index}
                  >
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className={`flex items-center justify-between p-4 rounded-xl bg-white dark:bg-slate-800 shadow-sm
                          ${snapshot.isDragging ? 'border-primary' : 'border-muted/50'}
                          transition-all duration-200`}
                      >
                        <div className="flex items-center gap-3">
                          <GripVertical className="h-4 w-4 text-muted-foreground" />
                          <span className="font-inter font-medium">{block.type}</span>
                        </div>
                        <button
                          className="px-3 py-1 text-xs font-inter bg-muted/50 text-muted-foreground rounded hover:bg-muted/100 transition-colors"
                        >
                          Edit Settings
                        </button>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </section>
      </div>
      </DragDropContext>
    </div>
  );
};

export default PillarPageBuilder;