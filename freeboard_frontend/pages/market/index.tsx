import { useQuery } from "@apollo/client";
import { useState } from "react";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../src/commons/types/generated/type";
import { withAuth } from "../../src/components/commons/hocs/withAuth";
import MarketListPage from "../../src/components/units/marketBoard/list/marketList.container";
import { FETCH_USED_ITEMS } from "../../src/components/units/marketBoard/list/marketList.query";

// 중고마켓 상품목록 페이지
function MarketBoardPage() {
  const [isSoldout, setIsSoldout] = useState(false);
  const { data, refetch, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS, {
    variables: {
      isSoldout,
    },
  });
  const onLoadMore = () => {
    if (!data) return;

    fetchMore({
      variables: { page: Math.ceil(data.fetchUseditems.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchUseditems)
          return { fetchUseditems: [...prev.fetchUseditems] };
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult?.fetchUseditems,
          ],
        };
      },
    });
  };

  return (
    <MarketListPage
      data={data}
      refetch={refetch}
      onLoadMore={onLoadMore}
      isSoldout={isSoldout}
      setIsSoldout={setIsSoldout}
    />
  );
}

export default withAuth(MarketBoardPage);
