import { useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../src/commons/types/generated/type";
import { withAuth } from "../../src/components/commons/hocs/withAuth";
import MarketListPage from "../../src/components/units/marketBoard/list/marketList.container";
import { FETCH_USED_ITEMS } from "../../src/components/units/marketBoard/list/marketList.query";

// 중고마켓 상품목록 페이지
function MarketBoardPage() {
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS);

  return <MarketListPage data={data} refetch={refetch} />;
}

export default withAuth(MarketBoardPage);
