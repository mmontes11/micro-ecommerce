import Catalog from "app/components/catalog/Catalog";
import Category from "app/components/catalog/Category";
import Product from "app/components/catalog/Product";
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
