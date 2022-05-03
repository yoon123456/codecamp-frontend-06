import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { MouseEvent, useState } from "react";
import {
  IMutation,
  IMutationDeleteUseditemQuestionArgs,
  IQuery,
  IQueryFetchUseditemQuestionsArgs,
} from "../../../../commons/types/generated/type";
import MarketCommentListUI from "./marketCommentList.presenter";
import {
  DELETE_USED_ITEM_QUESTION,
  FETCH_USED_ITEM_QUESTIONS,
} from "./marketCommentList.query";
import InfiniteScroll from "react-infinite-scroller";
import { InfiniteScrollWrapper } from "./marketCommentList.styles";

export default function MarketCommentList() {
  const router = useRouter();

  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditemQuestions">,
    IQueryFetchUseditemQuestionsArgs
  >(FETCH_USED_ITEM_QUESTIONS, {
    variables: { useditemId: String(router.query.marketId) },
  });

  const [deleteUseditemQuestions] = useMutation<
    Pick<IMutation, "deleteUseditemQuestion">,
    IMutationDeleteUseditemQuestionArgs
  >(DELETE_USED_ITEM_QUESTION);

  const onloadMore = () => {
    if (!data) return;

    fetchMore({
      variables: {
        page: Math.ceil(data.fetchUseditemQuestions.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchUseditemQuestions)
          return { fetchUseditemQuestions: [...prev.fetchUseditemQuestions] };
        return {
          fetchUseditemQuestions: [
            ...prev.fetchUseditemQuestions,
            ...fetchMoreResult.fetchUseditemQuestions,
          ],
        };
      },
    });
  };

  const onClickDelete = (e: MouseEvent<HTMLDivElement>) => {
    try {
      deleteUseditemQuestions({
        variables: {
          useditemQuestionId: (e.currentTarget as HTMLDivElement).id,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: {
              useditemId: String(router.query.marketId),
            },
          },
        ],
      });
      Modal.success({
        content: "댓글 삭제에 성공하였습니다",
      });
    } catch (error) {
      Modal.error({
        content: "댓글 삭제에 실패하였습니다",
      });
    }
  };

  return (
    <InfiniteScrollWrapper style={{ height: "500px", overflow: "auto" }}>
      <InfiniteScroll
        pageStart={0}
        loadMore={onloadMore}
        hasMore={true}
        useWindow={false}
      >
        {data?.fetchUseditemQuestions.map((el) => (
          <MarketCommentListUI
            key={el._id}
            data={data}
            el={el}
            onClickDelete={onClickDelete}
          />
        )) || <div></div>}
      </InfiniteScroll>
    </InfiniteScrollWrapper>
  );
}
