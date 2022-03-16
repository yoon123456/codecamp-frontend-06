export default function TokenPage(){

    function getToken(){
        let token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
        document.getElementById("token").innerText = token
    
    }

    return(
        <div>
            <div id="token">000000</div>
            <button onClick={getToken}>인증번호전송</button>
        </div>
    )
}

