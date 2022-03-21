import{useState} from 'react'
import{useMutation, gql} from '@apollo/client'
import{Style} from "../../styles/graphql"
import { useRouter } from 'next/router'


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
    const router = useRouter()

    const[seller,setSeller] = useState("")
    const[name,setName] = useState("")
    const[detail,setDetail] = useState("")
    const[price,setPrice] = useState("")

    const [createProduct] = useMutation(CREATE_PRODUCT)
 

    const Submit = async ()=>{
        try{
           const result = await createProduct({
                variables:{
                    seller: seller,
                    createProductInput:{
                        name: name,
                        detail: detail,
                        price: price
                }
            } 
        }) 
        console.log(result)
        alert("상품등록에 성공했어요")
        router.push(`/day5-02/${result.data.createProduct._id}`)

        }catch(error){
            alert(error.message)
        }
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
        setPrice(Number(event.target.value))
    }
    

    return(
        <div>
           <Style>
                판매자: <input type="text" onChange={onChangeSeller}/>
                상품명: <input type="text" onChange={onChangeName} />
                상품설명: <input type="text" onChange={onChangeDetail} />
                상품가격: <input type="text" onChange={onChangePrice}/>
                <button onClick={Submit}>상품 등록!</button>
            </Style>
        </div>
    )
}
