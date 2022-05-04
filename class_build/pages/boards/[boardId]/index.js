import { useRouter } from "next/router";
import Head from "next/head";
import { gql, request } from "graphql-request";

export default function BoardDetailPage(props) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <meta property="og:title" content={props.myboardData?.title} />
        <meta property="og:description" content={props.myboardData?.contents} />
        <meta property="og:image" content={props.myboardData?.images[0]} />
      </Head>
      <div>
        안녕하세요 게시글 상세페이지 입니다! 게시글 ID는 {router.query.boardId}
        입니다!!
      </div>
    </div>
  );
}

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      title
      contents
      images
    }
  }
`;

// 이름은 바꿀 수 없으며 pages 안에서만 사용해야한다!
// 이 페이지는 서버사이드 렌더링을 하겠다는 의미
export const getServerSideProps = async (context) => {
  // const {data} =useQuery(FETCH_BOARD)

  //데이터를 요청할 것
  const result = await request(
    "https://backend06.codebootcamp.co.kr/graphql",
    FETCH_BOARD,
    {
      boardId: context.query.boardId,
    }
  );

  return {
    props: {
      myboardData: {
        title: result.fetchBoard.title,
        contents: result.fetchBoard.contents,
        images: result.fetchBoard.images,
      },
    },
  };
};

//{   "extends": ["next/babel", "next/core-web-vitals"] }
