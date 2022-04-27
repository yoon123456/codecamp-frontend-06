import * as S from "./marketList.styles";
import { IPropsMarketListUI } from "./marketList.type";
import { SmileOutlined, HeartOutlined } from "@ant-design/icons";
import { IUseditem } from "../../../../commons/types/generated/type";
import InfiniteScroll from "react-infinite-scroller";
import { v4 as uuidv4 } from "uuid";

const imageError = (e: any) => {
  e.target.src = "img/beachimg.jpeg";
};

export default function MarketListPageUI(props: IPropsMarketListUI) {
  console.log(props.data?.fetchUseditems.images);
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
      <div style={{ height: "900px", overflow: "auto" }}>
        <InfiniteScroll
          pageStart={0}
          loadMore={props.onLoadMore}
          hasMore={true}
          useWindow={false}
        >
          {props.data?.fetchUseditems?.map((el: IUseditem) => (
            <S.Body key={el._id}>
              <S.BodyPhoto>
                <S.ProdPhoto
                  src={`https://storage.googleapis.com/${el.images?.[0]}`}
                  onError={imageError}
                />
              </S.BodyPhoto>
              <S.BodyProduct
                id={el._id}
                onClick={props.onClickMoveToMarketBoarDetail}
              >
                <S.ProdTitle>
                  {el.name
                    .replaceAll(props.keyword, `#$${props.keyword}#$`)
                    .split("#$")
                    .map((el) => (
                      <S.Word key={uuidv4()} isMatched={props.keyword === el}>
                        {el}
                      </S.Word>
                    ))}
                </S.ProdTitle>
                <S.ProdDetail>{el.remarks}</S.ProdDetail>
                {/* <S.prodTag>{el.tags?.map((el) => el)}</S.prodTag> */}
                {el.tags?.map((el, i) => (
                  <S.prodTag key={i}>{el}</S.prodTag>
                ))}
                <S.SellerWrapper>
                  <S.SellerInfo>
                    {/* <S.SellerIcon></S.SellerIcon> */}
                    <SmileOutlined />
                    <S.SellerName>{el.seller?.name}</S.SellerName>
                  </S.SellerInfo>
                  <S.LikeProdWrapper>
                    {/* <S.LikeProdIcon>좋아요</S.LikeProdIcon> */}
                    <HeartOutlined style={{ color: "red" }} />
                    <S.LikeProdCount>{el.pickedCount}</S.LikeProdCount>
                  </S.LikeProdWrapper>
                </S.SellerWrapper>
              </S.BodyProduct>
              <S.BodyPrice>
                <S.Price>₩{Number(el.price).toLocaleString("ko-KR")}</S.Price>
              </S.BodyPrice>
            </S.Body>
          )) || <div></div>}
        </InfiniteScroll>
      </div>
      <S.Footer>
        <S.NewBtn onClick={props.onClickMoveToMarketBoardNew}>
          상품등록
        </S.NewBtn>
      </S.Footer>
    </S.Wrapper>
  );
}
