import styled from "@emotion/styled";
import { ISubmitButtonProps } from "./BoardWrite.types";

export const Title = styled.h1`
  box-sizing: border-box;
  font-size: 36px;
  font-weight: 700 bold;
  line-height: 53.28px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1200px;
  margin: 60px auto;
  padding: 80px;
  border: 1px solid #bdbdbd;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`;

export const WrapperBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px 20px 0;
`;
export const Star = styled.div`
  display: inline;
  color: #ffd600;
`;

export const InputHeader = styled.div`
  font-size: 16px;
  font-weight: 500;
`;

export const InputBody = styled.input`
  width: 486px;
  height: 52px;
  border: 1px solid #bdbdbd;
  font-size: 18px;
`;

export const InputTitle = styled.input`
  width: 996px;
  height: 52px;
  border: 1px solid #bdbdbd;
  margin: 0 0 20px 0;
  font-size: 18px;
`;

export const InputContents = styled.textarea`
  width: 996px;
  height: 480px;
  border: 1px solid #bdbdbd;
  font-size: 18px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 10px 20px 0;
  width: 996px;
  font-size: 16px;
  font-weight: 500;
`;

export const InputPostNumber = styled.input`
  width: 77px;
  height: 52px;
  border: 1px solid #bdbdbd;
  margin: 0 10px 0 0;
`;
export const InputPostNumberSearch = styled.button`
  width: 124px;
  height: 52px;
  border: 1px solid #bdbdbd;
  background-color: black;
  color: white;
`;
export const InputPhoto = styled.img`
  width: 77px;
  height: 77px;
  border: 1px solid #bdbdbd;
  margin: 0 10px 0 0;
  background-color: #bdbdbd;
  background-size: cover;
  cursor: pointer;
`;

export const Option = styled.div`
  font-size: 16px;
  width: 996px;
  height: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Choice = styled.input`
  display: inline-block;
  &:checked {
    background-color: #ffd600;
  }
`;
export const Label = styled.div`
  font-size: 16px;
  display: inline;
`;
export const Submit = styled.button`
  box-sizing: border-box;
  font-size: 20px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 179px;
  height: 52px;
  margin: 60px auto;
  padding: 40px;
  border: 1px solid #bdbdbd;
  background-color: ${(props: ISubmitButtonProps) =>
    props.isEdit === true
      ? "#ffd600"
      : props.isActive === true
      ? "#ffd600"
      : "none"};
`;

export const Error = styled.div`
  color: red;
  font-size: 18px;
`;
