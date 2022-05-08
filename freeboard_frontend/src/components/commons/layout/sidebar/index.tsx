import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { isCheckState, TodayState } from "../../../../commons/store/login";

const Wrapper = styled.div`
  width: 250px;
  height: 600px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  margin-top: 50px;
`;
const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20px;
  font-size: 18px;
  padding: 20px;
`;
const Today = styled.div`
  width: 90%;
  height: 250px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  border: 1px solid black;
  margin-bottom: 40px;
`;
const TodayImage = styled.img`
  width: 200px;
  height: 180px;
`;
const TodayTitle = styled.div`
  font-size: 20px;
`;

const ScrollDiv = styled.div`
  width: 100%;
  height: 650px;
  overflow: scroll;
`;
export default function LayoutSidebar() {
  const [today] = useRecoilState<any>(TodayState);
  const [isClicked] = useRecoilState(isCheckState);

  console.log(today, "dfd");

  const imageError = (e: any) => {
    e.target.src = "img/beachimg.jpeg";
  };

  useEffect(() => {
    // const newdate = new Date();
    // const yyyy = newdate.getFullYear();
    // const mm = String(newdate.getMonth() + 1).padStart(2, "0");
    // const dd = String(newdate.getDate()).padStart(2, "0");
    // const getDate = `${yyyy}-${mm}-${dd}`;
    // const todayItem = JSON.parse(localStorage.getItem(getDate) || "[]");
    // console.log(todayItem);
    // setToday(todayItem);
  }, [isClicked]);

  return (
    <Wrapper>
      <Title>오늘 본 상품</Title>
      <ScrollDiv>
        {today.map((el: any, i: number) => (
          <Today key={i}>
            <TodayTitle>{el.name}</TodayTitle>
            <TodayImage
              src={`https://storage.googleapis.com/${el.images[0]}`}
              onError={imageError}
            />
          </Today>
        ))}
      </ScrollDiv>
    </Wrapper>
  );
}
