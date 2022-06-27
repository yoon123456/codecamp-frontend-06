import * as L from "./signup.styles";
import { IISignupPageUI } from "./signup.types";

export default function SignupPageUI(props: IISignupPageUI) {
  return (
    <L.Wrapper>
      <form onSubmit={props.handleSubmit(props.onClickSingup)}>
        <L.Logo>SIGNUP</L.Logo>
        <L.Ttile>이메일*</L.Ttile>
        <L.Email
          type="text"
          placeholder="이메일을 입력해주세요."
          {...props.register("email")}
        />
        <L.Error>{props.formState.errors.email?.message}</L.Error>
        <L.Ttile>이름*</L.Ttile>
        <L.Email
          type="text"
          placeholder="이름을 입력해주세요."
          {...props.register("name")}
        />
        <L.Error>{props.formState.errors.name?.message}</L.Error>
        <L.Ttile>비밀번호*</L.Ttile>
        <L.Password
          type="password"
          placeholder="비밀번호를 입력해주세요"
          {...props.register("password")}
        />
        <L.Error>{props.formState.errors.password?.message}</L.Error>
        <L.Ttile>비밀번호 확인*</L.Ttile>
        <L.Password
          type="password"
          placeholder="비밀번호를 다시 입력해주세요"
          {...props.register("passwordCheck")}
        />
        <L.Error>{props.formState.errors.password?.message}</L.Error>
        <L.Submit isActive={props.formState.isValid}>회원가입하기</L.Submit>
      </form>
    </L.Wrapper>
  );
}
