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

const MainLayout: FC = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

const isAuthenticated = () => {
  return false;
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route
        path="/"
        element={
          isAuthenticated() ? <MainLayout /> : <Navigate to="/login" replace />
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
