import * as S from "./marketList.styles";
import { IPropsMarketListUI } from "./marketList.type";
import { SmileOutlined, HeartOutlined } from "@ant-design/icons";
import { IUseditem } from "../../../../commons/types/generated/type";

export default function MarketListPageUI(props: IPropsMarketListUI) {
  return (
    <S.Wrapper>
      <S.Header>
        <S.SaleProd>판매중상품</S.SaleProd>
        <S.SoldProd>판매된상품</S.SoldProd>
        <S.Search
          type="text"
          placeholder="제품을 검색해주세요"
          onChange={props.onChangeSearch}
        />
        <S.SearchDate type="date" />
        <S.SearchBtn>검색</S.SearchBtn>
      </S.Header>
      <div>
        {props.data?.fetchUseditems?.map((el: IUseditem) => (
          <S.Body key={el._id}>
            <S.BodyPhoto>
              <S.ProdPhoto>img</S.ProdPhoto>
            </S.BodyPhoto>
            <S.BodyProduct
              id={el._id}
              onClick={props.onClickMoveToMarketBoarDetail}
            >
              <S.ProdTitle>{el.name}</S.ProdTitle>
              <S.ProdDetail>{el.remarks}</S.ProdDetail>
              <S.prodTag>제품태그</S.prodTag>
              <S.SellerWrapper>
                <S.SellerInfo>
                  {/* <S.SellerIcon></S.SellerIcon> */}
                  <SmileOutlined />
                  <S.SellerName></S.SellerName>
                </S.SellerInfo>
                <S.LikeProdWrapper>
                  {/* <S.LikeProdIcon>좋아요</S.LikeProdIcon> */}
                  <HeartOutlined />
                  <S.LikeProdCount>
                    {props.data?.fetchUseditms?.pickedCount}
                  </S.LikeProdCount>
                </S.LikeProdWrapper>
              </S.SellerWrapper>
            </S.BodyProduct>
            <S.BodyPrice>
              <S.Price>{el.price}₩</S.Price>
            </S.BodyPrice>
          </S.Body>
        ))}
      </div>
      <S.Footer>
        <S.NewBtn onClick={props.onClickMoveToMarketBoardNew}>
          상품등록
        </S.NewBtn>
      </S.Footer>
    </S.Wrapper>
  );
}
