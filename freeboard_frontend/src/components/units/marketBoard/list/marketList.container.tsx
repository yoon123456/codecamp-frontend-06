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

  // const onClickPage=(e:MouseEvent<HTMLDivElement>)=>{
  //   props.refetch({page:Number(e.currentTarget.id)})
  // }
  const onClickMoveToMarketBoardNew = () => {
    router.push("/market/new");
  };

  const onClickMoveToMarketBoarDetail = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target instanceof Element) {
      router.push(`/market/${e.currentTarget.id}`);
    }
  };
  return (
    <MarketListPageUI
      data={props.data}
      onChangeSearch={onChangeSearch}
      onClickMoveToMarketBoardNew={onClickMoveToMarketBoardNew}
      onClickMoveToMarketBoarDetail={onClickMoveToMarketBoarDetail}
      keyword={keyword}
    />
  );
}
