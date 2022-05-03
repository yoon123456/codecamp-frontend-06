import Head from "next/head";
import { IPaymentLodingPageUIProps } from "./payment.types";
import * as S from "./payment.styles";

export default function PaymentLodingPageUI(props: IPaymentLodingPageUIProps) {
  return (
    <S.Wrapper>
      <Head>
        {/* <!-- jQuery --> */}
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        {/* <!-- iamport.payment.js --> */}
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <S.H1>충전하기</S.H1>
      <S.PigImage src={"img/Group 11996.png"} />
      <S.InputBox
        type="text"
        placeholder="충전하실 금액을 작성해주세요"
        onChange={props.onChangeAmount}
      />
      <S.Div>숫자로만 입력해주세요!!</S.Div>
      <S.Button onClick={props.requestPay}>충전하기</S.Button>
    </S.Wrapper>
  );
}
