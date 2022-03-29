import * as S from "./BoardComment.styles";
import { getDate } from "../../../commons/libraries/utils";
import { IBoardCommentListUIProps } from "./BoardComment.types";

export default function CommentListPageUI(props: IBoardCommentListUIProps) {
  //   const click = (event: MouseEvent<HTMLDivElement>) => {
  //     alert(`${event.currentTarget.id}님이 작성한 글입니다`);
  //   };

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
              <S.CommentFetchRating
                value={el?.rating}
                disabled
              ></S.CommentFetchRating>
            </S.CommentFetchProfile>
            <S.CommentFetchBody>{el.contents}</S.CommentFetchBody>
            <S.CommentFetchFooter>{getDate(el.createdAt)}</S.CommentFetchFooter>
          </S.CommentFetchHeader>
          <S.CommentEdit>
            <img src="/img/수정버튼.png" />
          </S.CommentEdit>
          <S.CommentDelete id={el._id} onClick={props.onClickDelete}>
            <img src="/img/삭제버튼.png" />
          </S.CommentDelete>
        </S.CommentFetchWrapper>
      ))}
    </S.CommentWrapper>
  );
}
