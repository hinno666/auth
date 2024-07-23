import { ReactNode } from "react";

import classes from "./AuthLayout.module.css";

interface AuthLayoutProps {
  children: ReactNode;
}

export const AuthLayout = (props: AuthLayoutProps) => {
  return <div className={classes.authLayout__container}>{props.children}</div>;
};
