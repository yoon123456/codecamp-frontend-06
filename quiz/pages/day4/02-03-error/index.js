// createProduct에 대해서 동일하게 진행

import{useState} from 'react'
import{useMutation, gql} from '@apollo/client'

import{ Style }from '../../../styles/graphql'

const CREATE_PRODUCT = gql`
mutation createProduct($seller: String, $createProductInput: CreateProductInput!){
    createProduct(seller: $seller, createProductInput: $createProductInput){
        _id
        number
        message
    }
}   
`

export default function GraphqlMutationProduct(){
    const [createProduct] = useMutation(CREATE_PRODUCT)

    const[seller,setSeller] = useState("")
    const[name,setName] = useState("")
    const[detail,setDetail] = useState("")
    const[price,setPrice] = useState("")

    const onClickGet = async () =>{
        await createProduct({
            variables:{
                seller: seller,
                createProductInput:{
                    name: name,
                    detail: detail,
                    price: price
                }            
            }
        })

    }

    const onChangeSeller = (event) =>{
        setSeller(event.target.value) 
      }
  
      const onChangeName = (event) =>{
        setName(event.target.value)
      }
  
      const onChangeDetail = (event) =>{
        setDetail(event.target.value)
      }

      const onChangePrice = (event) =>{
        setPrice(event.target.value)
      }


    return(
        <div>
            <Style>
                판매자: <input type="text" onClick={onChangeSeller}/>
                상품명: <input type="text" onClick={onChangeName} />
                상품설명: <input type="text" onClick={onChangeDetail} />
                상품가격: <input type="text" onClick={onChangePrice}/>
                <button onClick={onClickGet}>상품 등록!</button>
            </Style>
        </div>
    )
}