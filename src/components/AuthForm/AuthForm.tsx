import { Button, TextField } from "@mui/material";
import { useState } from "react";

import classes from "./AuthForm.module.css";

interface IAuthFormProps {
  title: string;
  handleClick: (email: string, password: string) => void;
}

export const AuthForm = ({ title, handleClick }: IAuthFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form className={classes.form}>
      <TextField
        label="Email"
        name="email"
        defaultValue=""
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        name="password"
        defaultValue=""
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button variant="contained" onClick={() => handleClick(email, password)}>
        {title}
      </Button>
    </form>
  );
};
