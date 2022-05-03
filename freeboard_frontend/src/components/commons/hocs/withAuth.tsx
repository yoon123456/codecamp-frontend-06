// 로그인이 되었는지 인증여부를 검사하는 컴포넌트(권한분기 로직)

import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState, isLoadedState } from "../../../commons/store/login";
import { getAccessToken } from "../getAccessToken";

// @ts-ignore
export const withAuth = (Component) => (props) => {
  const router = useRouter();
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [isLoaded] = useRecoilState(isLoadedState);

  useEffect(() => {
    if (!isLoaded && !accessToken) {
      getAccessToken().then((newAccessToken) => {
        if (!newAccessToken) {
          alert("로그인 후 이용 가능합니다!!!");
          router.push("/login");
        }
      });
    }
  }, [isLoaded]);

  return <Component {...props} />;
};

// if (!accessToken){
//   getAccessToken().catch{

//   }
// }
