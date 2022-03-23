// 등록화면페이지에서 보여줄수 있도록 백엔드에서 fetchProdeuct를 가져오는 페이지

import { gql } from "@apollo/client";

export const FETCH_PRODUCT = gql`
  query fetchProduct($productId: ID) {
    fetchProduct(productId: $productId){
        _id
        seller
        name
        detail
        price
        createdAt
    }
  }
`;

export const DELETE_PRODUCT = gql`
  mutation deleteProduct($productId:ID){
    deleteProduct(productId:$productId){
      _id
      number
      message
    }
  }
`