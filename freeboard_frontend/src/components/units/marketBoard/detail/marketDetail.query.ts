import { gql } from "@apollo/client";

// export const DELETE_USED_ITEM = gql`
//   mutation deleteUseditem($useditemId: ID!) {
//     deleteUseditem(useditemId: $useditemId)
//   }
// `;

export const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      pickedCount
      tags
      createdAt
      images
      seller {
        _id
        email
        name
      }
    }
  }
`;

export const FETCH_USED_ITEMS_COUNT_IPICKED = gql`
  query fetchUseditemsCountIPicked($fetchUseditemsCountIPicked: Int!) {
    fetchUseditemsCountIPicked(
      fetchUseditemsCountIPicked: $fetchUseditemsCountIPicked
    )
  }
`;

export const DELETE_USED_ITEM = gql`
  mutation deleteUseditem($useditemId: ID!) {
    deleteUseditem(useditemId: $useditemId)
  }
`;

export const TOGGLE_USED_ITEM_PICK = gql`
  mutation toggleUseditemPick($useditemId: ID!) {
    toggleUseditemPick(useditemId: $useditemId)
  }
`;
