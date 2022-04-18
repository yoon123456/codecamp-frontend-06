// 여러 기능을 만들어두고서 가져다가 쓸 수 있게 기능을 만들어논 페이지
// 여기말고 다른페이지에 있는 날짜 기능 사용할것...!

export const getDate = () => {
  const aaa = new Date(el.createdAt);
  const year = aaa.getFullYear();
  const month = aaa.getMonth() + 1;
  const date = aaa.getDate();
  const result = `${year}-${month}-${date}`;
};
