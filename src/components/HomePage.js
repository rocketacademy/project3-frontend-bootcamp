import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import SearchIcon from "@mui/icons-material/Search";
import { AuthButton } from "./AuthButton";
import { useAuth0 } from "@auth0/auth0-react";

export function HomePage() {
  const [logIn, setLogIn] = useState(false); //default will be false, use a useEffect to change later on.
  const [avatar, setAvatar] = useState(process.env.REACT_APP_AVATAR);
  const { isAuthenticated, user } = useAuth0();

  useEffect(() => {
    isAuthenticated ? setLogIn(true) : setLogIn(false);
  }, [isAuthenticated]);

  return (
    <>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "#ADD8E6",
        }}
      >
        {logIn && (
          <>
            {user.name} && <SearchIcon /> && <Avatar />
          </>
        )}
        {!logIn && <AuthButton login={logIn} />}
      </nav>
      <img
        alt="placeholder banner"
        src="https://previews.123rf.com/images/virinka/virinka1901/virinka190100053/114916618-vector-banner-with-the-group-of-happy-people.jpg"
        style={{
          display: "flex",
          width: "99%",
          height: "30%",
          padding: "10px",
          alignItems: "center",
          justifyContent: "center",
        }}
      />
      <section className="about">
        <div>
          Welcome to Work Pal, the platform where you can rate and review your
          co-workers, and learn about the experiences of others in the
          workplace. Our mission is to create a space where employees can
          provide honest and professional feedback about their colleagues and
          work environments, and where job seekers can make informed decisions
          about potential employers. Our app is easy to use and designed to
          provide a safe and respectful environment for all users. Once you
          create a profile, you can rate your co-workers on various attributes
          such as work ethics, communication skills, and job performance. You
          can also write reviews that provide more in-depth insights into your
          experiences working with your co-workers. By joining Work Pal, you
          will have access to the experiences of thousands of employees and job
          seekers, giving you the opportunity to make informed decisions about
          your career prospects. Whether you are a job seeker looking for a new
          opportunity or an employee looking to improve your work environment,
          Work Pal is the right choice for you. So why wait? Sign up for Work
          Pal today and start rating and reviewing your co-workers. Let's work
          together to create a better workplace for everyone!
        </div>
      </section>
    </>
  );
}
