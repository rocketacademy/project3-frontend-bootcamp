import { NavLink } from "react-router-dom";

const Application = ({ application }) => {
  const { id, company, title, activity, color } = application;
  return (
    <NavLink
      to="/dashboard/edit"
      className="m-1 flex h-[80px] flex-row rounded-lg shadow-lg shadow-primary hover:translate-y-[-2px]"
    >
      {/* Color coding for applications */}
      <div
        className="w-[12px] rounded-l-lg"
        style={{ backgroundColor: `${color}` }}
      ></div>
      <div className="bg-text flex w-[200px] flex-col p-2">
        <p className="text-left text-[18px] leading-none text-black">
          {company}
        </p>
        <p className="text-left text-xs font-semibold text-black">{title}</p>
        <p className="mt-auto text-left text-[10px] leading-none text-primary">
          {activity}
        </p>
      </div>
      <div className="bg-text w-[40px] rounded-r-lg p-1 pr-2 text-end text-accent hover:text-primary">
        <button className="mb-auto text-[22px] leading-none">♥︎</button>
      </div>
    </NavLink>
  );
};

export default Application;
