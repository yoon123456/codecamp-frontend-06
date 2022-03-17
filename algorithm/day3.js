/*
true 값을 반환하는 데이터들
-true
-0이 아닌 숫자
-빈 문자열이 아닌 문자열
-객체
-배열

false 값을 반환하는 데이터들
-false
-숫자 0
-빈 문자열
-null
-NaN
-undefined
*/

//switch 문법
const day = "월요일";

switch(day){
  case "월요일" :
	result ="오늘은 월요일 입니다";
   
  case "화요일" :
    result ="오늘은 화요일 입니다";
 
  case "수요일" :
    result ="오늘은 수요일 입니다";
    
  default :
    //예외처리를 하는방법 switch의 최하단에 위치해야한다
    result = "오늘은 " + day + " 입니다";
}

console.log(result)

//function boolean(입력인자,매개변수)

function boolean(input1,input2){
    if(input1 === true || input2 === true){
      console.log("true")
    }else if(input1 === false && input2 === false){
      console.log("false")
    }
  }
  
  
  boolean( true, false)
  boolean( false, true)
  boolean( false, false)
  
  1 === 1 && 1 === 1

  function evenOdd(num){
    if(num === 0){
      console.log("Zero") 
    }else if(num%2 === 0){
      //짝수 나머지값이 0일때
      console.log("Even")
    }else if(num%2 === 1){
       //홀수 나머지값이 1일때
      console.log("Odd")
    }else{
     console.log("정수를 입력하세요") 
    }
   
  }
  
  evenOdd()

  function temperature(num){
	if( 24<=num && num<=30) {
		console.log("조금 덥습니다")
	}else if(num<24 && num>=19){
    console.log("날씨가 좋네요")
  }else if(num>=10 && num <19){
    console.log("조금 춥네요")
  }else{
    console.log("매우 춥거나 덥습니다")
  }
}

temperature()

function days(month) {
	if(month === 2) {
		console.log(28)
  }else if(month === 4 || month === 6 || month ===9 || month ===11){
    console.log(30)
  }else{
    console.log(31)
  }
}

days()
