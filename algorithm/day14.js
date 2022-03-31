/*두 개 뽑아서 더하기
문제 설명
정수 배열 numbers가 주어집니다. 
numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.

제한사항
numbers의 길이는 2 이상 100 이하입니다.
numbers의 모든 수는 0 이상 100 이하입니다.
입출력 예
  numbers	   result
[2,1,3,4,1]	[2,3,4,5,6,7]
[5,0,2,7]	[2,5,7,9,12] */

// 멘토님 풀이
function solution(numbers) {
  let answer = [];
  // 첫번째 반복문에서 가져오는 숫자는 첫번째 숫자로 기준을 잡는다
  for (let i = 0; i < numbers.length; i++) {
    // 두번째 반복문에서는 두번째 숫자로 기준을 잡는다
    for (let k = i + 1; k < numbers.length; k++) {
      const sum = numbers[i] + numbers[k];
      if (answer.includes(sum) === false) {
        answer.push(sum);
      }
    }
  }
  return answer.sort((a, b) => a - b);
}

/* 
*Set 문법
1. 고유한 데이터만 받아올 수 있다(중복되지 않는 데이터)
2. 겉은 배열 형태이지만, 타입은 객체형태
3. 반복되는 데이터를 지운다 큰데이터에 적합한 문법

*new 문법
1. 뒤에 들어오는 데이터를 새로운 객체 형태로 리턴

*타입을 확인하는 문법
typeof arr      'object'
typeof []       'object'

*배열이 맞는지 확인하는 연산자 boolean형태로 반환된다
Array.isArray({})        false
Array.isArray([])        true


const arr = new Set()
Set의 궁극적인 목적은 중복되는 값을 지우는것이다

*데이터 추가
arr.add(1)
arr.add(2)

*데이터 반복
arr.forEach(el=>{
  console.log(el)
})

*데이터 조회
arr.has(1)
arr.has(3)

*데이터 삭제
arr.delete(1)
arr.delete(3)

*데이터 초기화
arr.clear()

*set을 배열로 변환
1. Array.from(arr)
2. spread
const answer=[...arr]
answer;
Array.isArray(answer)

*spread 전개구분 연산자
const arr2 = [1,2,3];
const arr3 = [...arr2];
arr[0] = 4

arr2     //[4,2,3]
arr3     //[1,2,3]

*/

// 멘토님 다른 풀이
function solution(numbers) {
  const answer = new Set();
  numbers.forEach((num1, i) => {
    numbers.slice(i + 1).forEach((num2) => {
      const sum = num1 + num2;
      answer.add(sum);
    });
  });
  return [...answer].sort((a, b) => a - b);
}
