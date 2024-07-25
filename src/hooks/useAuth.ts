import { useAppSelector } from "../store/hooks";

export const useAuth = () => {
  const { email, token, id, isAuth } = useAppSelector((state) => state.user);

  return {
    isAuth,
    email,
    token,
    id,
  };
};
