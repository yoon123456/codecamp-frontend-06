import styled from "@emotion/styled";
import { useRouter } from "next/router";

const Wrapper = styled.div`
  height: 120px;
  padding: 10px 200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.img`
  cursor: pointer;
`;
const LoginWrapper = styled.div`
  width: 300px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Login = styled.div`
  padding: 20px;
  cursor: pointer;
`;
const SingUp = styled.div`
  padding: 10px;
  border: 1px solid lightgray;
  background-color: #ffd600;
  border-radius: 5px;
  cursor: pointer;
  :hover {
    background-color: black;
    color: white;
  }
`;
export default function LayoutHeader() {
  const router = useRouter();

  const OnClickGoList = () => {
    router.push("/boards");
  };

  const OnClickGoLogin = () => {
    router.push("/login");
  };
  const OnClickGoSignUp = () => {
    router.push("/signup");
  };
  return (
    <Wrapper>
      <Logo src={"/img/logo.png"} onClick={OnClickGoList}></Logo>
      <LoginWrapper>
        <Login onClick={OnClickGoLogin}>로그인</Login>
        <SingUp onClick={OnClickGoSignUp}>회원가입</SingUp>
      </LoginWrapper>
    </Wrapper>
  );
}
