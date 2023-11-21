import { NavLink } from "react-router-dom";

const Application = ({ application }) => {
  const { id, companyName, jobPosition, updatedAt, color, isBookmarked } =
    application;

  const getLastUpdatedText = (updatedAt) => {
    const updatedDate = new Date(updatedAt);
    const currDate = new Date();

    const minutesAgo = Math.floor((currDate - updatedDate) / (1000 * 60));
    const hoursAgo = Math.floor(minutesAgo / 60);
    const daysAgo = Math.floor(hoursAgo / 24);

    if (minutesAgo < 60) {
      return `Last updated: ${minutesAgo} minutes ago`;
    } else if (hoursAgo < 24) {
      return `Last updated: ${hoursAgo} hours ago`;
    } else {
      return `Last updated: ${daysAgo} days ago`;
    }
  };

  return (
    <NavLink
      to={`/dashboard/edit/${id}/notes`}
      className="m-1 flex h-[80px] flex-row rounded-lg shadow-lg shadow-primary hover:translate-y-[-2px]"
    >
      {/* Color coding for applications */}
      <div
        className="w-[12px] rounded-l-lg"
        style={{ backgroundColor: `${color}` }}
      ></div>
      <div className="flex w-[200px] flex-col bg-text p-2">
        <p className="text-left text-[18px] leading-none text-black">
          {companyName}
        </p>
        <p className="text-left text-xs font-semibold text-black">
          {jobPosition}
        </p>
        <p className="mt-auto text-left text-[9px] leading-none text-primary">
          {getLastUpdatedText(updatedAt)}
        </p>
      </div>
      <div
        className={`${
          isBookmarked ? "text-red-500" : "text-accent"
        } w-[40px] rounded-r-lg bg-text p-1 pr-2 text-end`}
      >
        <button className="mb-auto text-[22px] leading-none">♥︎</button>
      </div>
    </NavLink>
  );
};

export default Application;
