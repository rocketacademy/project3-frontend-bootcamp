import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SignUpPage = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (ev) => {
    let name = ev.target.name;
    let value = ev.target.value;

    setUser((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSignUp = () => {
    // Perform Auth here
    console.log("User signed up:", user);
  };

  return (
    <>
      <div className="flex flex-row justify-center h-[100vh] bg-fill-bg">
        <div className="relative flex flex-col justify-start p-[2rem] pt-[5rem] min-w-[30%]">
          <button
            className="absolute top-[1rem] left-[1rem] z-[100]"
            onClick={() => navigate("/")}
          ></button>
          <div className="flex flex-row justify-center w-[100%] pb-[2rem] lg:pb-[3rem]">
            <div className="w-[40%]">
              {/* Use the relative path from the public folder */}
              <img src="/apple-touch-icon-120x120.jpg" alt="UltraLock logo" />
            </div>
          </div>
          <p className="text-fuchsia-400 font-bold pb-[1rem]">Create Account</p>
          <form className="flex flex-col justify-between h-[80vh]">
            <div>
              <label className="text-sm font-semibold lg:text-[1rem] leading-[2rem] lg:leading-[2rem]">
                Email
              </label>
              <br />
              <input
                type="text"
                name="email"
                onChange={handleChange}
                value={user.email}
                autoComplete="off"
                placeholder="Insert your registered email"
                className="w-full h-[2rem] lg:h-[2.5rem] rounded-md border border-slate-400 bg-white/5  text-txtcolor-secondary shadow-sm ring-1 ring-inset ring-white/10  focus:ring-indigo-500 text-[1rem] mb-[1rem]"
              />
              <br />

              <label className="text-sm font-semibold lg:text-[1rem] leading-[2rem] lg:leading-[2rem]">
                Password
              </label>
              <br />
              <input
                type="password"
                name="password"
                onChange={handleChange}
                value={user.password}
                autoComplete="off"
                placeholder="Insert your password"
                className="w-full h-[2rem] lg:h-[2.5rem] rounded-md border border-slate-400 bg-white/5  text-txtcolor-secondary shadow-sm ring-1 ring-inset ring-white/10  focus:ring-indigo-500 text-[1rem]"
              />
            </div>
            <div className="">
              <input
                type="button"
                onClick={handleSignUp}
                value="SIGN UP"
                className="secondary-cta-btn"
              />
              <input
                type="button"
                onClick={() => navigate("/login")}
                value="EXISTING USER?"
                className="neutral-btn-one"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
