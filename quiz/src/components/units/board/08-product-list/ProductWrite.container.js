// 등록된 상품들이 보여지는 페이지에서 하는 여러 기능들을 구현하는 곳

import { useQuery} from '@apollo/client'
import { useRouter } from 'next/router';
import { FETCH_PRODUCTS } from './ProductWrite.queries';
import ProductListUI from './ProductWrite.presenter'



export default function ListProductPage(){
    const router = useRouter();

const { data } = useQuery(FETCH_PRODUCTS,{
    variables: {productId: String(router.query.id)}
});

const onClickMoveToProductNew = () => {
    router.push("/day8/new/");
}


const onClickMoveToProductDetail = (event) =>{
    router.push(`/day8/${event.target.id}`)
}

    return <ProductListUI 
    data={data} 
    onClickMoveToProductNew={onClickMoveToProductNew}
    onClickMoveToProductDetail={onClickMoveToProductDetail}
    />
    
}


