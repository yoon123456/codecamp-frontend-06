import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useState } from "react";

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
const MyRow = styled.div`
  display: flex;
`;
const MyColumn = styled.div`
  width: 25%;
`;

export default function MapBoardPage() {
  const { data } = useQuery(FETCH_BOARDS);
  const [myIndex, setMyIndex] = useState(-1);

  console.log(data);

  const onClickEdit = (event) => {
    setMyIndex(event.target.id);
  };

  return (
    <div>
      {data?.fetchBoards.map((el, index) =>
        index !== myIndex ? (
          <MyRow key={el._id}>
            <MyColumn>
              <input type="checkbox" />
            </MyColumn>
            <MyColumn>{el._id}</MyColumn>
            <MyColumn>{el.writer}</MyColumn>
            <MyColumn>{el.title}</MyColumn>
            <button onClick={onClickEdit}></button>
          </MyRow>
        ) : (
          <div>수정하기 화면</div>
        )
      )}
    </div>
  );
}

/*
  <div>
      {data?.fetchBoards.map((el, index) =>  (
        <div key={el._id}>
        {index !== myIndex &&(
        <MyRow>
          <MyColumn>
            <input type="checkbox" />
          </MyColumn>
          <MyColumn>{el._id}</MyColumn>
          <MyColumn>{el.writer}</MyColumn>
          <MyColumn>{el.title}</MyColumn>
        </MyRow>
        )}
     {index === 2 && <div>수정하기</div> }
      </div>
    </div>
}
*/
