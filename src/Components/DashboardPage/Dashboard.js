//-----------Libraries-----------//
import axios from "axios";
import { useEffect, useState } from "react";

//-----------Components-----------//
import ApplicationGroup from "./ApplicationGroup";

const Dashboard = () => {
  // Data to request from backend

  const [apps, setApps] = useState();
  const [appGroup, setAppGroup] = useState(null);

  const apps2 = [
    {
      id: "1",
      company: "Tesla",
      title: "Software Enigineer (Self-driving)",
      activity: "last activity 4 days ago",
      color: "#FD2D00",
      status: "Wishlist",
    },
    {
      id: "2",
      company: "Apple",
      title: "Senior Software Developer",
      activity: "last activity 7 days ago",
      color: "#A2A0A0",
      status: "Applied",
    },
    {
      id: "3",
      company: "OpenAI",
      title: "Prompt Engineer",
      activity: "last activity 14 days ago",
      color: "#0D692E",
      status: "Interview",
    },
    {
      id: "4",
      company: "Pixar",
      title: "Graphics Engine Developer",
      activity: "last activity 9 days ago",
      color: "#B23BFF",
      status: "Screening",
    },
    {
      id: "5",
      company: "Synapxe",
      title: "Business Analyst (Technical)",
      activity: "last activity 90 days ago",
      color: "#B23BFF",
      status: "Applied",
    },
    {
      id: "6",
      company: "Rocket Academy",
      title: "Bubble Tea Engineer",
      activity: "last activity 0 days ago",
      color: "#FD2D00",
      status: "Offer",
    },
    {
      id: "7",
      company: "Rocket Academy",
      title: "Fundamentals Coach",
      activity: "last activity 0 days ago",
      color: "#FD2D00",
      status: "Applied",
    },
  ];

  useEffect(() => {
    axios
      .get("http://localhost:8080/users/1/applications")
      .then((response) => {
        console.log("Pulled Data: ", response.data.applications);
        // Assuming response.data is an array with at least one item
        setApps(response.data.applications);

        // Grouping apps by status after setting 'apps'
        const groupedApps = {
          Wishlist: response.data.applications.filter(
            (app) => app.applicationStatus.status === "Wishlist",
          ),
          Applied: response.data.applications.filter(
            (app) => app.applicationStatus.status === "Applied",
          ),
          Screening: response.data.applications.filter(
            (app) => app.applicationStatus.status === "Screening",
          ),
          Interview: response.data.applications.filter(
            (app) => app.applicationStatus.status === "Interview",
          ),
          Offer: response.data.applications.filter(
            (app) => app.applicationStatus.status === "Offer",
          ),
          Archive: response.data.applications.filter(
            (app) => app.applicationStatus.status === "Archive",
          ),
        };
        setAppGroup(groupedApps);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <main className="mt-[50px] flex flex-row">
      {console.log("Apps", apps)}
      {console.log("AppGroups", appGroup)}

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
