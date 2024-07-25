import { ReactNode } from "react";
import { Navbar } from "../Navbar/Navbar";

import classes from "./Layout.module.css";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = (props: LayoutProps) => {
  return (
    <>
      <Navbar />
      <div className={classes.layout__container}>{props.children}</div>
    </>
  );
};
