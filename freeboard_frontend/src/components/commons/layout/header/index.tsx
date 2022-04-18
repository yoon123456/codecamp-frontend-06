import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { userInfoState } from "../../../../commons/store/login";
import { useRecoilState } from "recoil";
import { withAuth } from "../../hocs/withAuth";
import { Modal } from "antd";

const Wrapper = styled.div`
  height: 120px;
  padding: 10px 150px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.img`
  cursor: pointer;
`;
const LoginWrapper = styled.div`
  width: 500px;
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

function LayoutHeader() {
  const router = useRouter();
  const [userInfo] = useRecoilState(userInfoState);

  const OnClickGoList = () => {
    router.push("/boards");
  };

  const OnClickGoLogin = () => {
    if (!userInfo.name) {
      router.push("/login");
    } else {
      router.push("개인정보 창으로 이동시키기");
    }
  };
  const OnClickGoSignUp = () => {
    if (!userInfo.name) {
      router.push("/signup");
    } else {
      Modal.warning({
        title: "logout??",
        content: "정말로 로그아웃하시겠습니까?",
      });
    }
  };
  return (
    <Wrapper>
      <Logo src={"/img/logo.png"} onClick={OnClickGoList}></Logo>
      <LoginWrapper>
        <Login onClick={OnClickGoLogin}>
          {!userInfo ? "로그인" : `"${userInfo.name}"님 안녕하세요`}
        </Login>
        <SingUp onClick={OnClickGoSignUp}>
          {!userInfo ? "회원가입" : "로그아웃"}
        </SingUp>
      </LoginWrapper>
    </Wrapper>
  );
}
export default withAuth(LayoutHeader);
