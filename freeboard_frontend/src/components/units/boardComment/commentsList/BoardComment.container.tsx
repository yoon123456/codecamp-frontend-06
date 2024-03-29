import {
  FETCH_BOARD_COMMENTS,
  DELETE_BOARD_COMMENT,
} from "./BoardComment.queries";
import {
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../../commons/types/generated/type";
import CommentListPageUI from "./BoardComment.presenter";
import { useState, MouseEvent } from "react";
import { useRouter } from "next/router";
import { useQuery, useMutation } from "@apollo/client";
import { Modal } from "antd";
import InfiniteScroll from "react-infinite-scroller";
import { InfiniteScrollWrapper } from "./BoardComment.styles";
import { v4 as uuid } from "uuid";

export default function BoardCommentList() {
  const router = useRouter();
  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);
  const [isOpen, setIsOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [id, setId] = useState("");

  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: { boardId: String(router.query.boardId) },
  });

  const onLoadMore = () => {
    if (!data) return;

    fetchMore({
      variables: {
        page: Math.ceil(data.fetchBoardComments.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchBoardComments)
          return { fetchBoardComments: [...prev.fetchBoardComments] };
        return {
          fetchBoardComments: [
            ...prev.fetchBoardComments,
            ...fetchMoreResult.fetchBoardComments,
          ],
        };
      },
    });
  };

  const showModal = (event: MouseEvent<HTMLButtonElement>) => {
    setIsOpen(true);
    setId(event.currentTarget.id);
  };

  const handleOk = () => {
    setIsOpen(false);
    onClickCommentDelete();
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  const onChangeCommentPassword = (event: any) => {
    setPassword(event.target.value);
  };

  const onClickCommentDelete = () => {
    try {
      deleteBoardComment({
        variables: {
          password: password,
          boardCommentId: id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: {
              boardId: String(router.query.boardId),
            },
          },
        ],
      });
      Modal.success({
        content: "댓글을 삭제했습니다",
      });
    } catch (error) {
      Modal.error({
        title: "This is an error message",
        content: "댓글 삭제에 실패했습니다",
      });
    }
  };

  return (
    <>
      <InfiniteScrollWrapper style={{ height: "500px", overflow: "auto" }}>
        <InfiniteScroll
          pageStart={0}
          loadMore={onLoadMore}
          hasMore={true}
          useWindow={false}
        >
          {data?.fetchBoardComments.map((el) => (
            <CommentListPageUI
              data={data}
              onClickCommentDelete={onClickCommentDelete}
              showModal={showModal}
              handleOk={handleOk}
              handleCancel={handleCancel}
              isOpen={isOpen}
              onChangeCommentPassword={onChangeCommentPassword}
              key={uuid()}
              el={el}
              password={password}
            />
          ))}
        </InfiniteScroll>
      </InfiniteScrollWrapper>
    </>
  );
}
