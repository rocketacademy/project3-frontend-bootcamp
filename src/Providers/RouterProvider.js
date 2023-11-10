//-----------React-----------//
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//-----------Pages-----------//
import HomePage from "../Pages/HomePage";
import OnboardingPage from "../Pages/OnboardingPage";
import DashboardPage from "../Pages/DashboardPage";
import NewApplicationPage from "../Pages/NewApplicationPage";
import PracticePage from "../Pages/PracticePage";
import MetricsPage from "../Pages/MetricsPage";
import SettingsPage from "../Pages/SettingsPage";
import ContactsPage from "../Pages/ContactsPage";
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
  {
    path: "/dashboard",
    element: <DashboardPage />,
    children: [
      {
        path: "add",
        element: <NewApplicationPage />,
      },
    ],
  },
  {
    path: "/practice",
    element: <PracticePage />,
  },
  {
    path: "/metrics",
    element: <MetricsPage />,
  },
  {
    path: "/settings",
    element: <SettingsPage />,
  },
  {
    path: "/contacts",
    element: <ContactsPage />,
  },
]);

export default function Routes() {
  return <RouterProvider router={router} />;
}
