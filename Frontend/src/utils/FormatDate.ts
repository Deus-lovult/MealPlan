export const formatDate = (yyyymmdd: string) => {
  if (!yyyymmdd) return "";
  const year = yyyymmdd.slice(0, 4);
  const month = yyyymmdd.slice(4, 6);
  const day = yyyymmdd.slice(6, 8);
  return `${year}年${month}月${day}日`;
};
