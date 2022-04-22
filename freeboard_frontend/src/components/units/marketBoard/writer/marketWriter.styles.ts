import styled from "@emotion/styled";
import { IProps } from "./marketWriter.types";

export const Wrapper = styled.div`
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
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;
export const H1 = styled.div`
  font-size: 36px;
  font-weight: 700 bold;
  padding: 10px;
`;
export const Header = styled.div`
  display: flex;
  flex-direction: column;
  width: 1000px;
`;
export const Label = styled.div``;
export const Input = styled.input`
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  margin-bottom: 10px;
`;
export const QuillWrapper = styled.div`
  height: 240px;
`;
export const Body = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 0;
`;

export const MapWrapper = styled.div``;
export const Map = styled.div`
  width: 380px;
  height: 250px;
  border: 1px solid black;
`;
export const GPSWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
`;
export const LWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const LATLNG = styled.input`
  width: 110px;
  height: 50px;
`;
export const GPSIcon = styled.div``;
export const AddressInput = styled.input`
  width: 500px;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  margin-bottom: 20px;
`;
export const Photo = styled.div`
  width: 1000px;
`;
export const ImageUpload = styled.div`
  width: 150px;
  height: 150px;
  border: 1px solid black;
`;
export const RadioWrapper = styled.div`
  width: 1000px;
  padding-top: 20px;
`;
export const Radio = styled.input`
  margin-right: 10px;
  margin-left: 10px;
`;
export const Footer = styled.div``;
export const Submit = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 500;
  width: 179px;
  height: 52px;
  padding: 40px;
  border: 1px solid #bdbdbd;
  background-color: ${(props: IProps) => (props.isActive ? "#ffd600" : "")};
`;
export const Error = styled.div`
  color: red;
  font-size: 18px;
`;
