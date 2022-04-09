import styled from "@emotion/styled";
import Slider from "react-slick";

export const Wrapper = styled.div`
  padding: 0;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  background-image: url("/img/home.jpg");
  background-size: cover;
  z-index: -1;
`;
export const SliderStyle = styled(Slider)`
  width: 600px;
  height: 25vh;
  position: fixed;
  top: 52%;
  left: 29%;
`;
export const DivWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 65px;
  padding-left: 20px;
  padding-right: 10px;
  margin: 0 auto;
`;
export const Div = styled.div`
  font-size: 2em;
  margin: 0 auto;
`;
export const Input = styled.input`
  width: 200px;
  border: none;
`;
export const Button = styled.div`
  width: 200px;
  padding: 20px;
  border: none;
  background-color: white;
  cursor: pointer;
`;
