import styled from "@emotion/styled";
import { IProps } from "./login.types";

export const Wrapper = styled.div``;
export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;
export const Title = styled.h1``;
export const Label = styled.span``;
export const Input = styled.input``;
export const Error = styled.div`
  color: red;
`;
export const Button = styled.button`
  background-color: ${(props: IProps) => (props.isActive ? "skyblue" : "none")};
`;
