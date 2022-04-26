import { useEffect, useRef, useState } from "react";

export default function ImagePreloadPage() {
  const [imgTag, setImgTag] = useState<HTMLImageElement>();
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const img = new Image();
    img.src =
      "https://hips.hearstapps.com/countryliving.cdnds.net/17/47/2048x1024/landscape-1511194376-cavachon-puppy-christmas.jpg?resize=1200:*";
    img.onload = () => {
      setImgTag(img);
    };
  }, []);

  const onClickPreload = () => {
    if (imgTag) divRef.current?.appendChild(imgTag);
  };

  return (
    <div>
      <div ref={divRef}></div>
      <button onClick={onClickPreload}>이미지 프리로드</button>
    </div>
  );
}
