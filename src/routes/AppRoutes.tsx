import {
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { FC } from "react";
import { Layout } from "../components/Layout";
import { MainPage, NotFoundPage } from "../pages";

const MainLayout: FC = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<MainLayout />}>
      <Route path="/" element={<MainPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

export const AppRoutes = () => {
  return <RouterProvider router={router} />;
};
