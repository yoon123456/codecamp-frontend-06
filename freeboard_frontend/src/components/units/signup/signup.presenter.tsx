import * as L from "./signup.styles";
import { ISignupPageUIProps } from "./signup.types";

export default function SignupPageUI(props: ISignupPageUIProps) {
  return (
    <L.Wrapper>
      <L.Logo>SIGNUP</L.Logo>
      <L.Ttile onChange={props.onChangeEmail}>이메일*</L.Ttile>
      <L.Email type="text" placeholder="이메일을 입력해주세요." id="email" />
      <L.Error></L.Error>
      <L.Ttile onChange={props.onChangeName}>이름*</L.Ttile>
      <L.Email type="text" placeholder="이름을 입력해주세요." id="name" />
      <L.Ttile>비밀번호*</L.Ttile>
      <L.Password
        type="password"
        placeholder="비밀번호를 입력해주세요"
        id="password"
        onChange={props.onChangePassword}
      />
      <L.Ttile>비밀번호 확인*</L.Ttile>
      <L.Password
        type="password"
        placeholder="비밀번호를 다시 입력해주세요"
        id="password"
        onChange={props.onChangePasswordCheck}
      />
      <L.Error></L.Error>

      <L.Submit onChange={props.onClickSubmit}>회원가입하기</L.Submit>
    </L.Wrapper>
  );
}
