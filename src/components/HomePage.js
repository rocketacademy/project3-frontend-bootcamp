import React, { useEffect, useState } from "react";
import { NavBar } from "./NavBar";
import { useAuth0 } from "@auth0/auth0-react";

export function HomePage() {
  const [logIn, setLogIn] = useState(false);
  const [avatar, setAvatar] = useState(process.env.REACT_APP_AVATAR);
  const { isAuthenticated } = useAuth0();

  useEffect(() => {
    isAuthenticated ? setLogIn(true) : setLogIn(false);
  }, [isAuthenticated]);

  return (
    <>
      <div className="main">
        <img
          alt="placeholder banner"
          src={process.env.PUBLIC_URL + "/banner-image.jpg"}
          style={{
            margin: "70px 0px 0px",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        />
      </div>

      <section>
        <div className="about">
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
