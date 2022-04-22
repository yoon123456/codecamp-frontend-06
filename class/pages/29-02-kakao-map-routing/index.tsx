// jskey:  7b36e30971445aeef2fff1aa2bd77f73

import { useRouter } from "next/router";
import Link from "next/link";

export default function KakaoMapPage() {
  const router = useRouter();
  const onClickMoveToMap = () => {
    router.push("/29-03-kakao-map-routed");
  };
  return (
    // <div>
    //   {/* <button onClick={onClickMoveToMap}>맵으로 이동하기</button> */}
    //   <a href="/29-03-kakao-map-routed">맵으로 이동하기</a>
    // </div>
    <Link href="/29-03-kakao-map-routed">
      <a>맵으로 이동하기</a>
    </Link>
  );
}
