import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { ChangeEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/type";
import _ from "lodash";

const FETCH_BOARDS = gql`
  query fetchBoards($search: String, $page: Int) {
    fetchBoards(search: $search, page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;
const MyRow = styled.div`
  display: flex;
`;
const MyColumn = styled.div`
  width: 25%;
`;

export default function MapBoardPage() {
  // const [search, setSearch] = useState("");
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const getDebounce = _.debounce((data) => {
    // 0.2초간 아무런 작업이 없을때 실행될 부분
    refetch({ search: data, page: 1 });
  }, 200);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
    // setSearch(event.target.value);
    // refetch({ search: event.target.value, page: 1 });
    // refetch는 가장 쉽지만 좋은 방법은 아니다 수많은 fetch가 이뤄지기 때문!
  };

  // const onClickSearch = () => {
  //   refetch({ search, page: 1 });
  // };

  const onClickPage = (event) => {
    refetch({ page: Number(event.target.id) });
  };

  console.log(data);

  return (
    <div>
      검색어입력: <input type="text" onChange={onChangeSearch} />
      {/* <button onClick={onClickSearch}>검색하기</button> */}
      {data?.fetchBoards.map((el) => (
        <MyRow key={el._id}>
          <MyColumn>{el.writer}</MyColumn>
          <MyColumn>{el.title}</MyColumn>
        </MyRow>
      ))}
      {new Array(10).fill(1).map((_, index) => (
        <span key={index + 1} onClick={onClickPage} id={String(index + 1)}>
          {index + 1}
        </span>
      ))}
    </div>
  );
}
