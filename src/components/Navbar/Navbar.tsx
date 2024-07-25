import { Button } from "@mui/material";
import { removeUser } from "../../store/slices/userSlice";
import { useAppDispatch } from "../../store/hooks";

import classes from "./Navbar.module.css";

export const Navbar = () => {
  const dispatch = useAppDispatch();

  return (
    <div className={classes.navbar}>
      <div className={classes.navbar__container}>
        <Button
          variant="contained"
          onClick={() => dispatch(removeUser())}
          sx={{ marginLeft: "auto", display: "flex" }}
        >
          Log out
        </Button>
      </div>
    </div>
  );
};
