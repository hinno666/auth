import { Link } from "react-router-dom";

import classes from "./LoginPage.module.css";
import { Login } from "../../components/Login/Login";

export const LoginPage = () => {
  return (
    <div className={classes.authForm}>
      <h1>Login</h1>
      <Login />
      <p>
        or <Link to="/register">register</Link>
      </p>
    </div>
  );
};
