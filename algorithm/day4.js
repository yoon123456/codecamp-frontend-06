//반복문(For) 조건식이 범위가 있게 설명

//for를 이용한 continue
for(let i =0; i<5; i=i+1){
  if(i === 2){
    continue;
  }
  console.log(i)
}


//for-in  객체를 반복할 수 있다
let obj ={
  name : "철수",
  age :12
}

for(let aa in obj){
  console.log(aa, obj[aa])
}


//for-of 각각의 요소들을 가져올 수 있다
let str = "abc";

for(let data of str){
  console.log(data)
}

for(let i =0; i<str.length; i++){
  console.log(str[i])
}

//forEach 배열에만 사용할 수 있다
const arr =[1, 2, 3];

arr.forEach( function(name){
  console.log(name)
})
   //forEach 화살표 함수 
arr.forEach(name=>{
  console.log(name)
})

//while 데이터를 연산하는데 결과값이 나올때까지 반복해야 할때 사용한다 중단되는 조건이 정상적이지 않다면 무한하게 반복됨
let count =0;               //최초식
while(count !== 100){       //조건식
  count++;                  //증감식
	console.log(count)
}





//반복문 숫자 더하기
//내가 풀어본 코드
function sum(num) {
	let count = 0;
  for(let i =0; i<=num; i++){
    count = count + i
  }
  console.log(count)
}
sum()

//멘토님 코드
function sum(num){
	let count = 0;
  for(let i = 1; i <= num; i++ ){
   	count = count + 1;
  }
   return count;
}

sum()



//특정 문자열 세기
//참고해서 풀었음
function countLetter(str) {
	let count = 0;
  str = str.toLowerCase()
  for(let i=0; i<str.length; i++){
    if(str[i] === "a"){
      count++
    }
  }
  console.log(count)
}

countLetter("apple")

//멘토님 코드
function countLetter(str){
	let count =0;
  str = str.toLowerCase();
  console.log(str)
  for(let i = 0; i< str.length; i++){
    if(str[i] === "a"){
      count++;
    }
  }
  return count
}

countLetter("I am from korea");

//문자열 삽입
function makeNumber(num){
  let answer = "";
  
  for( let i = 1; i <= num; i ++ ){
    answer += i;
    if( i !== num){
    answer += "-";  
    }
    
  }
  return(answer)
}

makeNumber(10)

//홀수 문자열
function makeOdd(num){
	let answer ="";
  
  for(let i = 1; i<= num; i++){
    if(i % 2 !== 0){
			answer += i;     
    }
  }
  return answer;
}

makeOdd(12)

//가장큰수찾기
function bigNum(str) {
  
  let biggest = Number(str[0]);
  for (let i=1; i< str.length; i++){
    if(Number(str[i])>= biggest){
       biggest = Number(str[i])
    }
  }
  return biggest;
}

bigNum("123456");

