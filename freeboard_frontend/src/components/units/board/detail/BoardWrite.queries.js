// 백엔드의 플레이 그라운드에서 정보를 가져오는 페이지 container.js로 보내진다

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
export const DELETE_BOARD = gql`
    mutation deleteBoard($boardId:ID!){
        deleteBoard(boardId:$boardId) 
    }
`