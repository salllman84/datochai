import { type HeaderGroup, type Header, type Row, type Cell } from '@tanstack/react-table';

export type LotteryCategory = {
  id: string;
  name: string;
  slug: string;
};

export type AIPredictionData = {
  id: string;
  lotteryCategory: LotteryCategory;
  mainNumbers: string[];
  hotNumbers: string[];
  coldNumbers: string[];
  overdueNumbers: string[];
  scientificNote: string;
  status: 'DRAFT';
};

// Now, the types for the table elements
export type HeaderGroupType = HeaderGroup<AIPredictionData>;
export type HeaderType = Header<AIPredictionData, unknown>;
export type RowType = Row<AIPredictionData>;
export type CellType = Cell<AIPredictionData, unknown>;