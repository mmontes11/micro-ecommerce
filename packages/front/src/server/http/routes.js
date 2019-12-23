import { matchPath } from "react-router-dom";

const routes = [
  {
    path: "/",
    exact: true,
    redirect: "/woman",
  },
  {
    path: "/woman",
    url: "http://localhost:9000/woman",
    content: "<p>Woman</p>",
  },
  {
    path: "/man",
    url: "http://localhost:9000/man",
    content: "<p>Man</p>",
  },
  {
    path: "/kids",
    url: "http://localhost:9000/kids",
    content: "<p>Kids</p>",
  },
];

export const matchRoute = pathname => routes.find(r => matchPath(pathname, r));
