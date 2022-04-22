import { useEffect } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function QuizMapPage() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=f0ddd4683798b968caed7589e6a4dc92&autoload=false";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
        const options = {
          //지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(37.2830565, 127.065923), //지도의 중심좌표.
          level: 3, //지도의 레벨(확대, 축소 정도)
        };
        const map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

        const positions = [
          {
            title: "맛집공유:툇마루(흑임자라뗴 jmt)",
            latlng: new window.kakao.maps.LatLng(37.7927083, 128.9146829),
          },
          {
            title: "맛집공유:하주옥(최애냉면집)",
            latlng: new window.kakao.maps.LatLng(35.067567, 128.076069),
          },
        ];
        let imageSrc =
          "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png";

        for (let i = 0; i < positions.length; i++) {
          // 마커 이미지의 이미지 크기 입니다
          const imageSize = new window.kakao.maps.Size(24, 35);

          // 마커 이미지를 생성합니다
          const markerImage = new window.kakao.maps.MarkerImage(
            imageSrc,
            imageSize
          );

          // 마커를 생성합니다
          const marker = new window.kakao.maps.Marker({
            map: map, // 마커를 표시할 지도
            position: positions[i].latlng, // 마커를 표시할 위치
            title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
            image: markerImage, // 마커 이미지
          });
          // 지도에 클릭 이벤트를 등록합니다
          // 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
          window.kakao.maps.event.addListener(
            map,
            "click",
            function (mouseEvent: any) {
              // 클릭한 위도, 경도 정보를 가져옵니다
              let latlng = mouseEvent.latLng;

              // 마커 위치를 클릭한 위치로 옮깁니다
              marker.setPosition(latlng);

              let message =
                "클릭한 위치의 위도는 " + latlng.getLat() + " 이고, ";
              message += "경도는 " + latlng.getLng() + " 입니다";

              let resultDiv = document.getElementById("clickLatlng");
              resultDiv.innerHTML = message;
            }
          );
        }
      });
    };
  }, []);

  return (
    <div>
      <div id="map" style={{ width: "1200px", height: "1000px" }}></div>
      <div id="clickLatlng"></div>
    </div>
  );
}
