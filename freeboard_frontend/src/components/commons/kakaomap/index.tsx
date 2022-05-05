// // jskey:  7b36e30971445aeef2fff1aa2bd77f73
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { FETCH_USED_ITEM } from "../../units/marketBoard/detail/marketDetail.query";

declare const window: typeof globalThis & {
  kakao: any;
};

export interface IKakaoProps {
  lat: any;
  lng: any;
  setLat: any;
  setLng: any;
  address: string;
  addressDetail: string;
  isEdit: boolean;
  data: any;
  setAddress: any;
}

export default function KakaoMapPage(props: IKakaoProps) {
  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: String(router.query.marketId) },
  });
  console.log(data, "asd");
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
        const mapContainer = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const mapOption = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(
            props.isEdit ? lat : 33.450701,
            props.isEdit ? lng : 126.570667
          ), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };

        const map = new window.kakao.maps.Map(mapContainer, mapOption);
        // 지도 생성 및 객체 리턴 map으로 선언한 이유는 나중에 다른 기능들에서 쓰기 위해서
        const marker = new window.kakao.maps.Marker({
          position: map.getCenter(),
        });
        marker.setMap(map);

        const geocoder = new window.kakao.maps.services.Geocoder();

        // 주소로 좌표를 검색합니다
        geocoder.addressSearch(
          props.address,
          function (result: any, status: any) {
            // 정상적으로 검색이 완료됐으면
            if (status === window.kakao.maps.services.Status.OK) {
              const coords = new window.kakao.maps.LatLng(
                result[0].y,
                result[0].x
              );
              props.setLat(coords.Ma);
              props.setLng(coords.La);

              // props.setAddress((prev: any) => ({
              //   ...prev,
              //   lat: Number(result[0].y),
              //   lng: Number(result[0].x),
              // }));

              // 결과값으로 받은 위치를 마커로 표시합니다
              const marker = new window.kakao.maps.Marker({
                map: map,
                position: coords,
              });

              // 인포윈도우로 장소에 대한 설명을 표시합니다
              const infowindow = new window.kakao.maps.InfoWindow({
                content:
                  '<div style="width:150px;text-align:center;padding:3px;">거래장소!</div>',
              });
              infowindow.open(map, marker);

              // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
              map.setCenter(coords);
            }
          }
        );
      });
    };
  }, [props.address, data]);
  return (
    <div>
      <div id="map" style={{ width: 380, height: 250 }}></div>
    </div>
  );
}
