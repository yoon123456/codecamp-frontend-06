import * as S from "./marketCommentWriter.styles";
import { IMarketCommentWriterUIProps } from "./marketCommentWriter.types";

export default function MarketCommentWriterUI(
  props: IMarketCommentWriterUIProps
) {
  return (
    <form
      onSubmit={
        props.isEditProps === true
          ? props.handleSubmit(props.onClickCommentUpdate)
          : props.handleSubmit(props.onCilckComment)
      }
    >
      <S.Wrapper>
        <S.Title>
          <img src="/img/댓글아이콘.png" />
          <div>{props.isEditProps ? "수정하기" : "문의하기"}</div>
        </S.Title>
        <S.CommentInputWrapper>
          <S.CommentInputBody
            type="textarea"
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            {...props.register("contents")}
            maxLength={100}
            value={props.getValues("contents") || ""}
          ></S.CommentInputBody>
          <S.CommentInputFooter>
            <S.CommentInputNumber>
              {props.contentslength}/100
            </S.CommentInputNumber>
            <S.CommentButton>
              {props.isEditProps ? "수정하기" : "문의하기"}
            </S.CommentButton>
          </S.CommentInputFooter>
        </S.CommentInputWrapper>
      </S.Wrapper>
    </form>
  );
}
