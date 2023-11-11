//-----------React-----------//
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//-----------Pages-----------//
import HomePage from "../Pages/HomePage";
import OnboardingPage from "../Pages/OnboardingPage";
import DashboardPage from "../Pages/DashboardPage";
import NewApplicationPage from "../Pages/NewApplicationsPage";
import PracticePage from "../Pages/PracticePagePage";
import MetricsPage from "../Pages/MetricsPagee";
import ContactsPage from "../Pages/ContactsPage";
import ErrorPage from "../Pages/ErrorPage";
import SettingsPage from "../Pages/SettingsPage";

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
