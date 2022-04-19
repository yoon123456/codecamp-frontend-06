import { gql, useMutation, useQuery } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";
import styled from "@emotion/styled";

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

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;
  margin-bottom: 10px;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

const Span = styled.span`
  width: 20%;
  height: 30px;
  margin-bottom: 10px;
`;
const Input = styled.input`
  background-color: mintcream;
  border-radius: 5px;
  margin-bottom: 10px;
  width: 400px;
  height: 50px;
`;
const Button = styled.button`
  background-color: mintcream;
  border: none;
  border-radius: 30%;
  cursor: pointer;
`;

export default function ApolloCacheStatePage() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARDS);
  const [createBoard] = useMutation(CREATE_BOARD);
  const [deleteBoard] = useMutation(DELETE_BOARD);

  const [writer, setWirter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const onClickDelete = (boardId: string) => async () => {
    await deleteBoard({
      variables: { boardId },
      refetchQueries: [
        {
          query: FETCH_BOARDS,
          variables: { boardId: router.query.boardId },
        },
      ],
    });
  };

  const onChangeWriter = (e: ChangeEvent<HTMLInputElement>) => {
    setWirter(e.target.value);
  };
  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onChangeContents = (e: ChangeEvent<HTMLInputElement>) => {
    setContents(e.target.value);
  };

  const onClickSubmit = async () => {
    try {
      await createBoard({
        variables: {
          createBoardInput: {
            writer,
            password,
            title,
            contents,
          },
        },
        refetchQueries: [
          {
            query: FETCH_BOARDS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      alert("게시물 등록에 성공하였습니다");
    } catch {
      alert("게시물 등록에 실패하였습니다");
    }
  };
  return (
    <div>
      {data?.fetchBoards.map((el: any) => (
        <Row key={el._id}>
          <Span>{el.writer}</Span>
          <Span>{el.title}</Span>
          <Span>{el.contents}</Span>
          <Button onClick={onClickDelete(el._id)}>X</Button>
        </Row>
      ))}
      <Col>
        작성자: <Input type="text" onChange={onChangeWriter} />
        비밀번호: <Input type="password" onChange={onChangePassword} />
        제목: <Input type="text" onChange={onChangeTitle} />
        내용: <Input type="text" onChange={onChangeContents} />
        <Button onClick={onClickSubmit}>등록하기</Button>
      </Col>
    </div>
  );
}
