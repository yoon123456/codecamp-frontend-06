// 로그인이 되었는지 즉 인증여부를 검사하는 컴포넌트 입니다
import { useRouter } from "next/router";
import { ComponentType, useEffect } from "react";

// prettier-ignore
export const withAuth = (Component:ComponentType) => < P extends {}>(Props:P) => {
  const router = useRouter();

  // 권한분기 로직 추가하기
  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      alert("로그인 후 이용 가능합니다");
      router.push("/23-04-login-check");
    }
  }, []);

  return <Component {...Props} />;
};
