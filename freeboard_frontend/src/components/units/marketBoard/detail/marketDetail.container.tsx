import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../commons/types/generated/type";
import MarketDetailUI from "./marketDetail.presenter";
import {
  DELETE_USED_ITEM,
  FETCH_USED_ITEM,
  TOGGLE_USED_ITEM_PICK,
} from "./marketDetail.query";
import { IMarketDetailProps } from "./marketDetail.types";

export default function MarketDetail(props: IMarketDetailProps) {
  const router = useRouter();

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, {
    variables: { useditemId: String(router.query.marketId) },
  });
  const priceComma = Number(data?.fetchUseditem.price)?.toLocaleString("ko-KR");

  const [deleteUseditem] = useMutation(DELETE_USED_ITEM);

  const [toggleUseditemPick] = useMutation(TOGGLE_USED_ITEM_PICK);

  const onClickMoveToMarketList = () => {
    router.push("/market");
  };

  const onClickMoveToMarketEdit = () => {
    router.push(`/market/${router.query.marketId}/edit`);
  };

  const onClickMoveToPayment = () => {
    router.push("/payment");
  };

  const onClickDelete = (e: MouseEvent<HTMLButtonElement>) => {
    deleteUseditem({
      variables: { useditemId: String((e.target as HTMLButtonElement).id) },
    });
    Modal.success({
      content: "게시글 삭제에 성공했습니다",
    });
    router.push(`/market/`);
  };

  const onClickToggleUsedItemPick = () => {
    toggleUseditemPick({
      variables: { useditemId: String(router.query.marketId) },
      refetchQueries: [
        {
          query: FETCH_USED_ITEM,
          variables: { useditemId: String(router.query.marketId) },
        },
      ],
    });
  };
  return (
    <MarketDetailUI
      data={data}
      priceComma={priceComma}
      onClickMoveToMarketList={onClickMoveToMarketList}
      onClickMoveToMarketEdit={onClickMoveToMarketEdit}
      onClickMoveToPayment={onClickMoveToPayment}
      onClickDelete={onClickDelete}
      onClickToggleUsedItemPick={onClickToggleUsedItemPick}
      isEdit={props.isEdit}
    />
  );
}
