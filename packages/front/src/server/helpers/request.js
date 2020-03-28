export const getHtmlContent = async (url) => {
  const res = await fetch(url);
  if (res.status >= 400) {
    throw {
      type: "NetworkError",
      status: res.status,
    };
  }
  const text = await res.text();
  return text;
};
