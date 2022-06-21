import styled from "@emotion/styled";

export const Wrapper = styled.div`
  padding: 20px;
  width: 70vw;
  height: 100vh;
  box-sizing: border-box;
  background-image: url("/img/home.jpg");
  background-size: contain;
  background-repeat: no-repeat;
  z-index: -3;
  position: relative;
`;
export const WrapperIn = styled.div`
  width: 600px;
  height: 20vh;
  position: absolute;
  top: 45%;
  left: 19.5%;
`;
export const DivWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Div = styled.div`
  font-size: 2em;
`;
export const Input = styled.input`
  width: 200px;
  border: none;
`;
export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  padding: 20px;
  border: none;
  cursor: pointer;
`;
