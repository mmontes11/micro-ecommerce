import { render } from "server/helpers/ssr";

const handler = (req, res) => {
  const { html, context } = render(req);
  const status = context && context.status;
  if (status) {
    return res.sendStatus(status);
  }
  return res.send(html);
};

export default handler;
