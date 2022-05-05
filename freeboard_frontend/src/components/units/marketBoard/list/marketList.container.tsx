// 중고마켓 리스트가 올라오는 페이지

import _ from "lodash";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useState } from "react";
import { IUseditem } from "../../../../commons/types/generated/type";
import MarketListPageUI from "./marketList.presenter";
import { IPropsMarketList } from "./marketList.type";

export default function MarketListPage(props: IPropsMarketList) {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");
  const [today, setToday] = useState([]);

  const getDebounce = _.debounce((data) => {
    props.refetch({ search: data, page: 1 });
    setKeyword(data);
  }, 200);

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    getDebounce(e.target.value);
  };

  const onClickMoveToMarketBoardNew = () => {
    router.push("/market/new");
  };

  const onClickMoveToMarketBoarDetail =
    (el: any) => (e: MouseEvent<HTMLDivElement>) => {
      const newdate = new Date();
      const yyyy = newdate.getFullYear();
      const mm = String(newdate.getMonth() + 1).padStart(2, "0");
      const dd = String(newdate.getDate()).padStart(2, "0");
      const getDate = `${yyyy}-${mm}-${dd}`;

      const baskets = JSON.parse(localStorage.getItem(getDate) || "[]");

      const temp = baskets.filter(
        (basketsEl: IUseditem) => basketsEl._id === el._id
      );

      const { __typename, ...newEl } = el;
      baskets.push(newEl);
      localStorage.setItem(getDate, JSON.stringify(baskets));

      const todayBoard = JSON.parse(localStorage.getItem(getDate) || "[]");
      setToday(todayBoard);
      console.log(today, "todayayayay");
      router.push(`market/${e.currentTarget.id}`);
    };
  const priceComma = Number(props.data?.fetchUseditem?.price)?.toLocaleString(
    "ko-KR"
  );

  return (
    <MarketListPageUI
      data={props.data}
      priceComma={priceComma}
      onChangeSearch={onChangeSearch}
      onClickMoveToMarketBoardNew={onClickMoveToMarketBoardNew}
      onClickMoveToMarketBoarDetail={onClickMoveToMarketBoarDetail}
      keyword={keyword}
      onLoadMore={props.onLoadMore}
    />
  );
}
