import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import LoginUI from "./login.presenter";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { IFormValues } from "./login.types";

const schema = yup.object({
  email: yup
    .string()
    .matches(
      /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
      "이메일을 올바르게 입력해주세요"
    )
    .required("이메일은 필수입력사항입니다"),
  password: yup
    .string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{1,8}$/,
      "비밀번호는 영문, 숫자, 특수문자를 포함한 8자리 이내여야합니다."
    )
    .required("비밀번호는 필수 입력 사항입니다"),
});

export default function Login() {
  const router = useRouter();

  const { register, formState, handleSubmit } = useForm<IFormValues>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickLogin = (data: IFormValues) => {
    if (data) {
      localStorage.setItem("loginInfo", JSON.stringify(data) || "");
    }
    Modal.success({ content: "로그인에 성공하였습니다" });
    router.push("/");
  };

  return (
    <LoginUI
      register={register}
      formState={formState}
      handleSubmit={handleSubmit}
      onClickLogin={onClickLogin}
    />
  );
}
