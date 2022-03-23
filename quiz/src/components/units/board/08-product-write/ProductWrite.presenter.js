// 여기는 상품을 등록하고 수정하는 페이지

import * as S from './ProductWrite.styles'


export default function ProductWriteUI(props){
    return (
        <S.Wrapper>
            <S.Title>상품{props.isEdit ? "수정" : "등록"} 페이지</S.Title>
            <S.SellerInput type="text" onChange={props.onChangeSeller} placeholder="판매자의 이름을 적어주세요"/><br />
            <S.NameInput type="text" onChange={props.onChangeName} placeholder="상품이름을 적어주세요" />
            <S.DetailInput type="text" onChange={props.onChangeDetail} placeholder="상품설명을 적어주세요"/>
            <S.PriceInput type="text" onChange={props.onChangePrice}  placeholder="상품가격을 적어주세요"/>
            <S.SubmitButton onClick={props.isEdit ? props.onClickUpdate : props.onClickCreate} isActive={props.isActive}>
                상품{props.isEdit ? "수정" : "등록"}하기
            </S.SubmitButton>
        </S.Wrapper>
    )
}
