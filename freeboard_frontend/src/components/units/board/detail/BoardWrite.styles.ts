import styled from "@emotion/styled";
import ReactPlayer from "react-player";

export const Board = styled.div`
  box-sizing: border-box;
  width: 1200px;
  margin: 60px auto 20px auto;
  padding: 80px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const BoardHeader = styled.div`
  width: 996px;
  height: 90px;
  border-bottom: 1px solid #bdbdbd;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;
export const BoardHeaderProfile = styled.div`
  width: 500px;
  padding: 5px;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
export const BoardHeaderProfilePhoto = styled.div`
  width: 50px;
  height: 50px;
  padding: 3px;
`;
export const BoardHeaderProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 3px;
`;
export const BoardHeaderProfileWrapperName = styled.div`
  font-size: 24px;
  color: black;
  width: 400px;
  height: 36px;
  font-weight: 500;
`;
export const BoardHeaderProfileWrapperDate = styled.div`
  font-size: 16px;
  color: #828282;
  width: 400px;
  height: 24px;
  font-weight: 400;
`;
export const BoardHeaderIconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 100px;
`;
export const BoardHeaderAddress = styled.div`
  align-items: center;
  width: 200px;
  height: 40px;
`;
export const BoardHeaderIcon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 200px;
  height: 500px;
`;

export const BoardHeaderIconLink = styled.div`
  display: flex;
  margin-right: 30px;
`;
export const BoardHeaderIconMap = styled.div`
  display: flex;
`;
export const BoardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 996px;
  padding: 10px;
`;
export const BoardBodyTitle = styled.h1`
  width: 996px;
  height: 90px;
  padding: 20px;
  font-weight: 700;
  font-size: 36px;
`;
export const BoardBodyImage = styled.image`
  width: 996px;
  height: 500px;
  margin: 0 auto;
  margin-bottom: 30px;
`;

export const Image = styled.img`
  width: 996px;
  height: 480px;
  margin-bottom: 30px;
`;
export const BoardBodyContents = styled.div`
  width: 996px;
  height: 100px;
  margin-bottom: 30px;
`;
export const BoardBodyVideo = styled(ReactPlayer)`
  margin-bottom: 50px;
`;
export const BoardFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 180px;
  height: 120px;
  padding: 10px;
`;
export const BoardFooterLike = styled.button`
  display: flex;
  padding-right: 10px;
  border: none;
  background-color: white;
  cursor: pointer;
`;
export const BoardFooterDislike = styled.button`
  display: flex;
  padding-right: 10px;
  border: none;
  background-color: white;
  cursor: pointer;
`;
export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 80px;
`;
export const Button = styled.button`
  width: 150px;
  height: 50px;
  border: 1px solid gray;
  border-radius: 5px;
  margin: 0px 12px;
  font-size: 24px;
  background-color: #ffd600;
  border: none;
  cursor: pointer;

  :hover {
    background-color: black;
    color: white;
  }
`;
