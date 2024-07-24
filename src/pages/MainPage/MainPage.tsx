import { useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { removeUser } from "../../store/slices/userSlice";
import { useAppDispatch } from "../../store/hooks";

export const MainPage = () => {
  const { isAuth, email } = useAuth();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    } else {
      navigate("/");
    }
  }, [isAuth]);

  return (
    <div>
      <h1>Main page</h1>
      <Button variant="contained" onClick={() => dispatch(removeUser())}>
        Log out
      </Button>{" "}
      <p>{`your email ${email?.toLowerCase()}`}</p>
    </div>
  );
};
