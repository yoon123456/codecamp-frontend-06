import Presenter from "./01.presenter";

// export default function Container() {
//   return (
//     <>
//       <Presenter child="철수" />
//     </>
//   );
// }
export default function Container() {
  return <>{Presenter({ child: "철수" })}</>;
}
