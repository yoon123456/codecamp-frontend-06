import styled from "@emotion/styled";
import { IProps } from "./BoardWrite.types";
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 1200px;
  padding: 20px;
  margin: 0 auto;
`;
export const Search = styled.input`
  width: 800px;
  height: 50px;
  margin-right: 10px;
  border: none;
  background-color: #f2f2f2;
  border-radius: 5px;
  font-size: 20px;
`;

export const Word = styled.span`
  color: ${(props: IProps) => (props.isMatched ? "red" : "black")};
`;
export const SearchDate = styled.input`
  width: 150px;
  height: 50px;
  margin-right: 10px;
  border-radius: 5px;
  font-size: 16px;
`;

export const Row = styled.div`
  display: flex;
  padding: 10px;
`;

export const ListId = styled.div`
  width: 25%;
  height: 40px;
  border-bottom: 1px solid darkgray;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
`;
export const ListTitle = styled.div`
  width: 25%;
  height: 40px;
  border-bottom: 1px solid darkgray;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  cursor: pointer;
  overflow: hidden;
`;
export const ListWriter = styled.div`
  width: 25%;
  height: 40px;
  border-bottom: 1px solid darkgray;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 14px;
`;
export const ListDate = styled.div`
  width: 25%;
  height: 40px;
  border-bottom: 1px solid darkgray;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
`;
export const ButtonBlack = styled.button`
  width: 150px;
  height: 50px;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
  border-radius: 5px;
  border: none;
  :hover {
    background-color: #ffd600;
    color: black;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 20px;
`;

export const Button = styled.button`
  width: 150px;
  height: 50px;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffd600;
  border: 1px solid lightgray;
  border-radius: 5px;
  cursor: pointer;
  :hover {
    background-color: black;
    color: white;
  }
`;
export const ListHeader = styled.div`
  display: flex;
  justify-content: space-around;
  border-top: 3px solid black;
  border-bottom: 3px solid black;
  padding: 10px 10px;
`;
export const List = styled.li`
  font-size: 18px;
  list-style: none;
`;
