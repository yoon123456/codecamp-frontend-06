import { useQuery, gql } from '@apollo/client'
import { useRouter } from 'next/router'


const FETCH_PRODUCT = gql`
    query fetchProduct($productId:ID){
        fetchProduct(productId:$productId){
            seller
            name
            detail
            price
        }
    }
`;


export default function DynamicRoutedPage(){
    const router = useRouter()
    console.log(router)

    const { data } = useQuery(FETCH_PRODUCT, {
        variables:{productId:router.query.number}
        
    })

    console.log(data)


    return(
        <div>
            <div>{data?data.fetchProduct.seller: <span>loading...</span> }판매자의 상품입니다</div>
            <div>상품명: {data?data.fetchProduct.name : <span>loading...</span>}</div>
            <div>상품설명: {data?data.fetchProduct.detail : <span>loading...</span>}</div>
            <div>가격: {data?data.fetchProduct.price: <span>loading...</span>}원</div>
        </div>
    )
}