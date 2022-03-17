import axios from 'axios'
//pakage.json 파일이 실행되려면 node_modules파일이 꼭 필요하다 yarn install로 설치
import {useState} from 'react'

export default function RestGetPage(){
    const[data, setData] =useState("")

    const callRestApi= async () =>{

       const result = await axios.get("https://koreanjson.com/posts/1")
       console.log(result)
       console.log(result.data.title)
       setData(result.data.title)

    }

    return(
        <div>
            <div>{data}</div>
            <button onClick={callRestApi}>REST-API 요청하기</button>
        </div>
    )

}