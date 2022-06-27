import { useMutation } from "@apollo/client";
import { CREATE_USER } from "./signup.quries";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import {
  IMutation,
  IMutationCreateUserArgs,
} from "../../../commons/types/generated/type";
import * as yup from "yup";
import { IFromValues } from "./signup.types";
import { useRouter } from "next/router";
import SignupPageUI from "./signup.presenter";

const schema = yup.object({
  email: yup
    .string()
    .email("이메일 형식이 적합하지 않습니다")
    .required("이메일은 필수입력사항 입니다"),

  password: yup
    .string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{1,8}$/,
      "비밀번호는 영문, 숫자, 특수문자를 포함한 8자리 이내여야합니다."
    )
    .required("비밀번호는 필수 입력 사항입니다"),

  passwordCheck: yup
    .string()
    .oneOf([yup.ref("password"), null], "비밀번호가 일치하지 않습니다")
    .required("비밀번호는 필수 입력 사항입니다"),

  name: yup
    .string()
    .max(5, "작성자는 5자 이내입니다")
    .required("작성자는 필수입력사항 입니다"),
});

export default function SignupPageFn() {
  const router = useRouter();
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const [createUser] = useMutation<
    Pick<IMutation, "createUser">,
    IMutationCreateUserArgs
  >(CREATE_USER);

  const onClickSingup = async (data: IFromValues) => {
    if (data.email && data.password && data.name) {
      const result = await createUser({
        variables: {
          createUserInput: {
            email: data.email,
            name: data.name,
            password: data.password,
          },
        },
      });
      alert("회원가입 성공");
      router.push("/login");
    }
  };

  return (
    <SignupPageUI
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickSingup={onClickSingup}
    />
  );
}
