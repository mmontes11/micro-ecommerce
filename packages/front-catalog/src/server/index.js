import express from "express";
import { render } from "helpers/ssr";

const PORT = process.env.FRONT_CATALOG_PORT || 9090;
const app = express();

app.use(express.static("public"));

app.get("*", (req, res) => {
  const html = render();
  return res.send(html);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
