import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 100px;
  padding: 10px 150px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const Logo = styled.div`
  width: 200px;
  font-size: 1.3rem;
  cursor: pointer;
  text-decoration: underline;
`;
export const LoginWrapper = styled.div`
  width: 500px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;
export const Login = styled.div`
  padding: 20px;
  cursor: pointer;
`;
export const SingUp = styled.div`
  padding: 10px;
  border: 1px solid lightgray;
  background-color: #ffd600;
  border-radius: 5px;
  cursor: pointer;
  :hover {
    background-color: black;
    color: white;
  }
`;
