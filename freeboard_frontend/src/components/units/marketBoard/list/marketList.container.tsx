// 중고마켓 리스트가 올라오는 페이지

import _ from "lodash";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useState } from "react";
import MarketListPageUI from "./marketList.presenter";
import { IPropsMarketList } from "./marketList.type";

export default function MarketListPage(props: IPropsMarketList) {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");

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

  const onClickMoveToMarketBoarDetail = (e: MouseEvent<HTMLDivElement>) => {
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
