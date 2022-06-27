import * as S from "./header.styeld";
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

export default function LayoutHeader() {
  const router = useRouter();
  const [, setUserInfo] = useRecoilState(userInfoState);
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
    <S.Wrapper>
      <S.Logo onClick={OnClickGoList}>YEWON</S.Logo>
      <S.LoginWrapper>
        <S.Login onClick={!accessToken ? OnClickGoLogin : onClicPayment}>
          {!accessToken
            ? "로그인"
            : `"${data?.fetchUserLoggedIn.name}"님의 포인트 "${data?.fetchUserLoggedIn.userPoint.amount}P" `}
        </S.Login>
        <S.SingUp onClick={!accessToken ? OnClickGoSignUp : OnClickLogout}>
          {!accessToken ? "회원가입" : "로그아웃"}
        </S.SingUp>
      </S.LoginWrapper>
    </S.Wrapper>
  );
}
