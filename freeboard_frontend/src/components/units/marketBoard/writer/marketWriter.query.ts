import { gql } from "@apollo/client";

export const FETCH_USED_ITEM = gql`
    fetchUseditem($useditemId: ID!){
        fetchUseditem(useditemId:$useditemId){
            _id
            name
            contents
            price
            images
            buyer
            seller
            useditemAddress{
                _id
                zipcode
                address
                addressDetail
            }
        }
    }
)
`;
