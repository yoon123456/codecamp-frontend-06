import * as S from "./pagination.styles";
import { IPaginationUIProps } from "./pasination.types";
import { v4 as uuidv4 } from "uuid";

export default function PaginationUI(props: IPaginationUIProps) {
  return (
    <S.Wrapper>
      <S.PrevButton
        onClick={props.onClickPrevPage}
        isActive={props.startPage === 1 && true}
      >
        {"<"}
      </S.PrevButton>
      {new Array(10).fill(1).map((_, index) =>
        index + props.startPage <= props.lastPage ? (
          <S.PageNumber
            key={uuidv4()}
            onClick={props.onClickPage}
            id={String(index + props.startPage)}
            style={
              props.pickPage === props.startPage + index
                ? { color: "black" }
                : { color: "#ffd600" }
            }
          >
            {` `}
            {index + props.startPage}
          </S.PageNumber>
        ) : (
          <span></span>
        )
      )}
      <S.NextButton
        onClick={props.onClickNextpage}
        isActive={props.startPage + 10 > props.lastPage && true}
      >
        {">"}
      </S.NextButton>
    </S.Wrapper>
  );
}
