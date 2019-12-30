import { render } from "helpers/ssr";

const handle = (req, res) => {
  const html = render();
  return res.send(html);
};

export default handle;
