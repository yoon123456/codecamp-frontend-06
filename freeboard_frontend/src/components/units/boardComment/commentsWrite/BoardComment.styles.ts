import styled from "@emotion/styled";
import { Rate } from "antd";

export const CommentWrapper = styled.div`
  box-sizing: border-box;
  width: 1200px;
  margin: 0px auto;
  padding: 20px;
  padding-bottom: 50px;
  border-top: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const CommentTitle = styled.div`
  width: 1200px;
  padding: 10px;
  font-size: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const CommentWriterWrapper = styled.div`
  width: 1200px;
  padding-top: 10px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
export const CommentWriter = styled.input`
  width: 180px;
  height: 52px;
  padding: 10px;
  margin-right: 5px;
  border: 1px solid #bdbdbd;
`;
export const CommentPassword = styled.input`
  width: 180px;
  height: 52px;
  padding: 10px;
  margin-right: 5px;
  border: 1px solid #bdbdbd;
`;
export const CommentRating = styled(Rate)`
  padding: 10px;
`;
export const CommentInputWrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #bdbdbd;
`;
export const CommentInputBody = styled.textarea`
  width: 1200px;
  height: 120px;
  padding: 10px;
  color: #bdbdbd;
  border-left: 1px solid #bdbdbd;
  border-right: 1px solid #bdbdbd;
  border-top: none;
  border-bottom: none;
`;
export const CommentInputFooter = styled.div`
  width: 1200px;
  height: 45px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #bdbdbd;
`;
export const CommentInputNumber = styled.div`
  padding-left: 10px;
  font-size: 16px;
  color: #bdbdbd;
`;
export const CommentButton = styled.button`
  width: 92px;
  height: 46px;
  background-color: black;
  color: white;
  cursor: pointer;
`;
