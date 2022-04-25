import { ChangeEvent, MouseEvent, useState } from "react";
import { useRouter } from "next/router";
import PaymentLodingPageUI from "./payment.presenter";

declare const window: typeof globalThis & {
  IMP: any;
};

export default function PaymentLoadingPage() {
  const router = useRouter();
  const [amount, setAmount] = useState(100);

  const onClickAmount = (e: MouseEvent<HTMLOptionElement>) => {
    setAmount(Number(e.currentTarget.value));
    console.log(amount);
  };

  const onChangeAmount = (e: ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.currentTarget.value));
  };
  console.log(amount);

  const requestPay = () => {
    console.log(amount);

    const IMP = window.IMP; // 생략 가능
    IMP.init("imp50570721"); // 예: imp00000000 아임포트 내정보부분에가면 나의 가맹점 id가 있다!
    // IMP.request_pay(param, callback) 결제창 호출
    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        // merchant_uid: "ORD20180131-0000011", 주석하면 id가 랜덤으로 생성된다
        name: amount,
        amount: amount,
        buyer_email: "gildong@gmail.com",
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        m_redirect_url: "http://localhost:3000/day28/payment/loading",
      },
      (rsp: any) => {
        // callback
        if (rsp.success) {
          // 결제 성공 시 로직,
          console.log(rsp);
          // 백엔드에 결제 관련 데이터 넘겨주기 (즉, mutation 실행하기)
          // ex, createPointTransactionOfLoading
          router.push("complete/");
        } else {
          // 결제 실패 시 로직,
          alert("결제에 실패했습니다. 다시 시도해 주세요");
        }
      }
    );
  };

  return (
    <PaymentLodingPageUI
      onClickAmount={onClickAmount}
      onChangeAmount={onChangeAmount}
      requestPay={requestPay}
    />
  );
}
