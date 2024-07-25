import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { AuthForm } from "../AuthForm/AuthForm";
import { setUser } from "../../store/slices/userSlice";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks";

export const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        user.getIdToken().then((token) => {
          dispatch(
            setUser({
              email: user.email,
              id: user.uid,
              token: token,
              isAuth: true,
            })
          );
          navigate("/");
        });
      })
      .catch((error) => console.error(error));
  };

  return <AuthForm title="Sign in" handleClick={handleLogin} />;
};
