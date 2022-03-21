import {gql} from '@apollo/client'

export const FETCH_BOARD = gql`
    query fetchBoard($boardId: ID!){                        #  ($boardId: ID!) playground에서 그대로 옮겨오는 부분
        fetchBoard(boardId:$boardId){                       #  (boardId: $boardId) 자리를 바꿔줌
            _id                                             #   Board!부분
            writer
            title
            contents
            createdAt
            likeCount
            dislikeCount
        }
    }
`