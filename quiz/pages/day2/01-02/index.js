import {useState} from 'react'

export default function HelloPage(){
    const [click, setClick] = useState("안녕하세요")
    
    function onClick(){
        setClick("반갑습니다")
    }
    

    return(
        <div>
            <button id='change' onClick={onClick}>{click}</button>
        </div>

    )
}
