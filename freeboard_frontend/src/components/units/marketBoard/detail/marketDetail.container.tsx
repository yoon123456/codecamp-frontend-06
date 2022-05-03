import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import {
  IMutation,
  IMutationCreatePointTransactionOfBuyingAndSellingArgs,
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../commons/types/generated/type";
import { FETCH_USER_LOGGEDIN } from "../../login/login.quries";
import MarketDetailUI from "./marketDetail.presenter";
import {
  CREATE_POINT_TRANSACTION_OF_BUYUNG_AND_SELLING,
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

  const [createPointTransactionOfBuyingAndSelling] = useMutation(
    CREATE_POINT_TRANSACTION_OF_BUYUNG_AND_SELLING
  );

  const onClickMoveToMarketList = () => {
    router.push("/market");
  };

  const onClickMoveToMarketEdit = () => {
    router.push(`/market/${router.query.marketId}/edit`);
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

  const onClickBuyUseditem = (id: any) => async () => {
    try {
      const result = await createPointTransactionOfBuyingAndSelling({
        variables: {
          useritemId: String(id),
        },
        refetchQueries: [{ query: FETCH_USER_LOGGEDIN }],
      });
      Modal.success({
        content: "구매성공!",
      });
      router.push("/market");
    } catch (error) {
      Modal.error({ content: "구매실패!" });
    }
  };
  return (
    <MarketDetailUI
      data={data}
      priceComma={priceComma}
      onClickMoveToMarketList={onClickMoveToMarketList}
      onClickMoveToMarketEdit={onClickMoveToMarketEdit}
      onClickDelete={onClickDelete}
      onClickToggleUsedItemPick={onClickToggleUsedItemPick}
      onClickBuyUseditem={onClickBuyUseditem}
      isEdit={props.isEdit}
    />
  );
}
