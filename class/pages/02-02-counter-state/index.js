import { useState } from 'react'

export default function CounterStatePage(){

    const [count, setCount] = useState(0)
    // let count = 0   let은 화면에 반영이 안되기 때문에 react에서는 사용 안함

    function counter(){
        setCount(count + 1)
        // count = count + 1
    }

    return(
        <div>
            <div>{count}</div>
            <button onClick={counter}>카운트 올리기!!!</button>
        </div>
    )
}