// 로그인이 되었는지 인증여부를 검사하는 컴포넌트(권한분기 로직)

import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store/login";

// @ts-ignore
export const withAuth = (Component) => (props) => {
  const router = useRouter();
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  useEffect(() => {
    console.log(accessToken);
    if (!accessToken) {
      Modal.error({
        content: "로그인 후 이용 가능합니다. 로그인 페이지로 이동합니다",
      });
      router.push("/login");
    }
  }, []);

  return <Component {...props} />;
};
