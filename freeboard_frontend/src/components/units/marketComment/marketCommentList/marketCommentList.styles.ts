import styled from "@emotion/styled";

export const Wrapper = styled.div`
  box-sizing: border-box;
  width: 1200px;
  margin: 0px auto;
  padding: 20px;
  border-top: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const CommentWrapper = styled.div`
  width: 1200px;
  padding-top: 20px;
  padding-bottom: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const CommentPhoto = styled.div`
  width: 80px;
  padding-bottom: 80px;
`;
export const CommentHeader = styled.div`
  width: 1050px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const CommentProfile = styled.div`
  width: 1050px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-top: 15px;
`;
export const CommentWriter = styled.div`
  height: 40px;
  font-size: 20px;
  padding-right: 20px;
  padding-left: 10px;
`;
export const CommentBody = styled.div`
  width: inherit;
  font-size: 18px;
  color: #4f4f4f;
  padding: 10px;
  padding-bottom: 10px;
  border: none;
`;
export const CommentFooter = styled.div`
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
export const CommentDelete = styled.div`
  width: 40px;
  border: none;
  background-color: white;
  padding-bottom: 60px;
  cursor: pointer;
`;

export const InfiniteScrollWrapper = styled.div`
  & {
    ::-webkit-scrollbar {
      width: 0;
      display: none;
    }
  }
`;
