import express from "express";
import { matchRoute } from "http/routes";
import { render } from "helpers/ssr";

const PORT = process.env.NODE_PORT || 8080;
const app = express();

app.use(express.static("public"));

app.get("*", (req, res) => {
  const matchedRoute = matchRoute(req.url);
  let content;
  if (matchedRoute) {
    const { redirect, content: routeContent } = matchedRoute;
    if (redirect) {
      return res.redirect(redirect);
    }
    content = routeContent;
  }
  const html = render(req, content);
  return res.send(html);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
