import styled from "@emotion/styled";
import { useState } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

export default function Pagination(props) {
  const [startPage, setStartPage] = useState(1);
  const [current, setCurrent] = useState(1);
  console.log(startPage);

  const PrevButton = styled(LeftOutlined)`
    color: ${(props) => (props.isActive ? "lightgray" : "black")};
  `;

  const NextButton = styled(RightOutlined)`
    color: ${(props) => (props.isActive ? "lightgray" : "black")};
  `;

  const Span = styled.span`
    color: ${(props) => (props.current === props.id ? "blue" : "black")};
  `;

  // 처음에는 dataBoardCount가 undefined를 반환하기 떄문에 ?를 꼭 붙여준다

  const onClickPage = (event) => {
    props.refetch({ page: Number(event.target.id) });
    setCurrent(Number(event.target.id));
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
      <PrevButton
        onClick={onClickPrevPage}
        isActive={startPage === 1 ? true : false}
      />
      {new Array(10).fill(1).map((_, index) =>
        index + startPage <= props.lastPage ? (
          <Span
            key={index + startPage}
            onClick={onClickPage}
            id={index + 1}
            current={current}
          >
            {` `}
            {index + startPage}
          </Span>
        ) : (
          <Span></Span>
        )
      )}
      <NextButton
        onClick={onClickNextpage}
        isActive={startPage + 10 > props.lastPage ? true : false}
      />
    </div>
  );
}
