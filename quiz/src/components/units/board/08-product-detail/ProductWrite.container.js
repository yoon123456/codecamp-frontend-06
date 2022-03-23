// 상품이 등록된 페이지를 보여주고 기능할 수 있도록 만드는 부분
//삭제 수정 목록 버튼을 누르면 이동하도록 구현한 페이지

import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import ProductDetailUI from "./ProductWrite.presenter";
import { FETCH_PRODUCT, DELETE_PRODUCT } from "./ProductWrite.queries";

export default function ProductDetail() {
  const router = useRouter();
  const [deleteProduct] =useMutation(DELETE_PRODUCT)
  const { data } = useQuery(FETCH_PRODUCT, {
    variables: { productId: String(router.query.productId) },
  });

  const onClickMoveToProductNew = () => {
    router.push("/day8/");
}

const onClickMoveToProductDetail = (event) =>{
    router.push(`/day8/${event.target.id}/edit`)
}

const onClickDelete = (event) => {
    deleteProduct({
        variables:{ productId: String(event.target.id) },
        refetchQueries: [{query:FETCH_PRODUCT}]
     })
     alert("상품게시글을 진짜로 삭제하시겠습니까???")
     alert("상품게시글 삭제에 성공하였습니다!!!")
     router.push(`/day8/`)
 }


  return <ProductDetailUI
   data={data}
   onClickMoveToProductNew={onClickMoveToProductNew}
   onClickMoveToProductDetail={onClickMoveToProductDetail}
   onClickDelete={onClickDelete} />;
}
