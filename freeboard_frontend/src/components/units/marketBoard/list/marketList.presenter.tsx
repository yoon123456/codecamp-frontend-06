import * as S from "./marketList.styles";
import { SmileOutlined, HeartOutlined } from "@ant-design/icons";
export default function MarketListPageUI() {
  return (
    <S.Wrapper>
      <S.Header>
        <S.SaleProd>판매중상품</S.SaleProd>
        <S.SoldProd>판매된상품</S.SoldProd>
        <S.Search type="text" placeholder="제품을 검색해주세요" />
        <S.SearchDate type="date" />
        <S.SearchBtn>검색</S.SearchBtn>
      </S.Header>
      <S.Body>
        <S.BodyPhoto>
          <S.ProdPhoto>img</S.ProdPhoto>
        </S.BodyPhoto>
        <S.BodyProduct>
          <S.ProdTitle>제품명</S.ProdTitle>
          <S.ProdDetail>제품디테일</S.ProdDetail>
          <S.prodTag>제품태그</S.prodTag>
          <S.SellerWrapper>
            <S.SellerInfo>
              {/* <S.SellerIcon></S.SellerIcon> */}
              <SmileOutlined />
              <S.SellerName>판매자명</S.SellerName>
            </S.SellerInfo>
            <S.LikeProdWrapper>
              {/* <S.LikeProdIcon>좋아요</S.LikeProdIcon> */}
              <HeartOutlined style={{ color: "red" }} />
              <S.LikeProdCount>좋아요수</S.LikeProdCount>
            </S.LikeProdWrapper>
          </S.SellerWrapper>
        </S.BodyProduct>
        <S.BodyPrice>
          <S.Price>가격</S.Price>
        </S.BodyPrice>
      </S.Body>
    </S.Wrapper>
  );
}
