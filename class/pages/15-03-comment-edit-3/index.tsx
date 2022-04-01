import { gql, useQuery } from "@apollo/client";
// import { useState } from "react";
import BoardCommentItem from "../../src/components/units/board/15-board-comment";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;

export default function MapBoardPage() {
  const { data } = useQuery(FETCH_BOARDS);
  // const [myIndex, setMyIndex] = useState([
  //   false,
  //   false,
  //   false,
  //   false,
  //   false,
  //   false,
  //   false,
  //   false,
  //   false,
  //   false,
  // ]);

  // console.log(data);

  return (
    <div>
      {data?.fetchBoards.map((el, index) => (
        <BoardCommentItem key={el._id} el={el} />
      ))}
    </div>
  );
}
