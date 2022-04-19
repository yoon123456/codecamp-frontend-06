import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import {
  IBoard,
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/type";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;

const MyRow = styled.div`
  display: flex;
`;

const MyColumn = styled.div`
  width: 25%;
`;

export default function BasketPage() {
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  const onClickBasket = (el: IBoard) => () => {
    console.log(el);

    // 1. 기존 장바구니 가져오기
    // basket이 비어있다면 빈배열이라도 보여줘
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");

    // 2. 이미 담겼는지 확인하기
    // basket안에 담긴 데이터와 클릭한 id가 같은 경우 담지 않으려고 만드는 로직
    const temp = baskets.filter((basketEl: IBoard) => basketEl._id === el._id);
    if (temp.length === 1) {
      alert("이미 담으신 물품입니다");
      // 조건에 부합하게되어 return을 만나게 되면 아래로 안내려가고 이자리에서 함수가 종료된다
      return "철수";
    }

    // // 삭제하기
    // const newBasket = baskets.filter((basketEl: IBoard) => basketEl._id !== el._id);
    // newBasket을 setItem에 담아준다 삭제가된 형태를 만들수가 있다

    // 3. 장바구니에 담기
    const { __typename, ...newEl } = el;
    baskets.push(newEl);
    localStorage.setItem("baskets", JSON.stringify(baskets));
  };

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <MyRow key={el._id}>
          <MyColumn>{el.writer}</MyColumn>
          <MyColumn>{el.title}</MyColumn>
          <button onClick={onClickBasket(el)}>장바구니담기</button>
        </MyRow>
      ))}
    </div>
  );
}
