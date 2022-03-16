//배열 안의 데이터들은 index번호를 가지며 index로 데이터에 접근할 수 있다
// 객체나 배열에서는 const 사용가능
let arr = [1, "안녕하세요", {"key":"value"}, ["2"]]

arr.push(2)
arr.unshift("hello")
arr.indexOf("안녕하세요")
arr.pop()
arr.includes(1)

console.log(arr)


const Obj = {
	name: "철수",
	age: 12,
  school:{name: "다람쥐초등학교"}
};

let a = "age"

Obj.name;
Obj[a];

Obj.age;
Obj["age"];


const Obj2 = {
	name: "철수",
	age: 12,
  school:{name: "다람쥐초등학교"}
};

//객체 데이터 추가/변경
Obj2.dog="별이"
Obj2.school.teacher ="훈이"
Ob2j.friends=["유리","맹구"]

//객체 데이터 삭제
delete Obj2.dog
delete Obj2.school.teacher

console.log(Obj2)
