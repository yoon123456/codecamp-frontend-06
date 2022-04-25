import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../commons/types/generated/type";
import MarketDetailUI from "./marketDetail.presenter";
import { FETCH_USED_ITEM } from "./marketDetail.query";
import { IMarketDetailProps } from "./marketDetail.types";

export default function MarketDetail(props: IMarketDetailProps) {
  const router = useRouter();
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, {
    variables: { useditemId: String(router.query.marketId) },
  });

  const onClickMoveToMarketList = () => {
    router.push("/market");
  };

  // const onClckMoveToMarketEdit = () => {
  //   router.push("/market/new");
  // };
  const priceComma = Number(data?.fetchUseditem.price)?.toLocaleString("ko-KR");
  const onClickMoveToMarketEdit = () => {
    router.push(`/market/${router.query.marketId}/edit`);
  };

  return (
    <MarketDetailUI
      data={data}
      priceComma={priceComma}
      onClickMoveToMarketList={onClickMoveToMarketList}
      onClickMoveToMarketEdit={onClickMoveToMarketEdit}
      isEdit={props.isEdit}
    />
  );
}
