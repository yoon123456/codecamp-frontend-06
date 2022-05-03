// 주소 검색 + 카카오맵 마커
import styled from "@emotion/styled";
import { ChangeEvent, useEffect, useState } from "react";
import _ from "lodash";
import DaumPostcode from "react-daum-postcode";
import { Modal } from "antd";

declare const window: typeof globalThis & {
  kakao: any;
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100px;
  justify-content: space-between;
`;
const Input = styled.input`
  border: 1px solid rgb(195, 194, 204);
  width: 740px;
  height: 46px;
  padding: 0px 1rem;
`;
const Text = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 16px;
  height: 50px;
`;
const SearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Button = styled.button`
  width: 100px;
`;
const Map = styled.div`
  width: 856px;
`;
export default function KakaoMapUI(props: any) {
  const [searchText, setSearchText] = useState("");
  // const [addressDetail, setAddressDetail] = useState("");

  const getDebounce = _.debounce((data) => {
    setSearchText(data);
  }, 1000);

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
    // setSearchText(event.target.value);
  };
  const onChangeDetail = (event: ChangeEvent<HTMLInputElement>) => {
    // setAddressDetail(event.target.value);
    props.setAddress((prev: any) => ({
      ...prev,
      addressDetail: event.target.value,
    }));
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=0f8eaab205858289af49e81c538882e4&autoload=false&libraries=services,clusterer"; // 카카오맵이 로드되면 실행

    document.head.appendChild(script); // header에 script를 자식으로 추가한다.

    script.onload = () => {
      // script가 로드되면 실행
      window.kakao.maps.load(function () {
        // map이 만들어진 이후에 실행
        const mapContainer = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const mapOption = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(
            37.484979002116,
            126.89671615872463
          ), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };
        const map = new window.kakao.maps.Map(mapContainer, mapOption); // 지도 생성 및 객체 리턴 : 담아도 되고 안 담아도 된다.

        // function searchAddrFromCoords(coords: any, callback: any) {
        //   // 좌표로 행정동 주소 정보를 요청합니다
        //   geocoder.coord2RegionCode(coords.getLng(), coords.getLat(), callback);
        // }

        // // 지도 좌측상단에 지도 중심좌표에 대한 주소정보를 표출하는 함수입니다
        // function displayCenterInfo(result: any, status: any) {
        //   if (status === window.kakao.maps.services.Status.OK) {
        //     // var infoDiv = document.getElementById("centerAddr");

        //     for (var i = 0; i < result.length; i++) {
        //       // 행정동의 region_type 값은 'H' 이므로
        //       if (result[i].region_type === "H") {
        //         console.log(result[i].address_name);
import { useEffect } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

interface IKakaoMapViewProps {
  lat?: number;
  lng?: number;
}
export default function KakaoMapView(props: IKakaoMapViewProps) {
  useEffect(() => {
    const script = document.createElement("script"); // <script></script>
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=0f8eaab205858289af49e81c538882e4&autoload=false"; // 카카오맵이 로드되면 실행
    document.head.appendChild(script); // header에 script를 자식으로 추가한다.

    script.onload = () => {
      // script가 로드되면 실행
      window.kakao.maps.load(function () {
        console.log(props?.lat, props?.lng);
        // map이 만들어진 이후에 실행
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(props?.lat, props?.lng), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };
        const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴 : 담아도 되고 안 담아도 된다.
        map.setCursor("move");
        // map.setCursor('url(/cursor.ico), default' :
        const imageSrc = "/location.png"; // 마커이미지의 주소입니다
        const imageSize = new window.kakao.maps.Size(64, 69); // 마커이미지의 크기입니다
        const imageOption = { offset: new window.kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

        // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
        const markerImage = new window.kakao.maps.MarkerImage(
          imageSrc,
          imageSize,
          imageOption
        );
        const markerPosition = new window.kakao.maps.LatLng(
          props?.lat,
          props?.lng
        ); // 마커가 표시될 위치입니다

        // 마커를 생성합니다
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
          image: markerImage, // 마커이미지 설정
        });
        marker.setMap(map);
      });
    };
  }, [props.lat]);

  return (
    <>
      <div>
        <div id="map" style={{ width: 850, height: 400 }}></div>
      </div>
    </>
  );
}
import { useEffect } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

interface IKakaoMapViewProps {
  lat?: number;
  lng?: number;
}
export default function KakaoMapView(props: IKakaoMapViewProps) {
  useEffect(() => {
    const script = document.createElement("script"); // <script></script>
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=0f8eaab205858289af49e81c538882e4&autoload=false"; // 카카오맵이 로드되면 실행
    document.head.appendChild(script); // header에 script를 자식으로 추가한다.

    script.onload = () => {
      // script가 로드되면 실행
      window.kakao.maps.load(function () {
        console.log(props?.lat, props?.lng);
        // map이 만들어진 이후에 실행
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(props?.lat, props?.lng), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };
        const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴 : 담아도 되고 안 담아도 된다.
        map.setCursor("move");
        // map.setCursor('url(/cursor.ico), default' :
        const imageSrc = "/location.png"; // 마커이미지의 주소입니다
        const imageSize = new window.kakao.maps.Size(64, 69); // 마커이미지의 크기입니다
        const imageOption = { offset: new window.kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

        // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
        const markerImage = new window.kakao.maps.MarkerImage(
          imageSrc,
          imageSize,
          imageOption
        );
        const markerPosition = new window.kakao.maps.LatLng(
          props?.lat,
          props?.lng
        ); // 마커가 표시될 위치입니다

        // 마커를 생성합니다
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
          image: markerImage, // 마커이미지 설정
        });
        marker.setMap(map);
      });
    };
  }, [props.lat]);

  return (
    <>
      <div>
        <div id="map" style={{ width: 850, height: 400 }}></div>
      </div>
    </>
  );
}
