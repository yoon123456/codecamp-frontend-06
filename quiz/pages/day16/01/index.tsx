import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

export default function ChangePage() {
  const [isChange, setIsChange] = useState(false);
  const roter = useRouter();

  useEffect(() => {
    alert("Rendered!!");
  }, []);

  const onClickChange = () => {
    setIsChange(true);
  };
  useEffect(() => {
    alert("Changed!!");
  }, [isChange]);

  const onClickMove = () => {
    roter.push("/");
  };
  useEffect(() => {
    return () => {
      alert("Bye!!");
    };
  }, []);

  return (
    <div>
      <button onClick={onClickChange}>
        {isChange === true ? "true" : "변경"}
      </button>
      <button onClick={onClickMove}>이동</button>
    </div>
  );
}
