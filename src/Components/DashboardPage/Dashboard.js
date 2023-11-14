//-----------Libraries-----------//
import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../../constants";

//-----------Components-----------//
import ApplicationGroup from "./ApplicationGroup";

const Dashboard = () => {
  const [appGroup, setAppGroup] = useState(null);

  // Retrieve data from the backend to populate dashboard
  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/users/1/applications`)
      .then((response) => {
        console.log("Backend Data Pulled: ", response.data.applications);
        const data = response.data.applications;
        const statusArray = [
          "Wishlist",
          "Applied",
          "Screening",
          "Interview",
          "Offer",
          "Archive",
        ];

        // Grouping applications in "data" by status
        const groupedApps = {};

        statusArray.forEach((status) => {
          groupedApps[status] = data.filter(
            (app) => app.applicationStatus.status === status,
          );
        });

        setAppGroup(groupedApps);
        console.log("Grouped Apps", appGroup);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <main className="mt-[50px] flex flex-row">
      <ApplicationGroup header="Wishlist" apps={appGroup?.Wishlist || []} />
      <ApplicationGroup header="Applied" apps={appGroup?.Applied || []} />
      <ApplicationGroup header="Screening" apps={appGroup?.Screening || []} />
      <ApplicationGroup header="Interview" apps={appGroup?.Interview || []} />
      <ApplicationGroup header="Offer" apps={appGroup?.Offer || []} />
      <ApplicationGroup header="No Response" apps={appGroup?.Archive || []} />
      <ApplicationGroup header="Archive" apps={appGroup?.Archive || []} />
    </main>
  );
};

export default Dashboard;
