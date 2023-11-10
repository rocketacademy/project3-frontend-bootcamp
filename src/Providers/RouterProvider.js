//-----------React-----------//
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//-----------Pages-----------//
import HomePage from "../Pages/HomePage";
import OnboardingPage from "../Pages/OnboardingPage";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/onboarding",
    element: <OnboardingPage />,
  },
]);

export default function Routes() {
  return <RouterProvider router={router} />;
}
