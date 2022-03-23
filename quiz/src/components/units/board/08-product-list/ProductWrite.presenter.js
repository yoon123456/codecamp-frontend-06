// 등록된 상품목록들이 보이도록 한 JSX부분 

import * as S from './ProductWrite.styles'  
import { getDate } from '../../../../commons/libraries/utilis'   
        
export default function ProductListUI(props){

     
    return(    
        <S.Box>
            <S.Row>
                <S.Search type="text" placeholder='제목을 검색해주세요'></S.Search>
                <S.SearchDate type="text" placeholder='YYYY.MM.DD'></S.SearchDate>
                <S.ButtonBlack>검색</S.ButtonBlack>
            </S.Row>
            <S.ListHeader>
                <S.List>ID</S.List>
                <S.List>상품명</S.List>
                <S.List>판매자</S.List>
                <S.List>등록일</S.List>
            </S.ListHeader>
                <div>
                    {props.data?.fetchProducts.map((el) => (
                        <S.Row key={el._id}>
                            <S.ListId>{String(el._id).slice(-4).toUpperCase()}</S.ListId>
                            <S.ListName id={el._id} onClick={props.onClickMoveToProductDetail}> {el.name} </S.ListName>
                            <S.ListSeller>{el.seller}</S.ListSeller>
                            <S.ListDate>{getDate(el.createdAt)}</S.ListDate>
                        </S.Row> 
                    ))}
                    <S.Button onClick={props.onClickMoveToProductNew}>상품 등록하기</S.Button>
                </div>
           
        </S.Box>
    )
}     