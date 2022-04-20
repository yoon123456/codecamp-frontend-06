import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import Dompurify from "dompurify";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function WebEditorDetailPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.id },
  });
  return (
    <div>
      <div style={{ color: "red" }}>작성자:{data?.fetchBoard.writer}</div>
      <div style={{ color: "green" }}>제목:{data?.fetchBoard.title}</div>
      {/* <div>내용:{data?.fetchBoard.contents}</div> */}
      {typeof window !== "undefined" ? (
        <div
          // style={{ color: "blue" }} 있어도 되고 없어도 실행이 가능하다!
          dangerouslySetInnerHTML={{
            __html: Dompurify.sanitize(data?.fetchBoard.contents),
          }}
        ></div>
      ) : (
        // hydration issue를 해결하기 위해 프리렌더링시 읽지 못하는 태그를 위에 적어주고 hydration 할때는 태그의 갯수를 맞춰주어서 색이 제대로 들어가도록한다
        <div style={{ color: "blue" }}></div>
      )}
      <div style={{ color: "gold" }}>상품가격:</div>
    </div>
  );
}
