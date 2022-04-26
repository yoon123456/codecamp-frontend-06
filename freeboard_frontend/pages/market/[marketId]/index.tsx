import MarketDetail from "../../../src/components/units/marketBoard/detail/marketDetail.container";
import MarketCommentList from "../../../src/components/units/marketComment/marketCommentList/marketCommentList.container";
import MarketCommentWriterPage from "../../../src/components/units/marketComment/marketCommentWriter/marketCommentWriter.container";

// 중고마켓 등록된 상품 상세 페이지 댓글이 나타나는 페이지
export default function MarketDetailPage() {
  return (
    <>
      <MarketDetail isEdit={false} />
      <MarketCommentWriterPage />
      <MarketCommentList />
    </>
  );
}
