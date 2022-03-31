import { useState } from "react";

export default function Pagination(props) {
  const [startPage, setStartPage] = useState(1);

  console.log(startPage);

  // 처음에는 dataBoardCount가 undefined를 반환하기 떄문에 ?를 꼭 붙여준다

  const onClickPage = (event) => {
    props.refetch({ page: Number(event.target.id) });
  };
  const onClickPrevPage = () => {
    if (startPage === 1) return;
    setStartPage((prev) => prev - 10);
    props.refetch({ page: startPage - 10 });
  };
  const onClickNextpage = () => {
    if (startPage + 10 > props.lastPage) return;
    setStartPage((prev) => prev + 10);
    props.refetch({ page: startPage + 10 });
  };
  return (
    <div>
      <span onClick={onClickPrevPage}>이전페이지</span>
      {new Array(10).fill(1).map((_, index) =>
        index + startPage <= props.lastPage ? (
          <span
            key={index + startPage}
            onClick={onClickPage}
            id={String(index + startPage)}
          >
            {` `}
            {index + startPage}
          </span>
        ) : (
          <span></span>
        )
      )}
      <span onClick={onClickNextpage}>다음페이지</span>
    </div>
  );
}
