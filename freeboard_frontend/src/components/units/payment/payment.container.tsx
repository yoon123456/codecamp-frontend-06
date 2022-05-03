import { ChangeEvent, MouseEvent, useState } from "react";
import { useRouter } from "next/router";
import PaymentLodingPageUI from "./payment.presenter";
import { Modal } from "antd";
import { useMutation, useQuery } from "@apollo/client";
import { FETCH_USER_LOGGEDIN } from "../login/login.quries";
import { CREATE_POINT_TRANSACTION_OF_LOADING } from "./payment.query";
import {
  IMutation,
  IMutationCreatePointTransactionOfLoadingArgs,
  IUser,
} from "../../../commons/types/generated/type";
import { useForm } from "react-hook-form";

declare const window: typeof globalThis & {
  IMP: any;
};

interface IFormValue {
  name: string;
  amount: number;
  buyerEmail: string;
  buyerName: string;
}

export default function PaymentLoadingPage() {
  const router = useRouter();
  const [amount, setAmount] = useState(100);

  // const { register } = useForm({
  //   mode: "onChange",
  // });

  const { data } = useQuery(FETCH_USER_LOGGEDIN);

  const [createPointTransactionOfLoading] = useMutation<
    Pick<IMutation, "createPointTransactionOfLoading">,
    IMutationCreatePointTransactionOfLoadingArgs
  >(CREATE_POINT_TRANSACTION_OF_LOADING);

  // const onClickAmount = (e: MouseEvent<HTMLOptionElement>) => {
  //   setAmount(Number(e.currentTarget.value));
  //   console.log(amount);
  // };

  const onChangeAmount = (e: ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.currentTarget.value));
  };

  // register("amount", {
  //   onChange: (e) => e.target.value,
  // });

  // console.log(amount);

  const requestPay = async () => {
    // console.log(amount);

    const IMP = window.IMP; // 생략 가능
    IMP.init("imp49910675"); // 예: imp00000000 아임포트 내정보부분에가면 나의 가맹점 id가 있다!
    // IMP.request_pay(param, callback) 결제창 호출
    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        // merchant_uid: "ORD20180131-0000011", 주석하면 id가 랜덤으로 생성된다
        name: `${amount}원 충전하기`,
        amount: amount,
        buyer_email: data?.fetchUserLoggedIn.email,
        buyer_name: data?.fetchUserLoggedIn.name,
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        m_redirect_url: "http://localhost:3000/market",
      },
      (rsp: any) => {
        // callback
        if (rsp.success) {
          // 백엔드에 결제 관련 데이터 넘겨주기 (즉, mutation 실행하기)
          // ex, createPointTransactionOfLoading
          createPointTransactionOfLoading({
            variables: {
              impUid: rsp.imp_uid,
            },
            refetchQueries: [
              {
                query: FETCH_USER_LOGGEDIN,
              },
            ],
          });
          router.push("market");
          Modal.success({
            content: "결제 성공!",
          });
        } else {
          // 결제 실패 시 로직,
          alert("결제에 실패했습니다. 다시 시도해 주세요");
        }
      }
    );
  };

  return (
    <PaymentLodingPageUI
      onChangeAmount={onChangeAmount}
      requestPay={requestPay}
    />
  );
}
