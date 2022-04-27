import { useQuery } from "@apollo/client";
import { FETCH_USER_LOGGEDIN } from "../../src/components/units/login/login.quries";
import BasketPage from "../../src/components/units/todayBasket/todayBasket.container";
import TodayMarketList from "../../src/components/units/todayBasket/todayBasket.presenter";

export default function Mypage() {
  const { data } = useQuery(FETCH_USER_LOGGEDIN);

  return (
    <div>
      <div>{data?.fetchUserLoggedIn.name}</div>
      <div>{data?.fetchUserLoggedIn.email}</div>
      <div>{data?.fetchUserLoggedIn.userPoint.amount}</div>
      <BasketPage />
      <TodayMarketList />
    </div>
  );
}
