import Catalog from "app/components/Catalog";
import Category from "app/components/Category";
import Product from "app/components/Product";
import handler from "server/app/http/handler";

export const routes = [
  {
    path: "/catalog/:catalogKey",
    component: Catalog,
    handler,
  },
  {
    path: "/catalog/:catalogKey/category/:categoryKey",
    component: Category,
    handler,
  },
  {
    path: "/catalog/:catalogKey/category/:categoryKey/product/:productKey",
    component: Product,
    handler,
  },
];
