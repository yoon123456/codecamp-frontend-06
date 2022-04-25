import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_USED_ITEM } from "../../../src/components/units/marketBoard/detail/marketDetail.query";
import MarketBoardWriter from "../../../src/components/units/marketBoard/writer/marketWriter.container";

// 중고마켓 상품 등록페이지
export default function MarkeBoardWriterPage() {
  return <MarketBoardWriter isEdit={false} />;
}
