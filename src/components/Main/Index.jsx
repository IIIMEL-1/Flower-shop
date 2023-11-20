import React from "react";
import Background from "./Background/";
import Advantages from "./Advantages/";
import Catalog from "./Catalog/";
import Order from "./Order/";
import Description from "./Description/";
import style from "./Main.module.scss";

export default function Index() {
  return (
    <>
      <Background />
      <Advantages />
      <Catalog />
      <Order />
      <Description />
    </>
  );
}
