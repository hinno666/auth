import { useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export const MainPage = () => {
  const { isAuth } = useAuth();
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
    </div>
  );
};
