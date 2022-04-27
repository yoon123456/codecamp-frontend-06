import { KeyboardEvent, useState } from "react";

export default function HashTag() {
  const [hashtag, setHashtag] = useState<string>("");
  const [hashArr, setHashArr] = useState<string[]>([]);

  const onKeyUpHash = (event: KeyboardEvent<HTMLInputElement>) => {
    // 키보드이벤트 키코드 확인하기
    if (event.keyCode === 32 && event.target.value !== " ") {
      setHashArr([...hashArr, "#" + event.target.value]);
    }
  };
  return (
    <div>
      <span>
        {hashArr.map((el, idx) => (
          <span key={idx}>{el}</span>
        ))}
      </span>
      <input type="text" onKeyUp={onKeyUpHash} />
    </div>
  );
}

// 삭제할때는 splice 적용하기
