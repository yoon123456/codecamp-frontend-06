import styled from "@emotion/styled";

export const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 800px;
  margin: 50px auto;
  padding: 50px;
  border: 1px solid #bdbdbd;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;
export const H1 = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
`;
export const PigImage = styled.img`
  width: 80px;
  height: 56px;
  margin-bottom: 20px;
`;
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px; ;
`;
export const InputBox = styled.input`
  width: 300px;
  height: 50px;
  padding: 5px;
  margin: 10px 0;
  border-radius: 5px;
  :focus {
    outline: none;
    border: 2px solid #ffd600;
  }
`;

export const Select = styled.select``;
export const Button = styled.button`
  width: 200px;
  height: 50px;
  border: none;
  background-color: #ffd600;
  border: 1px solid #f2f2f2;
  border-radius: 5px;
  font-size: 16px;
  margin-top: 10px;
  cursor: pointer;
  :hover {
    background-color: black;
    color: white;
  }
`;
export const InputOptionBox = styled.option``;
export const Div = styled.div`
  font-size: 18px;
  color: #ffa500;
`;
// export const Option = styled.option``;
// export const Option = styled.option``;
