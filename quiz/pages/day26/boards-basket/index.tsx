import styled from "@emotion/styled";
import { gql, useQuery } from "@apollo/client";
import {
  IBoard,
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/type";
import { useState, MouseEvent } from "react";

const MyRow = styled.div`
  display: flex;
`;

const MyColumn = styled.div`
  width: 25%;
`;

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
    }
  }
`;

export default function QuizBasketPage() {
  // const [isActive, setIsActive] = useState(false);
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  const onClickBasket = (el: IBoard) => (e: MouseEvent<HTMLButtonElement>) => {
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");

    const temp = baskets.filter(
      (basketsEl: IBoard) => basketsEl._id === el._id
    );
    if (temp.length === 1) {
      alert("이미 담아둔 게사글!");
      return;
    }
    const { __typename, ...newEl } = el;
    baskets.push(newEl);
    localStorage.setItem("baskets", JSON.stringify(baskets));

    console.log(el);
    console.log(el._id);
    console.log(baskets);
    console.log(newEl);
    console.log(e.currentTarget.id);

    // if (localStorage.getItem(el._id) === e.currentTarget.id) {
    //   setIsActive(true);
    // }
  };

  const onClickDelete = (el: IBoard) => () => {
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");

    const newBaskets = baskets.filter(
      (basketsEl: IBoard) => basketsEl._id !== el._id
    );

    const { __typename, ...newEl } = el;
    baskets.push(newEl);
    localStorage.setItem("baskets", JSON.stringify(newBaskets));
  };

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <MyRow key={el._id}>
          <MyColumn>{el.writer}</MyColumn>
          <MyColumn>{el.title}</MyColumn>
          <button onClick={onClickBasket(el)}>게시물담기</button>
          <button onClick={onClickDelete(el)}>담기취소</button>
        </MyRow>
      ))}
    </div>
  );
}
