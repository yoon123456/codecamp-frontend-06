/*
1. fetchProducts를 활용하여 상품 목록을 화면에 출력해 주세요.
2. 상품 목록의 각 행 왼쪽에 체크박스를 만들어 주세요.
3. 상품 목록의 각 행 오른쪽에 삭제 버튼을 만들어 주세요.
4. 체크박스를 체크하고 삭제 버튼을 클릭하면, 해당 줄을 삭제해 주세요.
5. refetchQueries를 활용하여 표를 업데이트 해주세요.
6. 체크박스에 체크도 사라져있는지 확인하고, 사라지지 않았다면 이유는 무엇인지, 사라지도록 만들려면 어떻게 해야하는지 구현해 보세요.
*/

import {gql, useMutation, useQuery} from '@apollo/client'
import styled from '@emotion/styled'

const FETCH_PRODUCTS =gql`
    query fetchProducts{
        fetchProducts{
            _id
            seller
            name
            detail
            price
        }
    }
`

const DELETE_PRODUCT = gql`
    mutation deleteProduct($productId:ID){
        deleteProduct(productId:$productId){
            _id
            number
            message
        }
    }
`

const Row = styled.div`
    display: flex;
    padding: 20px;
`

const Column = styled.div`
    width: 20%;
`


export default function ProductsPage(){
    const [deleteProduct] = useMutation(DELETE_PRODUCT)
    const {data} = useQuery(FETCH_PRODUCTS)

    const onClickDelete =(event) =>{
       
        deleteProduct({
            variables:{ productId: String(event.target.id)},
            refetchQueries:[{query: FETCH_PRODUCTS } ]
        })
    }

    


    return(
        <div>
            {data?. fetchProducts.map((el) => (
                <Row key={el._id}>
                    <Column><input type="checkbox" /></Column>
                    <Column>{el.seller}</Column>
                    <Column>{el.name}</Column>
                    <Column>{el.detail}</Column>
                    <Column>{el.price}</Column>
                    <Column>
                        <button id={el._id} onClick={onClickDelete}>삭제</button>
                    </Column>
                </Row>
            ))}

        </div>
    )
}