import { useState, MouseEvent } from "react";
import PaginationUI from "./pagination.presenter";
import { IPaginationProps } from "./pasination.types";

export default function Pagination(props: IPaginationProps) {
  const [startPage, setStartPage] = useState(1);
  const [pickPage, setPickPage] = useState(1);

  console.log(startPage);

  // 처음에는 dataBoardCount가 undefined를 반환하기 떄문에 ?를 꼭 붙여준다

  const onClickPage = (event: MouseEvent<HTMLDivElement>) => {
    props.refetch({
      page: Number((event.target as HTMLDivElement).id),
    });
    setPickPage(Number((event.target as HTMLDivElement).id));
  };
  const onClickPrevPage = () => {
    if (startPage === 1) return;
    setStartPage((prev) => prev - 10);
    setPickPage(startPage - 1);
    props.refetch({ page: startPage - 10 });
  };
  const onClickNextpage = () => {
    if (startPage + 10 > props.lastPage) return;
    setStartPage((prev) => prev + 10);
    setPickPage(startPage + 10);
    props.refetch({ page: startPage + 10 });
  };
  return (
    <PaginationUI
      startPage={startPage}
      lastPage={props.lastPage}
      pickPage={pickPage}
      onClickPage={onClickPage}
      onClickPrevPage={onClickPrevPage}
      onClickNextpage={onClickNextpage}
    />
  );
}
