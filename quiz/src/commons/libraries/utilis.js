// 여러 기능을 만들어두고서 가져다가 쓸 수 있게 기능을 만들어논 페이지
export const getDate = (date) => {
    const newdate = new Date(date)
    const yyyy = newdate.getFullYear()
    const mm = newdate.getMonth() + 1
    const dd = newdate.getDate()
    return `${yyyy}-${mm}-${dd}`
}