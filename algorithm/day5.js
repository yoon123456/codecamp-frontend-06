//조건문 점수에 따른 등급부여
function grade(score) {
	if( score > 100 || score < 0 ){
    return ("잘못된 점수 입니다");
  }else if(score >= 90){
    return "A"
  }else if(score >= 80){
    return "B"
  }else if(score >= 70){
    return "C"
  }else if(score >= 60){
    return "D"
  }else{
    return "F"
  }
}

//마이페이지
const myShopping = [
    { category: "과일", price: 12000　},
    { category: "의류", price:10000　 },
    { category: "의류", price: 20000　},
    { category: "장난감", price: 9000 },
    { category: "과일", price: 5000　 },
    { category: "의류", price: 10000  },
    { category: "과일", price: 8000　　},
    { category: "의류", price: 7000　　},
    { category: "장난감", price: 5000  },
    { category: "의류", price: 10000　 },
]


function myPage(){
let count = 0; //구매횟수
let amount = 0; // 총 구매 금액
let grade = ""; //최종등급

for(let i = 0; i < myShopping.length; i++){
if ( myShopping[i].category === "과일"){
  count++;
  amount += myShopping[i].price;
}
}
if( count >= 5){
 grade = "Gold";
}else if(count >=3){
  grade = "Silver";   
}else{
  grade = "Bronze";
}
// return "의류를 구매한 횟수는 총" + count + "회 금액은" +
//   amount +"원이며 등급은 " + grade + " 입니다."
return `의류를 구매한 횟수는 총 ${count}회 금액은 ${amount}원이며 등급은 ${grade}입니다.`
}

myPage()