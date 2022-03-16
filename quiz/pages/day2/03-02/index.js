import { useState } from 'react'

export default function TokenStatePage(){

    const [token, setToken] = useState(0)

    function getToken(){
        setToken(String(Math.floor(Math.random() * 1000000)).padStart(6, "0"))
    }

    return(
        <div>
            <div>{token}</div>
            <button onClick={getToken}>인증번호전송</button>
        </div>
    )
}