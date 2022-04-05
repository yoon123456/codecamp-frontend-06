import axios from "axios";
import { useEffect, useState } from "react";

export default function QiuzOpenApiPage() {
  const [dog, setDog] = useState("");

  useEffect(() => {
    const url = async () => {
      const result = await axios.get("https://dog.ceo/api/breeds/image/random");
      setDog(result.data.message);
    };
    url();
  }, []);
  return (
    <div>
      <div>귀여운 강아지 사진{"><"}</div>
      <img src={dog} />
    </div>
  );
}
