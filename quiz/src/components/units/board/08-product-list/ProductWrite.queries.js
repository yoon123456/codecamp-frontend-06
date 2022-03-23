//상품목록들을 가져올 수 있도록 백엔드에서 불러오는 곳

import{gql} from '@apollo/client'


export const FETCH_PRODUCTS = gql`
    query fetchProducts{
        fetchProducts{
                _id
                seller
                name
                detail
                price
                createdAt
        }
    }
`
