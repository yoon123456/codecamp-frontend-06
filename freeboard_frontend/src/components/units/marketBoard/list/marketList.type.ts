import { ChangeEvent, Dispatch, MouseEvent, SetStateAction } from "react";

export interface IPropsMarketList {
  data: any;
  refetch: any;
  onLoadMore: () => void;
  isSoldout: boolean;
  setIsSoldout: Dispatch<SetStateAction<boolean>>;
}

export interface IPropsMarketListUI {
  onChangeSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickMoveToMarketBoardNew: () => void;
  onClickMoveToMarketBoarDetail: (
    el: any
  ) => (e: MouseEvent<HTMLDivElement>) => void;
  data: any;
  keyword: string;
  onLoadMore: () => void;
  priceComma: string;
  onClickIsSoldout: () => void;
  onClickIsUnSoldout: () => void;
}

export interface IProps {
  isMatched: boolean;
}
