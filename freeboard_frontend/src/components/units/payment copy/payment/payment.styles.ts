import styled from "@emotion/styled";
interface IProps {
  isActive: any;
}

export const Button = styled.button`
  margin-top: 30px;
  width: 100%;
  height: 40px;
  border: none;
  color: white;
  font-size: 18px;
  background: ${(props: IProps) => (props.isActive ? "#f70000" : "lightgray")};
  cursor: pointer;
`;
