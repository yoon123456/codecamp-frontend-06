//오전에 병원가서 못풀어봄,,

/* 자릿수 더하기
문제 설명
자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

제한사항
N의 범위 : 100,000,000 이하의 자연수*/

//멘토님 풀이
//숫자를 문자열로 바꿔주어야 인덱스값을 가져올 수 있다
//인덱스 값으로 접근하기 위해 문자열 타입을 변환시킨다
function solution(n){
    var answer = 0;
    //인덱스 값으로 접근하기 위해 문자열 타입으로 변환
    n = String(n);
    for(let i=0; i<n.length; i++){
        answer += Number(n[i]);
    }
    return answer;
}

//멘토님 풀이2
// n.toString() 하고 String(n) 둘다 문자열 타입으로 변환시킨다
// n.toString() 사용을 위해선 변수에 담아주어야 사용이 가능하다.
function solution(n){
    //배열로 만들기 위해 숫자를 문자열로 변환 tostring은 변수에 담아야함
    const answer = n.toString()
                    .split("")
                    .reduce((acc,cur)=>{
                        return acc+Number(cur);
                    },0);
    return answer;
}

//reduce의 초기값이 없을 경우 return값을 숫자로 변화해주어야함
function solution(n){
    //배열로 만들기 위해 숫자를 문자열로 변환 tostring은 변수에 담아야함
    const answer = n.toString()
                    .split("")
                    .reduce((acc,cur)=>{
                        return Number(acc)+Number(cur);
                    });
    return answer;
}

/* x만큼 간격이 있는 n개의 숫자
문제 설명
함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다. 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.

제한 조건
x는 -10000000 이상, 10000000 이하인 정수입니다.
n은 1000 이하인 자연수입니다.*/

//멘토님 풀이
function solution(x, n) {
    const answer = [];
    for(let i =1; i <= n; i++ ){
        answer.push(i * x);
    }
    return answer;
}

//멘토님 풀이 2
//map을 이용한 풀이 map사용을 위해선 배열이 필요하다
//new Arraay(n)를 통해 배열갯수만큼 비어있는 새 배열을 만듬
//.fill(1)로 배열안에 1로 채워줌
// map을 사용했는데 undefined가 나온다면 return확인할것
//new Array(n).fill(1) 이렇게하면 숫자를 배열로 만드는것이 쉽다
function solution(x, n) {
    const answer = new Array(n)
                    .fill(1)
                    .map( ( num ,i ) => {
                        return (num + i) * x                        
                    })
   return answer;
}