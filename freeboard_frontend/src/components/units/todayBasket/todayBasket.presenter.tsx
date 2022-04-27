import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { MouseEvent, useState } from "react";
import { v4 as uuid } from "uuid";
import { IUseditem } from "../../../commons/types/generated/type";
import { FETCH_USED_ITEMS } from "../marketBoard/list/marketList.query";

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

const ProdPhoto = styled.img`
  width: 50px;
  height: 50px;
`;

export default function TodayMarketList() {
  const { data } = useQuery(FETCH_USED_ITEMS);
  const [today, setToday] = useState([]);

  const onClickBasket = (el: IUseditem) => () => {
    const newdate = new Date();
    const yyyy = newdate.getFullYear();
    const mm = String(newdate.getMonth() + 1).padStart(2, "0");
    const dd = String(newdate.getDate()).padStart(2, "0");
    const getDate = `${yyyy}-${mm}-${dd}`;

    console.log(getDate);
    const baskets = JSON.parse(localStorage.getItem(getDate) || "[]");

    const temp = baskets.filter(
      (basketsEl: IUseditem) => basketsEl._id === el._id
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
        {data?.fetchUseditems.map((el: IUseditem) => (
          <MyRow key={el._id} onClick={onClickBasket(el)}>
            <MyColumn>{el.seller?.name}</MyColumn>
            <MyColumn>{el.name}</MyColumn>
          </MyRow>
        ))}
      </div>

      <div>
        {today.map((el: IUseditem) => (
          <Row key={el._id}>
            <ProdPhoto
              src={`https://storage.googleapis.com/${el.images?.[0]}`}
              // onError={imageError}
            />
            <Column>{el.seller?.name}</Column>
            <Column>{el.seller?.name}</Column>
            <Column>{el.name}</Column>
          </Row>
        ))}
      </div>
    </Wrapper>
  );
}
