import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import {
  IMutation,
  IMutationDeleteUseditemArgs,
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../commons/types/generated/type";
import MarketDetailUI from "./marketDetail.presenter";
import { FETCH_USED_ITEM } from "./marketDetail.query";

export default function MarketDetail() {
  const router = useRouter();
  console.log(router.query.market);
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, {
    variables: { useditemId: String(router.query.marketId) },
  });

  const onClickMoveToMarketList = () => {
    router.push("/market");
  };

  // const onClick = () => {
  //   router.push(`/market/${router.query.marketId}/edit`);
  // };

  return (
    <MarketDetailUI
      data={data}
      onClickMoveToMarketList={onClickMoveToMarketList}
      // onClickMoveToMarketEdit={onClickMoveToMarketEdit}
    />
  );
}
