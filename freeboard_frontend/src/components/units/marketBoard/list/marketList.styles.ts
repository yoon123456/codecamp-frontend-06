import styled from "@emotion/styled";
import { IProps } from "./marketList.type";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 1200px;
  padding: 20px;
  margin: 0 auto;
`;
export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid black;
`;
export const SaleProd = styled.div`
  width: 130px;
  font-size: 18px;
  padding: 10px 20px;
  :hover {
    border-bottom: 3px solid #ffd600;
  }
`;
export const SoldProd = styled.div`
  width: 130px;
  font-size: 18px;
  padding: 10px 20px;
  :hover {
    border-bottom: 3px solid #ffd600;
  }
`;
export const Search = styled.input`
  width: 400px;
  height: 50px;
  border: none;
  background-color: #f2f2f2;
  font-size: 16px;
  margin-left: 10px;
  margin-right: 10px;
  padding: 10px;
`;
export const SearchDate = styled.input`
  width: 300px;
  height: 50px;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #f2f2f2;
  border-radius: 10px;
  margin-right: 10px;
`;
export const SearchBtn = styled.button`
  width: 80px;
  height: 50px;
  border: none;
  background-color: #ffd600;
  border: 1px solid #f2f2f2;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  :hover {
    background-color: black;
    color: white;
  }
`;
export const Body = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid black;
`;
export const BodyPhoto = styled.div`
  width: 180px;
`;
export const ProdPhoto = styled.img`
  width: 100px;
  height: 100px;
`;

export const Default = styled.img`
  width: 100px;
  height: 100px;
  background-color: aqua;
`;
export const BodyProduct = styled.div`
  width: 700px;
  cursor: pointer;
`;
export const ProdTitle = styled.div`
  font-size: 24px;
`;
export const Word = styled.span`
  color: ${(props: IProps) => (props.isMatched ? "red" : "black")};
`;
export const ProdDetail = styled.div`
  font-size: 16px;
  color: #4f4f4f;
`;
export const prodTag = styled.div`
  font-size: 16px;
  color: #bdbdbd;
`;
export const SellerWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const SellerInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 3px;
`;
// export const SellerIcon = styled(SmileOutlined)`
//   width: 40px;
//   height: 40px;
// `;
export const SellerName = styled.div`
  font-size: 16px;
  color: #4f4f4f;
  padding: 3px;
`;
export const LikeProdWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5px;
`;
// export const LikeProdIcon = styled.div``;
export const LikeProdCount = styled.div`
  font-size: 16px;
  color: #4f4f4f;
  padding-left: 10px;
`;
export const BodyPrice = styled.div``;
export const Price = styled.div`
  width: 150px;
`;
export const Footer = styled.div`
  width: 1200px;
  padding: 10px;
  display: flex;
  justify-content: flex-end;
`;
export const NewBtn = styled.button`
  width: 100px;
  height: 50px;
  border: none;
  background-color: #ffd600;
  border: 1px solid #f2f2f2;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  :hover {
    background-color: black;
    color: white;
  }
`;
