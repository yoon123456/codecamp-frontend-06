import styled from "@emotion/styled";
import { useRouter } from "next/router";
import {
  userInfoState,
  accessTokenState,
} from "../../../../commons/store/login";
import { useRecoilState } from "recoil";
import { Modal } from "antd";
import { useMutation, useQuery } from "@apollo/client";
import {
  FETCH_USER_LOGGEDIN,
  LOGOUT_USER,
} from "../../../units/login/login.quries";

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

export default function LayoutHeader() {
  const router = useRouter();
  const [xs, setUserInfo] = useRecoilState(userInfoState);
  const [accessToken] = useRecoilState(accessTokenState);
  const { data } = useQuery(FETCH_USER_LOGGEDIN);
  const [logoutUser] = useMutation(LOGOUT_USER);

  if (accessToken) {
    setUserInfo(data);
  }
  const OnClickGoList = () => {
    router.push("/boards");
  };

  const OnClickGoLogin = () => {
    if (!accessToken) {
      router.push("/login");
    } else {
      router.push("개인정보 창으로 이동시키기");
    }
  };
  const onClicPayment = () => {
    router.push("/payment");
  };
  const OnClickGoSignUp = () => {
    if (!accessToken) {
      router.push("/signup");
    } else {
      Modal.warning({
        title: "logout??",
        content: "정말로 로그아웃하시겠습니까?",
      });
    }
  };
  const OnClickLogout = async () => {
    try {
      Modal.warning({
        title: "logout??",
        content: "정말로 로그아웃하시겠습니까?",
      });
      await logoutUser();
      location.reload();
      router.push("/boards");
    } catch {
      Modal.error({
        content: "로그아웃 실패",
      });
    }
  };
  return (
    <Wrapper>
      <Logo src={"/img/logo.png"} onClick={OnClickGoList}></Logo>
      <LoginWrapper>
        <Login onClick={!accessToken ? OnClickGoLogin : onClicPayment}>
          {!accessToken
            ? "로그인"
            : `"${data?.fetchUserLoggedIn.name}"님의 포인트 "${data?.fetchUserLoggedIn.userPoint.amount}P" `}
        </Login>

        <SingUp onClick={!accessToken ? OnClickGoSignUp : OnClickLogout}>
          {!accessToken ? "회원가입" : "로그아웃"}
        </SingUp>
      </LoginWrapper>
    </Wrapper>
  );
}
