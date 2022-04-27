import { gql } from "graphql-request";

export const CREATE_POINT_TRANSACTION_OF_LOADING = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      _id
      impUid
      amount
      useditem {
        _id
        name
        price
        seller {
          _id
          email
          name
        }
        buyer {
          _id
          email
          name
        }
        useditemAddress {
          _id
          zipcode
          address
          addressDetail
        }
      }
    }
  }
`;

export const CREATE_POINT_TRANSACTION_OF_BUYUNG_AND_SELLING = gql`
  mutation createPointTransactionOfBuyingAndSelling($useritemId: ID!) {
    createPointTransactionOfBuyingAndSelling(useritemId: $useditemId) {
      _id
      name
      contents
      price
      buyer {
        _id
        name
        email
      }
      seller {
        _id
        name
        email
      }
      useditemAddres {
        _id
        zipcode
        address
        addressDetail
      }
    }
  }
`;
