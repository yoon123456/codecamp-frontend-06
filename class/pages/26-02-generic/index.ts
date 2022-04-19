import { useState } from "react";

// 1. 문자타입
const getString = (arg: string): string => {
  return arg;
};
const result1 = getString("철수");

// 2. 숫자타입
const getNumber = (arg: number): number => {
  return arg;
};
const result2 = getNumber(9);

// 3. any 타입
const getAny2 = (arg: any) => {
  return arg;
};
const result3_1 = getAny2("철수");
const result3_2 = getAny2(9);
const result3_3 = getAny2(true);

// 4. any 타입 2
const getAnys = (arg1: any, arg2: any, arg3: any): [any, any, any] => {
  return [arg3, arg2, arg1];
};
const result4 = getAnys("철수", "다람쥐초등학교", 9);

// 5. generic 타입 (들어온 타입을 그대로 사용)
function getGeneric<Mytype>(arg: Mytype): Mytype {
  return arg;
}
const aaa: string = "철수";
const bbb: number = 9;
const aaa: boolean = true;

const result5_1 = getGeneric("철수");
// 타입이 string이기 때문에 그대로 string

const result5_2 = getGeneric(9);
// 타입이 number이기 때문에 그대로 number

const result5_3 = getGeneric(true);
// 타입이 boolean이기 때문에 그대로 boolean

// 6. generic 타입 2

function getGenerics<Mytype1, Mytype2, Mytype3>(
  arg1: Mytype1,
  arg2: Mytype2,
  arg3: Mytype3
): [Mytype3, Mytype2, Mytype1] {
  return [arg3, arg2, arg1];
}

const result6 = getGenerics("철수", "다람쥐초등학교", 9);

// 6번과 7번은 같다 단지 type의 이름만 바꿨을 뿐!

// 7. generic - 축약 1

function getGenericsT<T1, T2, T3>(arg1: T1, arg2: T2, arg3: T3): [T3, T2, T1] {
  return [arg3, arg2, arg1];
}

const result7 = getGenericsT("철수", "다람쥐초등학교", 9);

// 7. generic - 축약 2

function getGenericsTUV<T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] {
  return [arg3, arg2, arg1];
}


const result8 = getGenericsTUV<string, string, number>(
  "철수",
  "다람쥐초등학교",
  9
);

// 9.useState에서의 generic
const [school, setSchool] = useState<string>('다람쥐초등학교')

const apple: number = 8;
console.log(apple);

// 10.화살표함수에서의 generic
cosnt getGenericsTUV = <T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] => {
    return [arg3, arg2, arg1];
  }