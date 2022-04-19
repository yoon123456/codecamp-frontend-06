import { useMutation } from "@apollo/client";
import { CREATE_USER } from "./signup.quries";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import {
  IMutation,
  IMutationCreateUserArgs,
} from "../../../commons/types/generated/type";
import * as yup from "yup";
import * as L from "./signup.styles";
import { IFromValues } from "./signup.types";

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
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const [createUser] = useMutation(CREATE_USER);

  const onClickSingup = async (data: IFromValues) => {
    console.log("di");
    console.log(data);

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
      console.log(result.data);
      alert("회원가입 성공");
    }
  };

  return (
    <L.Wrapper>
      <form onSubmit={handleSubmit(onClickSingup)}>
        <L.Logo>SIGNUP</L.Logo>
        <L.Ttile>이메일*</L.Ttile>
        <L.Email
          type="text"
          placeholder="이메일을 입력해주세요."
          {...register("email")}
        />
        <L.Error>{formState.errors.email?.message}</L.Error>
        <L.Ttile>이름*</L.Ttile>
        <L.Email
          type="text"
          placeholder="이름을 입력해주세요."
          {...register("name")}
        />
        <L.Error>{formState.errors.name?.message}</L.Error>
        <L.Ttile>비밀번호*</L.Ttile>
        <L.Password
          type="password"
          placeholder="비밀번호를 입력해주세요"
          {...register("password")}
        />
        <L.Error>{formState.errors.password?.message}</L.Error>
        <L.Ttile>비밀번호 확인*</L.Ttile>
        <L.Password
          type="password"
          placeholder="비밀번호를 다시 입력해주세요"
          {...register("passwordCheck")}
        />
        <L.Error>{formState.errors.password?.message}</L.Error>
        <L.Submit isActive={formState.isValid}>회원가입하기</L.Submit>
      </form>
    </L.Wrapper>
  );
}
