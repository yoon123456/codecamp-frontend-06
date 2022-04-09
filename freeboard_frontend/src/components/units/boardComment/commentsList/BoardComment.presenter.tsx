import * as S from "./BoardComment.styles";
import * as St from "../commentsWrite/BoardComment.styles";
import { getDate } from "../../../commons/libraries/utils";
import { IBoardCommentListUIProps } from "./BoardComment.types";
import { useState, ChangeEvent, MouseEvent } from "react";
import { useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationUpdateBoardCommentArgs,
} from "../../../../commons/types/generated/type";
import { UPDATE_BOARD_COMMENT } from "./BoardComment.queries";
import { Modal } from "antd";

export default function CommentListPageUI(props: IBoardCommentListUIProps) {
  const [isEdit, setIsEdit] = useState(false);
  const [password, setPassword] = useState("");
  const [rating, setRating] = useState(3);
  const [changeRating, setChangeRating] = useState(false);
  const [commentContents, setcommentContents] = useState("");

  const onClickMoveCommentUpdatePage = () => {
    setIsEdit(true);
  };

  const onChangeCommentPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onChangeCommentContents = (event: ChangeEvent<HTMLInputElement>) => {
    setcommentContents(event.target.value);
  };

  const onChangeRating = (value: number) => {
    setChangeRating(true);
    setRating(value);
  };

  const [updateBoardComment] = useMutation<
    Pick<IMutation, "updateBoardComment">,
    IMutationUpdateBoardCommentArgs
  >(UPDATE_BOARD_COMMENT);

  interface IMyVariables {
    updateBoardCommentInput: any;
    password: string;
    boardCommentId: string;
  }

  const onClickCommentUpdate = async (event: MouseEvent<HTMLButtonElement>) => {
    console.log(event.currentTarget.id);
    const myVariables: IMyVariables = {
      updateBoardCommentInput: {},
      password: password,
      boardCommentId: String(event.currentTarget.id),
    };

    if (rating) {
      myVariables.updateBoardCommentInput.rating = rating;
    }
    if (commentContents) {
      myVariables.updateBoardCommentInput.contents = commentContents;
    }
    try {
      const updateComments = await updateBoardComment({
        variables: myVariables,
      });
      console.log(updateComments);
      setIsEdit(false);
    } catch (error) {
      if (error instanceof Error)
        Modal.error({
          title: "This is an error message",
          content: "댓글 수정에 실패했습니다",
        });
    }
  };

  return (
    <>
      {isEdit === false && (
        <S.CommentWrapper>
          <S.CommentFetchWrapper>
            <S.CommentFetchPhoto>
              <img src="/img/ic_profile-56px.png" />
            </S.CommentFetchPhoto>
            <S.CommentFetchHeader>
              <S.CommentFetchProfile>
                <S.CommentFetchWriter>{props.el.writer}</S.CommentFetchWriter>
                <S.CommentFetchRating value={props.el.rating} disabled />
              </S.CommentFetchProfile>
              <S.CommentFetchBody>{props.el.contents}</S.CommentFetchBody>
              <S.CommentFetchFooter>
                {getDate(props.el.createdAt)}
              </S.CommentFetchFooter>
            </S.CommentFetchHeader>
            <S.CommentEdit>
              <img
                src="/img/수정버튼.png"
                onClick={onClickMoveCommentUpdatePage}
              />
            </S.CommentEdit>
            <S.CommentDelete onClick={props.showModal} id={props.el._id}>
              <img src="/img/삭제버튼.png" />
            </S.CommentDelete>
            {props.isOpen && (
              <Modal
                title="비밀번호를 입력해주세요"
                visible={props.isOpen}
                onOk={props.handleOk}
                onCancel={props.handleCancel}
              >
                <input
                  type="password"
                  id={props.el._id}
                  onChange={props.onChangeCommentPassword}
                />
              </Modal>
            )}
          </S.CommentFetchWrapper>
        </S.CommentWrapper>
      )}
      {isEdit === true && (
        <St.CommentWrapper>
          <St.CommentTitle>
            <img src="/img/댓글아이콘.png" />
            <div>댓글수정</div>
          </St.CommentTitle>
          <St.CommentWriterWrapper>
            <St.CommentWriter
              type="text"
              value={props.el.writer}
              disabled
            ></St.CommentWriter>
            <St.CommentPassword
              type="password"
              placeholder="비밀번호"
              onChange={onChangeCommentPassword}
            ></St.CommentPassword>
            <St.CommentRating
              onChange={onChangeRating}
              value={changeRating === true ? rating : props.el.rating}
            ></St.CommentRating>
          </St.CommentWriterWrapper>
          <St.CommentInputWrapper>
            <St.CommentInputBody
              type="textarea"
              defaultValue={props.el.contents}
              onChange={onChangeCommentContents}
              maxLength={100}
            ></St.CommentInputBody>
            <St.CommentInputFooter>
              <St.CommentInputNumber>
                {" "}
                {commentContents.length}/100
              </St.CommentInputNumber>
              <St.CommentButton
                onClick={onClickCommentUpdate}
                id={props.el._id}
              >
                수정하기
              </St.CommentButton>
            </St.CommentInputFooter>
          </St.CommentInputWrapper>
        </St.CommentWrapper>
      )}
    </>
  );
}
/*
import InfiniteScroll from "react-infinite-scroller";
<div style={{ height: "500px", overflow: "auto" }}>
        <InfiniteScroll
          pageStart={0}
          loadMore={props.onLoadMore}
          hasMore={true}
          useWindow={false}
        ></InfiniteScroll>
         </InfiniteScroll>
         */
