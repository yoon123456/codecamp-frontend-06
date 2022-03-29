import * as S from "./BoardComment.styles";
import { getDate } from "../../../commons/libraries/utils";
import { IBoardCommentListUIProps } from "./BoardComment.types";
import { Modal } from "antd";

export default function CommentListPageUI(props: IBoardCommentListUIProps) {
  return (
    <S.CommentWrapper>
      {props.data?.fetchBoardComments.map((el: any) => (
        <S.CommentFetchWrapper key={el._id}>
          <S.CommentFetchPhoto>
            <img src="/img/ic_profile-56px.png" />
          </S.CommentFetchPhoto>
          <S.CommentFetchHeader>
            <S.CommentFetchProfile>
              <S.CommentFetchWriter>{el.writer}</S.CommentFetchWriter>
              <S.CommentFetchRating value={el?.rating} disabled />
            </S.CommentFetchProfile>
            <S.CommentFetchBody>{el.contents}</S.CommentFetchBody>
            <S.CommentFetchFooter>{getDate(el.createdAt)}</S.CommentFetchFooter>
          </S.CommentFetchHeader>
          <S.CommentEdit>
            <img src="/img/수정버튼.png" />
          </S.CommentEdit>
          <S.CommentDelete onClick={props.showModal}>
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
                id={el._id}
                onChange={props.onChangeCommentPassword}
              />
            </Modal>
          )}
        </S.CommentFetchWrapper>
      ))}
    </S.CommentWrapper>
  );
}
