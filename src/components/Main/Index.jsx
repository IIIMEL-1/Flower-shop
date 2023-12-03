import React from "react";
import Background from "./Background/Index";
import Advantages from "./Advantages/Index";
import Catalog from "./Catalog/Index";
import Order from "./Order/Index";
import Description from "./Description/Index";
import style from "./Main.module.scss";

export default function Index() {
  return (
    <>
      <Background />
      <Catalog />
      <Advantages />
      <Order />
      <Description />
    </>
  );
}
