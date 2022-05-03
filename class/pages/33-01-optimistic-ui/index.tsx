import { gql, useMutation, useQuery } from "@apollo/client";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      likeCount
    }
  }
`;

const LIKE_BOARD = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;

export default function OptimisticUIPage() {
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: "6269ece8a8255b002988d634",
    },
  });
  const [likeBoard] = useMutation(LIKE_BOARD);

  const onClickOptimisticUI = () => {
    likeBoard({
      variables: { boardId: "6269ece8a8255b002988d634" },
      // refetchQueries: [
      //   {
      //     query: FETCH_BOARD,
      //     variables: { boardId: "6269ece8a8255b002988d634" },
      //   },
      // ],
      optimisticResponse: {
        likeBoard: (data?.fetchBoard.likeCount || 0) + 1,
      },
      update(cache, { data }) {
        cache.writeQuery({
          query: FETCH_BOARD,
          variables: { boardId: "6269ece8a8255b002988d634" },
          data: {
            fetchBoard: {
              // _id, __typename 은 공식이다 둘 중 하나라도 빠지면 데이터를 찾지 못한다 꼭 둘 다 적어주기!
              _id: "6269ece8a8255b002988d634",
              __typename: "Board",
              likeCount: data.likeBoard,
            },
          },
        });
      },
    });
  };
  return (
    <div>
      <h1>OptimisticUI</h1>
      <div>좋아요카운트:{data?.fetchBoard.likeCount}</div>
      <button onClick={onClickOptimisticUI}>좋아요👍</button>
    </div>
  );
}
