import { gql } from "@apollo/client";

export const CREATE_USED_ITEM = gql`
  mutation createUseditem($createUseditemInput: CreateUseditemInput!) {
    createUseditem(createUseditemInput: $createUseditemInput) {
      _id
      name
      contents
      price
      remarks
      tags
      images
      pickedCount
      useditemAddress {
        _id
        zipcode
        address
        addressDetail
        lat
        lng
      }
      # buyer {
      #   _id
      #   email
      #   name
      #   picture
      #   userPoint {
      #     _id
      #     amount
      #     user
      #   }
      # }
      # seller {
      #   _id
      #   email
      #   name
      #   picture
      #   userPoint {
      #     _id
      #     amount
      #     user
      #   }
      # }
      # soldAt
      # createdAt
      # deletedAt
    }
  }
`;

export const UPDATE_USED_ITEM = gql`
  mutation updateUseditem(
    $updateUseditemInput: UpdateUseditemInput!
    $useditemId: ID!
  ) {
    updateUseditem(
      updateUseditemInput: $updateUseditemInput
      useditemId: $useditemId
    ) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      pickedCount
      seller {
        _id
        email
        name
      }
    }
  }
`;
