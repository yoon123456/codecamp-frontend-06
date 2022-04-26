import * as S from "./marketCommentList.styles";
import { Modal } from "antd";

export default function MarketCommentListUI() {
  return (
    <S.Wrapper>
      <S.CommentWrapper>
        <S.CommentPhoto>
          <img src="/img/ic_profile-56px.png" />
        </S.CommentPhoto>
        <S.CommentHeader>
          <S.CommentProfile>
            <S.CommentWriter></S.CommentWriter>
          </S.CommentProfile>
          <S.CommentBody>{/* {props.el.contents} */}</S.CommentBody>
          <S.CommentFooter>
            {/* {getDate(props.el.createdAt)} */}
          </S.CommentFooter>
        </S.CommentHeader>
        <S.CommentEdit>
          {/* <img src="/img/수정버튼.png" onClick={onClickMoveCommentUpdatePage} /> */}
        </S.CommentEdit>
        <S.CommentDelete
        // onClick={props.showModal} id={props.el._id}
        >
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
  );
}
