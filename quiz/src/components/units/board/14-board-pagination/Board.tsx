import styled from "@emotion/styled";

const MyRow = styled.div`
  display: flex;
`;
const MyColumn = styled.div`
  width: 50%;
`;

export default function Board(props) {
  return (
    <div>
      {props.data?.fetchBoards.map((el, index) => (
        <MyRow key={el._id}>
          <MyColumn>
            {Number(props.dataBoardcount?.fetchBoardsCount) - index}
          </MyColumn>
          <MyColumn>{el.writer}</MyColumn>
          <MyColumn>{el.title}</MyColumn>
        </MyRow>
      ))}
    </div>
  );
}