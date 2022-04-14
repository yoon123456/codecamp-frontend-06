import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styled from "@emotion/styled";
import Button01 from "../../src/components/commons/buttons/01";
import Input01 from "../../src/components/commons/inputs/01";

const Error = styled.div`
  color: red;
  font-size: 8px;
`;
// 컴포넌트 분리시 .validation.ts 라는 파일명으로 분리 보관하기
const schema = yup.object({
  email: yup
    .string()
    .email("이메일 형식이 적합하지 않습니다")
    .required("이메일은 필수입력사항 입니다"),
  password: yup
    .string()
    .min(4, "비밀번호는 최소 4자리 이상 입력해주세요")
    .max(15, "비밀번호는 최대 15자리로 입력해주세요")
    .required("비밀번호는 필수 입력 사항입니다"),
});

interface IFormValues {
  email?: string;
  password?: string;
}

export default function ReactHookFormpage() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickSubmit = (data: IFormValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      이메일:
      <Input01 type="text" register={register("email")} />
      {/* 처음 코드 <input type="text" {...register("email")} /> */}
      <Error>{formState.errors.email?.message}</Error>
      비밀번호: <Input01 type="password" register={register("password")} />
      {/* 처음 코드 <input type="password" {...register("password")} /> */}
      <Error>{formState.errors.password?.message}</Error>
      <Button01 isActive={formState.isValid} title="로그인하기" />
      {/* <LoginBtn isActive={formState.isValid}>로 그 인</LoginBtn> */}
    </form>
  );
}
