import { ChangeEvent, MouseEvent } from "react";

export interface IPaymentLodingPageUIProps {
  // onClickAmount: (e: MouseEvent<HTMLOptionElement>) => void;
  onChangeAmount: (e: ChangeEvent<HTMLInputElement>) => void;
  requestPay: () => void;
}
