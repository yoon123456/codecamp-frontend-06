import styled from "@emotion/styled";

const Wrapper = styled.div`
  height: 100px;
  background-color: yellow;
`;
export default function LayoutBanner() {
  return <Wrapper>여기는 배너영역 입니다 banner</Wrapper>;
}

// yarn add @types/react-slick --dev를 이용해서 타입스크립트와 리액트를 같이 사용한다
