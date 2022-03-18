//rest api 이용하여 데이터 받아오기
//[ REST-API 요청하기 ] 라는 버튼을 만들고, 이 버튼을 클릭했을 때 https://koreanjson.com/users 라는 Endpoint에 get 방식으로 요청하여 데이터를 받아보세요.

import axios from 'axios'

export default function RestApiPage (){
    const callRestApi = async () =>{
        const result = await axios.get("https://koreanjson.com/posts/1")
        console.log(result)        
    }

    return(
        <div>
            <button onClick={callRestApi}>REST-API 요청하기</button>
        </div>
    )

}



