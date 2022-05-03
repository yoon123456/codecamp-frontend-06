import { MouseEvent } from "react";
import { AnyObject } from "yup/lib/types";

export interface IMarketDetailProps {
  isEdit: boolean;
}

export interface IMarketDetailUIProps {
  isEdit: boolean;
  data: any;
  priceComma: string;
  onClickMoveToMarketList: () => void;
  onClickMoveToMarketEdit: () => void;
  onClickDelete: (e: MouseEvent<HTMLButtonElement>) => void;
  onClickToggleUsedItemPick: (e: MouseEvent<HTMLDivElement>) => void;
  onClickBuyUseditem: (id: any) => () => void;
}
