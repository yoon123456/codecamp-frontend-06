import styled from "@emotion/styled";

const Button = styled.button`
  width: 100px;
  height: 50px;
  background-color: ${(props) => (props.isActive ? "yellow" : "")};
`;

export default function Button01(props) {
  return <Button isActive={props.isActive}>로그인</Button>;
}
