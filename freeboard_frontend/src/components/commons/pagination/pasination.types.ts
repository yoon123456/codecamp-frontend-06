import { MouseEvent } from "react";

export interface IPaginationProps {
  refetch: any;
  lastPage: number;
  pickPage?: number;
}

export interface IPaginationUIProps {
  refetch?: any;
  lastPage: number;
  startPage: number;
  onClickPage: (event: MouseEvent<HTMLDivElement>) => void;
  onClickPrevPage: () => void;
  onClickNextpage: () => void;
  data?: any;
  dataBoardcount?: any;
  pickPage: number;
  isActive: boolean;
}
