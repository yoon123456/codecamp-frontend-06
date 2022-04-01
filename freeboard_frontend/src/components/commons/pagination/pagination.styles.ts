import styled from "@emotion/styled";

export const Wrapper = styled.div`
  box-sizing: border-box;
  width: 1200px;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;
export const PrevButton = styled.div<{ isActive: boolean }>`
  color: ${(props) => (props.isActive ? "lightgray" : "black")};
  border: none;
  background-color: white;
  padding: 20px;
  font-size: 16px;
  cursor: pointer;
`;
export const PageNumber = styled.div`
  padding: 20px;
  font-size: 20px;
  cursor: pointer;
`;
export const NextButton = styled.div`
  color: ${(props) => (props.isActive ? "lightgray" : "black")};
  border: none;
  background-color: white;
  padding: 20px;
  font-size: 16px;
  cursor: pointer;
`;
