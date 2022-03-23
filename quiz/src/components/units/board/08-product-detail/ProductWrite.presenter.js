//등록된 상품을 보여주는 페이지중 JSX부분

import { getDate } from "../../../../commons/libraries/utilis"
import * as S from "./ProductWrite.styles";

export default function ProductDetailUI(props) {
  return (
    <S.Wrapper>
        <S.Header>  
            <S.Seller>{props.data?.fetchProduct.seller}판매자님</S.Seller>
            <S.CreatedAt>{getDate(props.data?.fetchProduct.createdAt)}</S.CreatedAt>   
        </S.Header>
        <S.Body>
          <S.Name>상품이름:{props.data?.fetchProduct.name} </S.Name>
          <S.Detail>상품설명:{props.data?.fetchProduct.detail} </S.Detail>
          <S.Price>가격은!!{props.data?. fetchProduct.price}</S.Price>
        </S.Body>
      <S.Footer>
        <S.Button onClick={props.onClickMoveToProductNew}>목록으로</S.Button>
        <S.Button id={props.data?.fetchProduct.id} onClick={props.onClickMoveToProductDetail}>수정하기</S.Button>
        <S.Button id={props.data?.fetchProduct.id} onClick={props.onClickDelete}>삭제하기</S.Button>
      </S.Footer>
    </S.Wrapper>
  );
}
