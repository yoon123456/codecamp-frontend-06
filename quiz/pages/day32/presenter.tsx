import { memo } from "react";

function PresenterPage() {
  console.log("프리젠터가 렌더링 됩니다!!!");
  return (
    <div>
      <div>=========================</div>
      <h1>프레젠터입니당</h1>
      <div>=========================</div>
    </div>
  );
}

export default memo(PresenterPage);
