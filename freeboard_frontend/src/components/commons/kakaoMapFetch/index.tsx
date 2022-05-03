// jskey:  7b36e30971445aeef2fff1aa2bd77f73
// import Head from "next/head";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { FETCH_USED_ITEM } from "../../units/marketBoard/detail/marketDetail.query";
// import Script from "next/script"

declare const window: typeof globalThis & {
  kakao: any;
};

export default function KakaoMapFetchPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: String(router.query.marketId) },
  });
  const lat = data?.fetchUseditem.useditemAddress?.lat;
  const lng = data?.fetchUseditem.useditemAddress?.lng;
  useEffect(() => {
    const script = document.createElement("script"); // <script></script>
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=7b36e30971445aeef2fff1aa2bd77f73&autoload=false&libraries=services,clusterer";
    // 물음표뒤에 객체의 형태로 데이터를 전송하는것을 쿼리스트링이라고한다
    document.head.appendChild(script);
    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(
            // 33.450701, 126.570667
            lat,
            lng
          ), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };
        const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴 map으로 선언한 이유는 나중에 다른 기능들에서 쓰기 위해서

        // 마커가 표시될 위치입니다
        const markerPosition = new window.kakao.maps.LatLng(lat, lng);

        // 마커를 생성합니다
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);
      });
    };
  }, [lat, lng]);
  return (
    <div>
      {/* <Head>
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=7b36e30971445aeef2fff1aa2bd77f73"
        ></>
      </Head> */}
      <div id="map" style={{ width: "792px", height: "360px" }}></div>
      <div>
        {data?.fetchUseditem?.useditemAddress?.address}
        {data?.fetchUseditem?.useditemAddress?.addressDetail}
        {data?.fetchUseditem.useditemAddress?.lat}
        {data?.fetchUseditem.useditemAddress?.lng}
      </div>
      <div></div>
    </div>
  );
}
