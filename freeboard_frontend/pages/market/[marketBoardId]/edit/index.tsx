import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_USED_ITEM } from "../../../../src/components/units/marketBoard/writer/marketWriter.query";
import MarketBoardWriter from "../../../../src/components/units/marketBoard/writer/matketWriter.container";
// 중고마켓 상품 수정 페이지
export default function MarketEditPage() {
  const router = useRouter();

  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { usedItemId: String(router.query.marketBoardId) },
  });
  return <MarketBoardWriter isEdit={true} data={data} />;
}
