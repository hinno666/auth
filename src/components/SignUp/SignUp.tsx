import {
  createUserWithEmailAndPassword,
  getAuth,
} from "firebase/auth";
import { AuthForm } from "../AuthForm/AuthForm";
import { setUser } from "../../store/slices/userSlice";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks";

export const SignUp = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleRegister = (email: string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        user.getIdToken().then((token) => {
          dispatch(
            setUser({
              email: user.email,
              id: user.uid,
              token: token,
            })
          );
          navigate("/");
        });
      })
      .catch((error) => console.error(error));
  };

  return <AuthForm title="register" handleClick={handleRegister} />;
};
