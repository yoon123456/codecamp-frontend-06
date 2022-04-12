import * as L from "./login.styles";
import { LoginPageUIprops } from "./login.types";
import { LoginInputError } from "../../../commons/store/login";
import { useRecoilState } from "recoil";

export default function LoginPageUI(props: LoginPageUIprops) {
  const [loginError] = useRecoilState(LoginInputError);
  return (
    <L.Wrapper>
      <L.Logo>LOGIN</L.Logo>
      <L.Email
        type="text"
        placeholder="이메일을 입력해주세요."
        id="email"
        onChange={props.onChangeLoginInput}
      />
      <L.Error>{loginError.emailError}</L.Error>
      <L.Password
        type="password"
        placeholder="비밀번호를 입력해주세요"
        id="password"
        onChange={props.onChangeLoginInput}
      />
      <L.Error>{loginError.passwordError}</L.Error>

      <L.Keep>
        <L.KeepButton
          onClick={props.onClickLoginKeepBtn}
          isCheck={props.isCheck}
        ></L.KeepButton>
        <L.KeepLogin>로그인상태유지</L.KeepLogin>
      </L.Keep>
      <L.Submit onClick={props.onClickSubmit}>로그인하기</L.Submit>
      <L.FindWrapper>
        <L.FindEmail>이메일찾기</L.FindEmail>
        <L.Singup onClick={props.OnClickGoSignup}>회원가입</L.Singup>
        <L.FindPassword>비밀번호찾기</L.FindPassword>
      </L.FindWrapper>
    </L.Wrapper>
  );
}
