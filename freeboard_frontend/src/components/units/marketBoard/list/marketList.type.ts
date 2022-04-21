import { ChangeEvent, MouseEvent } from "react";

export interface IPropsMarketList {
  data: any;
  refetch: any;
}

export interface IPropsMarketListUI {
  onChangeSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickMoveToMarketBoardNew: () => void;
  onClickMoveToMarketBoarDetail: (e: MouseEvent<HTMLDivElement>) => void;
  data: any;
  keyword: string;
}
