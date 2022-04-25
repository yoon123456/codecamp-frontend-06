import styled from "@emotion/styled";
import { HeartOutlined } from "@ant-design/icons";
import Slider from "react-slick";

export const Wrapper = styled.div`
  box-sizing: border-box;
  width: 1200px;
  margin: 60px auto 20px auto;
  padding: 50px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Header = styled.div`
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
export const Profile = styled.div`
  width: 500px;
  padding: 5px;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
export const ProfilePhoto = styled.div`
  width: 50px;
  height: 50px;
  padding: 3px;
`;
export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 3px;
`;
export const ProfileName = styled.div`
  font-size: 24px;
  color: black;
  width: 400px;
  height: 36px;
  font-weight: 500;
`;
export const ProfileDate = styled.div`
  font-size: 16px;
  color: #828282;
  width: 400px;
  height: 24px;
  font-weight: 400;
`;
export const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 100px;
`;
export const Icon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 200px;
  height: 500px;
`;
export const IconLink = styled.div`
  display: flex;
  margin-right: 30px;
`;
export const IconMap = styled.div``;
export const Middle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 996px;
  padding: 10px;
`;
export const Product = styled.div``;
export const Remarks = styled.div`
  font-size: 18px;
  color: #bdbdbd;
`;
export const Name = styled.div`
  font-size: 36px;
  color: #4f4f4f;
`;
export const Price = styled.div`
  font-size: 24px;
`;
export const Like = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const LikeIcon = styled(HeartOutlined)`
  color: red;
  width: 40px;
  height: 40px;
  padding: 10px;
`;
export const LikeNum = styled.div`
  width: 40px;
  height: 40px;
  padding: 10px;
  font-size: 18px;
  text-align: center;
`;
export const Carousel = styled.div``;
export const SliderStyle = styled(Slider)`
  width: 500px;
  height: 300px;
`;

export const ImgWrapper = styled(Slider)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 300px;
  height: 300px;
`;

export const Image = styled.img`
  width: 300px;
  height: 300px;
`;

export const Contents = styled.div`
  width: 996px;
  padding: 10px;
`;
export const Tag = styled.div`
  width: 996px;
  padding: 10px;
  color: #bdbdbd;
  font-size: 16px;
  border-bottom: 1px solid #bdbdbd;
`;
export const Map = styled.div`
  width: 792px;
  height: 360px;
  margin: 50px 10px;
  background-color: aliceblue;
`;
export const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 996px;
  padding: 50px;
  border-top: 1px solid #bdbdbd;
`;
export const ListBtn = styled.button`
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
export const EditBtn = styled.button`
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
export const BuyBtn = styled.button`
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
