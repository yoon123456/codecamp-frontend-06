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

export const CommentFetchWrapper = styled.div`
  width: 1200px;
  border-bottom: 1px solid #bdbdbd;
  padding-top: 20px;
  padding-bottom: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const CommentFetchPhoto = styled.div`
  width: 80px;
  padding-bottom: 80px;
`;
export const CommentFetchHeader = styled.div`
  width: 1050px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const CommentFetchProfile = styled.div`
  width: 1050px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-top: 15px;
`;
export const CommentFetchWriter = styled.div`
  height: 40px;
  font-size: 16px;
  padding-right: 20px;
  padding-left: 10px;
`;
export const CommentFetchRating = styled(Rate)`
  height: 40px;
  font-size: 16px;
  padding-right: 20px;
`;
export const CommentFetchBody = styled.div`
  width: inherit;
  font-size: 16px;
  color: #4f4f4f;
  padding: 10px;
  padding-bottom: 10px;
  border: none;
`;
export const CommentFetchFooter = styled.div`
  width: inherit;
  font-size: 12px;
  padding: 10px;
  padding-top: 20px;
  color: #bdbdbd;
`;
export const CommentEdit = styled.button`
  width: 40px;
  border: none;
  background-color: white;
  padding-bottom: 60px;
  cursor: pointer;
`;
export const CommentDelete = styled.button`
  width: 40px;
  border: none;
  background-color: white;
  padding-bottom: 60px;
  cursor: pointer;
`;
