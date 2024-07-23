import {
  Navigate,
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { FC } from "react";
import { Layout } from "../components/Layout";
import { LoginPage, MainPage, NotFoundPage, RegisterPage } from "../pages";
import { AuthLayout } from "../components/AuthLayout/AuthLayout";

const MainLayoutPage: FC = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

const AuthLayoutPage: FC = () => {
  return (
    <AuthLayout>
      <Outlet />
    </AuthLayout>
  );
};

const isAuthenticated = () => {
  return false;
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<AuthLayoutPage />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
      <Route
        path=""
        element={
          isAuthenticated() ? <MainLayoutPage /> : <Navigate to="/login" replace />
        }
      >
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </>
  )
);

export const AppRoutes = () => {
  return <RouterProvider router={router} />;
};
