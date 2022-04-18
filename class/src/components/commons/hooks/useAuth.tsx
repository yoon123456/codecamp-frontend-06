import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// 함수 안에서 use를 쓰고 있다면 함수 이름에 use를 붙여주는것이 관례
export function useAuth() {
  const router = useRouter();
  // const [isLoading, serIsLoading]= useState(true)

  // 권한분기 로직 추가하기
  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      alert("로그인 후 이용 가능합니다");
      router.push("/23-04-login-check");
    }
  }, []);

  //   return {
  //       // isLoading: isLoading 객체에서 키와 밸류가 이름이 같으면 생략가능 shorthand property
  //       isLoading
  //   }
}
