import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { IBoard } from "../../../src/commons/types/generated/type";
import { MouseEvent, useState } from "react";
import { v4 as uuid } from "uuid";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      createdAt
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 1200px;
  height: 1200px;
`;
const MyRow = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
`;

const MyColumn = styled.div`
  width: 600px;
`;
const Row = styled.div`
  cursor: pointer;
  border: 1px solid blue;
  width: 300px;
  display: flex;
  flex-direction: row;
`;

const Column = styled.div`
  border: 1px solid blue;
  margin-right: 10px;
`;

export default function TodayBoardList() {
  const { data } = useQuery(FETCH_BOARDS);
  const [today, setToday] = useState([]);

  const onClickBasket = (el: IBoard) => () => {
    const newdate = new Date();
    const yyyy = newdate.getFullYear();
    const mm = String(newdate.getMonth() + 1).padStart(2, "0");
    const dd = String(newdate.getDate()).padStart(2, "0");
    const getDate = `${yyyy}-${mm}-${dd}`;

    console.log(getDate);
    const baskets = JSON.parse(localStorage.getItem(getDate) || "[]");

    const temp = baskets.filter(
      (basketsEl: IBoard) => basketsEl._id === el._id
    );
    if (temp.length === 1) {
      alert("이미 담긴 게시글입니다");
      return;
    }
    const { __typename, ...newEl } = el;
    baskets.push(newEl);
    localStorage.setItem(getDate, JSON.stringify(baskets));

    const todayBoard = JSON.parse(localStorage.getItem(getDate) || "[]");
    setToday(todayBoard);
    console.log(todayBoard);
  };

  return (
    <Wrapper>
      <div>
        {data?.fetchBoards.map((el: IBoard) => (
          <MyRow key={el._id} onClick={onClickBasket(el)}>
            <MyColumn>{el.title}</MyColumn>
            <MyColumn>{el.writer}</MyColumn>
          </MyRow>
        ))}
      </div>

      <div>
        {today.map((el: IBoard) => (
          <Row key={el._id}>
            <Column>{el.writer}</Column>
            <Column>{el.title}</Column>
          </Row>
        ))}
      </div>
    </Wrapper>
  );
}
