export const getDate = (date) => {
  const newdate = new Date(date);
  const yyyy = newdate.getFullYear();
  const mm = String(newdate.getMonth() + 1).padStart(2, "0");
  const dd = String(newdate.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
};

// const mm = mm.padStart( newdate.getMonth() + 1,"0")

// const DATE = new Date().toISOString().slice(0, 10);
