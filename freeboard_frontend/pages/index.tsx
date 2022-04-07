import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useState } from "react";
import Slider from "react-slick";

export default function Home() {
  const Wrapper = styled.div`
    padding: 0;
    margin: auto auto;
    width: 1200px;
    height: 800px;
    box-sizing: border-box;
    background-image: url("/img/home.jpg");
    background-size: cover;
    z-index: -1;
  `;
  const settings = {
    dots: true,
    infinite: true,
    speed: 8000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const SliderStyle = styled(Slider)`
    width: 600px;
    height: 200px;
    position: absolute;
    left: 30%;
    top: 50%;
  `;
  const DivWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 65px;
    padding-left: 10px;
    padding-right: 10px;
  `;
  const Div = styled.div`
    font-size: 40px;
  `;
  const Input = styled.input`
    width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
  `;
  const [name, setName] = useState("");
  const router = useRouter();
  const onChangeName = (event: any) => {
    setName(event?.target.value);
  };
  const onClickGoHome = () => {
    router.push("/boards");
  };

  return (
    <Wrapper>
      <SliderStyle {...settings}>
        <DivWrapper>
          <Div>WELCOME TO OUR PAGE</Div>
        </DivWrapper>
        <DivWrapper>
          <Div>WHAT IS YOUR NAME?</Div>
          <Input
            type="text"
            placeholder="이름을 적어주세요"
            onChange={onChangeName}
          />
        </DivWrapper>
        <DivWrapper>
          <Div>{name}님 안녕하세요</Div>
          <button onClick={onClickGoHome}>고고</button>
        </DivWrapper>
      </SliderStyle>
    </Wrapper>
  );
}

// http://www.readinggroup.or.kr/images/bg_main_01.jpg
