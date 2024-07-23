import { TextField } from "@mui/material";
import { Link } from "react-router-dom";

import classes from "./LoginPage.module.css";

export const LoginPage = () => {
  return (
    <>
      <h1>Login</h1>
      <form className={classes.authForm}>
        <TextField label="Email" name="email" defaultValue="" />
        <TextField label="Password" name="password" defaultValue="" />
      </form>
      <p>
        or <Link to="/register">register</Link>
      </p>
    </>
  );
};
