import _ from "lodash";
import { useRouter } from "next/router";
import MarketListPageUI from "./marketList.presenter";

export default function MarketListPage() {
  const router = useRouter();

  const getDebounce = _.debounce((data) => {});
  return <MarketListPageUI />;
}
