import express from "express";
import { matchRoute } from "http/routes";
import { render } from "helpers/ssr";

const PORT = process.env.ME_FRONT_PORT || 8080;
const app = express();

app.use(express.static("public"));

app.get("*", (req, res) => {
  const matchedRoute = matchRoute(req.url);
  let state = {};
  if (matchedRoute) {
    const { redirect, content } = matchedRoute;
    if (redirect) {
      return res.redirect(redirect);
    }
    state = {
      ...state,
      content,
    };
  }
  const html = render(req, state);
  return res.send(html);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
