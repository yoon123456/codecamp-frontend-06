import { MouseEvent } from "react";

export interface IMarketDetailProps {
  isEdit: boolean;
}

export interface IMarketDetailUIProps {
  isEdit: boolean;
  data: any;
  priceComma: string;
  onClickMoveToMarketList: () => void;
  onClickMoveToMarketEdit: () => void;
  onClickMoveToPayment: () => void;
  onClickDelete: (e: MouseEvent<HTMLButtonElement>) => void;
  onClickToggleUsedItemPick: (e: MouseEvent<HTMLDivElement>) => void;
}
