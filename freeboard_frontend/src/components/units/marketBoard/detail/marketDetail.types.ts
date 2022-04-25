export interface IMarketDetailProps {
  isEdit: boolean;
}

export interface IMarketDetailUIProps {
  isEdit: boolean;
  data: any;
  priceComma: string;
  onClickMoveToMarketList: () => void;
  onClickMoveToMarketEdit: () => void;
}
