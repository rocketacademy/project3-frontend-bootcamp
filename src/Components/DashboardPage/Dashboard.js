//-----------Components-----------//

import ApplicationGroup from "./ApplicationGroup";

const Dashboard = () => {
  // Data to request from backend
  const apps = [
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

  // Filter out apps by status
  const wishlistApps = apps.filter((app) => app.status === "Wishlist");
  const appliedApps = apps.filter((app) => app.status === "Applied");
  const screeningApps = apps.filter((app) => app.status === "Screening");
  const interviewApps = apps.filter((app) => app.status === "Interview");
  const offerApps = apps.filter((app) => app.status === "Offer");
  const archiveApps = apps.filter((app) => app.status === "Archive");

  return (
    <main className="mt-[50px] flex flex-row">
      <ApplicationGroup header="Wishlist" apps={wishlistApps} />
      <ApplicationGroup header="Applied" apps={appliedApps} />
      <ApplicationGroup header="Screening" apps={screeningApps} />
      <ApplicationGroup header="Interview" apps={interviewApps} />
      <ApplicationGroup header="Offer" apps={offerApps} />
      <ApplicationGroup header="No Response" apps={archiveApps} />
      <ApplicationGroup header="Archive" apps={archiveApps} />
    </main>
  );
};

export default Dashboard;
