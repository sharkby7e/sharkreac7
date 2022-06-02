import React from "react";
import PortItem from "./PortItem";

const Container = () => {
  return (
    <div class="justify-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <PortItem />
      <PortItem />
      <PortItem />
      <PortItem />
      <PortItem />
      <PortItem />
    </div>
  );
};
export default Container;
