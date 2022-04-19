import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { IBoard } from "../../src/commons/types/generated/type";

// 장바구니 리스트는  gql을 이용하지 않고 로컬스토리지에서 불러온다

const MyRow = styled.div`
  display: flex;
`;

const MyColumn = styled.div`
  width: 25%;
`;

export default function BasketPage() {
  const [basketItems, setBasketItems] = useState([]);

  // useEffect를 사용하지 않으면 localStorage를 찾지못하는 에러 발생 왜냐하면 prerendering이 일어나기 때문! 그때는 localStorage를 무시하고 전체적인 구조만 찾기때문이다
  useEffect(() => {
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
    setBasketItems(baskets);
  }, []);

  //   // useEffect 대신 사용할 수 있는 방법이지만 단점으로는 너무 많은 렌더링이 일어난다 그래서 useEffect를 추천한다!
  //   if (typeof window !== "undefined") {
  //     const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
  //     setBasketItems(baskets);
  //   }

  return (
    <div>
      {basketItems.map((el: IBoard) => (
        <MyRow key={el._id}>
          <MyColumn>{el.writer}</MyColumn>
          <MyColumn>{el.title}</MyColumn>
        </MyRow>
      ))}
    </div>
  );
}
