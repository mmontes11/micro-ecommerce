export const getHtmlContent = async url => {
  const res = await fetch(url);
  if (res.status >= 400) {
    throw new Error("Request error");
  }
  const text = await res.text();
  return text;
};
