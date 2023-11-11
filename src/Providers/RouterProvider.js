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
    errorElement: <ErrorPage />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "add",
        element: <NewApplicationPage />,
        errorElement: <ErrorPage />,
      },
    ],
  },
  {
    path: "/practice",
    element: <PracticePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/metrics",
    element: <MetricsPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/settings",
    element: <SettingsPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/contacts",
    element: <ContactsPage />,
    errorElement: <ErrorPage />,
  },
]);

export default function Routes() {
  return <RouterProvider router={router} />;
}
