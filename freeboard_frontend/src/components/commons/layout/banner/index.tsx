// yarn add @types/react-slick --dev를 이용해서 타입스크립트와 리액트를 같이 사용한다

import styled from "@emotion/styled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Wrapper = styled.div`
  height: 400px;
  background-color: #ebb63f;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const SliderStyle = styled(Slider)`
  width: 1000px;
  height: 300px;
`;

const ImgWrapper = styled(Slider)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 300px;
  height: 300px;
`;

const Img = styled.img``;
export default function LayoutBanner() {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
  };
  return (
    <Wrapper>
      <SliderStyle {...settings}>
        <ImgWrapper>
          <Img src={"/img/illust-2.jpeg"} />
        </ImgWrapper>
        <ImgWrapper>
          <Img src={"/img/illust-1.jpeg"} />
        </ImgWrapper>
        <ImgWrapper>
          <Img src={"/img/illust-3.jpeg"} />
        </ImgWrapper>
        <ImgWrapper>
          <Img src={"/img/illust-4.jpeg"} />
        </ImgWrapper>
        <ImgWrapper>
          <Img src={"/img/illust-5.jpeg"} />
        </ImgWrapper>
      </SliderStyle>
    </Wrapper>
  );
}
