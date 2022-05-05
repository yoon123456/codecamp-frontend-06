import styled from "@emotion/styled";
import { useEffect, useState } from "react";

const Wrapper = styled.div`
  width: 300px;
  height: 100%;
  background-color: #a2cbe5;
`;
const Title = styled.div``;
const Today = styled.div``;
const TodayImage = styled.img``;
const TodayTitle = styled.div``;

export default function LayoutSidebar() {
  const [today, setToday] = useState([]);

  const newdate = new Date();
  const yyyy = newdate.getFullYear();
  const mm = String(newdate.getMonth() + 1).padStart(2, "0");
  const dd = String(newdate.getDate()).padStart(2, "0");
  const getDate = `${yyyy}-${mm}-${dd}`;

  useEffect(() => {
    const todayItem = JSON.parse(localStorage.getItem(getDate) || "[]");
    console.log(todayItem);
    // const { __typename, ...newEl } = todayItem;
    // todayItem.push(newEl);
    // // localStorage.setItem(getDate, JSON.stringify(todayItem));

    // const todayBoard = JSON.parse(localStorage.getItem(getDate) || "[]");
    setToday(today);
    console.log(today, "today");
  }, []);

  return (
    <Wrapper>
      <Title>최근 본 상품</Title>
      {today.map((el, i) => (
        <Today key={i}>
          <TodayImage>{el}</TodayImage>
          <TodayTitle></TodayTitle>
        </Today>
      ))}
      {/* <Today>
        <TodayImage></TodayImage>
        <TodayTitle></TodayTitle>
      </Today>
      <Today>
        <TodayImage></TodayImage>
        <TodayTitle></TodayTitle>
      </Today> */}
    </Wrapper>
  );
}
