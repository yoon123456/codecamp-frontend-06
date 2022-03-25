import { type } from "os"

export default function TypescriptPage(){
    
    interface IProfile{
        name : string
        age : number
        school : string
        hobby? : string
    }
    // 1. pick type 원하는것만 고르기 
    type Mytype1 = Pick<IProfile, "name" | "age">

    //2. Omit type 원하는것만 제거하기
    type Mytype2 = Omit<IProfile, "school">

    //3. Partial type 물음표가 모두 붙는다
    type Mytype3 = Partial<IProfile>

    //4. Required type 모든것이 필수 요소가 된다
    type Mytype4 = Required<IProfile>

    //5. Record type 
    type ZZZ = "aaa" | "qqq" | "rrr"  //Union type 합집합의 개념

    // let apple : ZZZ
    // apple = "qqq"  // ZZZ에서 정해논것만 할당 가능

    type Mytype5 = Record<ZZZ,IProfile> //key 와 value가 생긴다

    //===========추가 (선언 병합)  (type vs interface) ==========/
    interface IProfile{
        candy : number
    }

    let profile : IProfile
    profile={
        candy:3,
        age: 10,
        hobby:"드라이브"
    }







    return <div>타입스크립트 연습하기!!</div>
}