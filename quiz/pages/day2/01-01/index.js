export default function HelloPage(){

    function onClick(){
        let hello = "반갑습니다"
        document.getElementById("click").innerText= hello;
    }

    return(
        <div>
            <button id="click" onClick={onClick}>안녕하세요</button>
        </div>
    )
}
