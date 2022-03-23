import BoardWriteUI from "./BoardWrite.presenter"
import { useRouter } from "next/router"
import { useQuery } from "@apollo/client"
import { FETCH_BOARD } from "./BoardWrite.queries"

export default function BoardWrite(){

    const router = useRouter()
    console.log(router)

    const { data } = useQuery(FETCH_BOARD, {
        variables: { number: Number(router.query.number) }
    })

    console.log(data)

    return (
        <BoardWriteUI
        data={data}/>
       
    )
}