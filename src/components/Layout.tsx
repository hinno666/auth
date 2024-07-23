import { ReactNode } from "react";

import "normalize.css";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = (props: LayoutProps) => {
  return <div>{props.children}</div>;
};
