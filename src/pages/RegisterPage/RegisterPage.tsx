import { Link } from "react-router-dom";
import { SignUp } from "../../components/SignUp/SignUp";

import classes from "./RegisterPage.module.css";

export const RegisterPage = () => {
  return (
    <div className={classes.authForm}>
      <h1>Register</h1>
      <SignUp />
      <p>
        Already have an account? <Link to="/login">Sign in</Link>
      </p>
    </div>
  );
};
