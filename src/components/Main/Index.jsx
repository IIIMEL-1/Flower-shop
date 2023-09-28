import React from "react";
import Background from "./Background/Index.jsx";
import Advantages from "./Advantages/Index.jsx";
import Catalog from "./Catalog/Index.jsx";
import Order from "./Order/Index.jsx";
import Description from "./Description/Index.jsx";
import style from "./Main.module.scss";

export default function Index() {
  return (
    <main>
      <Background />
      <Advantages />
      <Catalog />
      <Order />
      <Description />
    </main>
  );
}
