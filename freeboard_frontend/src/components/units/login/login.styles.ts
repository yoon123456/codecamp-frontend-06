import styled from "@emotion/styled";
import { IKeepButton } from "./login.types";

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
`;
export const Error = styled.div`
  color: red;
  font-size: 12px;
`;
export const Keep = styled.div`
  width: 384px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  margin-bottom: 20px;
`;
export const KeepButton = styled.div`
  width: 18px;
  height: 18px;
  border: 2px solid black;
  border-radius: 50%;
  margin-right: 10px;
  cursor: pointer;
  background-color: ${(props: IKeepButton) =>
    props.isCheck ? "#ebb63f" : "none"};
`;
export const KeepLogin = styled.div`
  font-size: 15px;
`;
export const Submit = styled.div`
  width: 384px;
  height: 66px;
  background-color: #ebb63f;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-bottom: 40px;
  cursor: pointer;
`;
export const FindWrapper = styled.div`
  width: 384px;
  border-top: 3px solid #ebb63f;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
export const FindEmail = styled.div`
  padding: 5px;
  font-size: 14px;
  cursor: pointer;
`;
export const FindPassword = styled.div`
  padding: 5px;
  font-size: 14px;
  cursor: pointer;
`;
export const Singup = styled.div`
  padding: 5px;
  font-size: 14px;
  cursor: pointer;
`;
