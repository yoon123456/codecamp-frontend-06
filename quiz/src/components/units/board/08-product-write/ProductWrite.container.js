// 여기는 상품을 등록하는 페이지 이자 수정페이지

import { useState } from 'react'
import { useMutation } from '@apollo/client'
import ProductWriteUI from './ProductWrite.presenter'
import { CREATE_PRODUCT, UPDATE_PRODUCT } from './ProductWrite.queries'
import { useRouter } from 'next/router'

export default function ProductWrite(props){
    const router = useRouter()
    const [isActive, setIsActive] = useState(false)

    const [seller, setSeller] = useState("")
    const [name, setName] = useState("")
    const [detail, setDetail] = useState("")
    const [price, setPrice] = useState("")
    
    // const [data, setData] = useState("")
    const [createProduct] = useMutation(CREATE_PRODUCT)
    const [updateProduct] = useMutation(UPDATE_PRODUCT)
    
    const onClickUpdate = async () => {
        const result2 = await updateProduct({
            variables: { productId: String(router.query.productId),
                updateProductInput:{
                    name:name,
                    detail:detail,
                    price:Number(price)
                }
            }
        })
        alert("게시글을 정말로 수정하시겠습니까???")
        alert("게시글 수정에 성공하였습니다!!!")
        router.push(`/day8/${result2.data.updateProduct.productId}`)
    }
        
    const onClickCreate = async () => {
        const result = await createProduct({
            variables: { seller:seller, 
                createProductInput:{
                    name:name,
                    detail:detail,
                    price:Number(price)
            }  
        }
        }) 
        alert("게시물을 정말로 등록하시겠습니까??")
        alert("게시글 등록에 성공하였습니다!!!")
        router.push(`/day8/${result.data.createProduct.id}`)
    }
    
    const onChangeSeller = (event) => {
        setSeller(event.target.value)

        if(event.target.value !== ""&& name !== "" && detail !== "" && price !== ""){
            setIsActive(true)
        } else {
            setIsActive(false)
        }
    }
    
    const onChangeName = (event) => {
        setName(event.target.value)

        if( seller !== "" && event.target.value !== "" && detail !== "" && price !== ""){
            setIsActive(true)
        } else {
            setIsActive(false)
        }
    }
    
    const onChangeDetail = (event) => {
        setDetail(event.target.value)

        if( seller !== "" && name !== "" && event.target.value !== "" && price !== ""){
            setIsActive(true)
        } else {
            setIsActive(false)
        }
    }

    const onChangePrice = (event) =>{
        setPrice(event.target.value)

        if(seller !== "" && name !== "" && detail !== "" && event.target.value !== ""){
            setIsActive(true)
        }else{
            setIsActive(false)
        }
    }

    return (
        <ProductWriteUI 
            onChangeSeller={onChangeSeller} 
            onChangeName={onChangeName}
            onChangeDetail={onChangeDetail}
            onChangePrice={onChangePrice}
            onClickCreate={onClickCreate}
            onClickUpdate={onClickUpdate}
            isActive={isActive}
            isEdit={props.isEdit}
        />
    )
}





