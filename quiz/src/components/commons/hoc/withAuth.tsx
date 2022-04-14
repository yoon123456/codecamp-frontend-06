// 로그인이 되었는지 즉 인증여부를 검사하는 컴포넌트 입니다
import { useRouter } from "next/router";
import { useEffect } from "react";

// @ts-ignore
export const withAuth = (Component) => (Props) => {
  const router = useRouter();

  // 권한분기 로직 추가하기
  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      alert("로그인 후 이용 가능합니다");
      router.push("/day23/hoc/main");
    }
  }, []);

  return <Component {...Props} />;
};
