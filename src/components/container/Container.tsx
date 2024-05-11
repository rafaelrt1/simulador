import React, { ReactNode } from "react";
import { SimulatorContainer } from "./ContainerCSS";

type ContainerProps = {
  children: ReactNode;
};

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <SimulatorContainer>{children}</SimulatorContainer>;
};

export { Container };