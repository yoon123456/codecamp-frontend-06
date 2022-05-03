import * as S from "./marketCommentList.styles";
import { IMarketCommentListUIProps } from "./marketCommentList.types";
import { getDate } from "../../../commons/libraries/utils";
import { useState } from "react";
import MarketCommentWriter from "../marketCommentWriter/marketCommentWriter.container";

export default function MarketCommentListUI(props: IMarketCommentListUIProps) {
  const [isEdit, setIsEdit] = useState(false);

  const onClickMoveCommentUpdatePage = () => {
    setIsEdit(true);
  };

  return (
    <>
      {isEdit === false && (
        <S.Wrapper>
          <S.CommentWrapper>
            <S.CommentPhoto>
              <img src="/img/ic_profile-56px.png" />
            </S.CommentPhoto>
            <S.CommentHeader>
              <S.CommentProfile>
                <S.CommentWriter>{props.el.user.name}</S.CommentWriter>
              </S.CommentProfile>
              <S.CommentBody>{props.el.contents}</S.CommentBody>
              <S.CommentFooter>{getDate(props.el.createdAt)}</S.CommentFooter>
            </S.CommentHeader>
            <S.CommentEdit>
              <img
                src="/img/수정버튼.png"
                onClick={onClickMoveCommentUpdatePage}
              />
            </S.CommentEdit>
            <S.CommentDelete id={props.el._id} onClick={props.onClickDelete}>
              <img src="/img/삭제버튼.png" />
            </S.CommentDelete>
            {/* {props.isOpen && (
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
        )} */}
          </S.CommentWrapper>
        </S.Wrapper>
      )}
      {isEdit === true && (
        <MarketCommentWriter
          isEditProps={isEdit}
          setIsEdit={setIsEdit}
          useditemQuestionId={props.el._id}
        />
      )}
    </>
  );
}
