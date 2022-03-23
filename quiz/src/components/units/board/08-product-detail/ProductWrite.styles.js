//등록된 상품을 보여주는 페이지를 꾸며주는 부분

import styled from "@emotion/styled";

export const Wrapper = styled.div`
    box-sizing: border-box;
    width: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid gray;
    padding: 50px;
    margin: 50px auto;
`;

export const Header = styled.div`
  width: 500px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid gray;
  padding-bottom: 20px;
`;

export const Seller = styled.div`
    font-size: 24px;
`;

export const CreatedAt = styled.div`
    font-size: 12px;
`;

export const Body = styled.div`
  width: 400px;
  height: 500px;
  border-bottom: 1px solid gray;
  font-size: 24px;
`;

export const Name = styled.div`
  padding-top: 20px;
`;

export const Detail = styled.div`
  padding-top: 20px;
  height: 100px;
  padding-bottom:px;
`;
export const Price = styled.div`
  padding-top: 20px;
  padding-bottom: 50px;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 40px;
`;

export const Button = styled.button`
  width: 170px;
  height: 45px;
  background-color: white;
  border: 1px solid gray;
  margin: 0px 12px;
  cursor: pointer;
  :hover {
    background-color: gold;
    border-color: white;
  }
`;
