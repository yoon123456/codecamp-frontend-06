import styled from "@emotion/styled";
import { IActiveProps } from "./signup.types";

export const Wrapper = styled.div`
  width: 420px;
  padding: 60px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Logo = styled.div`
  width: 320px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 35px;
`;
export const Ttile = styled.div`
  width: 380px;
  font-size: 14px;
  color: #ebb63f;
`;
export const Email = styled.input`
  width: 384px;
  height: 64px;
  padding: 20px;
  border: none;
  border-bottom: 3px solid #ebb63f;
  font-size: 18px;
  margin-bottom: 20px;
`;
export const Password = styled.input`
  width: 384px;
  height: 64px;
  padding: 20px;
  border: none;
  border-bottom: 3px solid #ebb63f;
  font-size: 18px;
  margin-bottom: 20px;
`;
export const Error = styled.div`
  color: red;
  font-size: 14px;
`;
export const Submit = styled.button`
  width: 384px;
  height: 66px;
  background-color: ${(props: IActiveProps) =>
    props.isActive ? "ffd600" : "none"};
  text-align: center;
  border-radius: 10px;
  margin-top: 40px;
  cursor: pointer;
`;
