//-----------Libaries-----------//
import { useEffect, useState } from "react";
import { NavLink, useNavigate, useSearchParams } from "react-router-dom";
import { BACKEND_URL } from "../constants";
import axios from "axios";

//-----------Components-----------//
import InputText from "../Details/InputText";
import Button from "../Details/Button";
import ProfileImage from "../Details/ProfileImage.js";

//-----------Media-----------//
import logo from "../Images/Logo-GitHired.svg";
import uploadImage from "../Images/upload-image.png";
import defaultProfile from "../Images/defaultProfile.png";

export default function OnboardingPage() {
  const navigate = useNavigate();

  // Variables
  const [formInfo, setFormInfo] = useState({
    email: "email1234@email.com",
    firstName: "",
    lastName: "",
    profilePic: "picture",
    applicationsGoalCount: "",
    questionsGoalCount: "",
  });
  const [goals, setGoals] = useState(false);

  // Helper Functions
  const textChange = (e) => {
    const name = e.target.id;
    const value = e.target.value;
    setFormInfo((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const isFilled = () => {
    return formInfo.firstName.trim() !== "" && formInfo.lastName.trim() !== "";
  };

  // Retrieve token and email from JWT
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    console.log(queryParams);
    const tokenRetrieved = queryParams.get("token");
    console.log("Token Retrieved", tokenRetrieved);

    axios
      .get(`${BACKEND_URL}/auth/retrieve-email?token=${tokenRetrieved}`)
      .then((response) => {
        console.log(response);
        setFormInfo({ ...formInfo, email: response.data });
      });
  }, []);

  // Database Functions
  const handleImageUpload = () => {
    console.log("Image Uploaded");
  };

  const postNewUser = async () => {
    // const data = {
    //   email: "testing@rocketacademy.co",
    //   firstName: "Walter",
    //   lastName: "White",
    //   profilePic: "hello",
    //   applicationGoalCount: 5,
    //   questionsGoalCount: 10,
    // };
    console.log("Data sending", formInfo);

    try {
      const post = await axios.post(`${BACKEND_URL}/users/newUser`, formInfo);
      console.log("Post data", post);
      navigate("/dashboard");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex h-screen flex-row items-center justify-center bg-background">
      <main className="flex w-1/2 flex-col items-center justify-center">
        {goals ? (
          <>
            <form className="flex flex-col items-center justify-center gap-2">
              <h1 className="text-[32px] font-bold">
                Hello {formInfo.firstName}!
              </h1>
              <h1 className="text-lg">Tell us more about your goals 🎯</h1>
              <p className="">Weekly Application Goals:</p>
              <InputText
                id="applicationsGoalCount"
                placeholder="e.g. 5 applications/week"
                handleChange={textChange}
                value={formInfo.applicationsGoalCount}
              />
              <p className="">Weekly Practice Goals: </p>
              <InputText
                id="questionsGoalCount"
                placeholder="e.g. 10 questions/week"
                handleChange={textChange}
                value={formInfo.questionsGoalCount}
              />
            </form>
            <Button label="Next" handleClick={postNewUser} />
          </>
        ) : (
          <>
            <form className="flex flex-col items-center justify-center gap-2 text-black">
              <label htmlFor="profile-picture" style={{ cursor: "pointer" }}>
                <ProfileImage
                  src={
                    formInfo.profilePicture
                      ? formInfo.profilePicture
                      : defaultProfile
                  }
                  alt="Profile photo"
                />
              </label>
              <input
                type="file"
                id="profile-picture"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleImageUpload}
              />
              <p className="">First Name:</p>
              <InputText
                id="firstName"
                placeholder="e.g. Ah"
                handleChange={textChange}
                value={formInfo.firstName}
              />
              <p className="">Last Name: </p>
              <InputText
                id="lastName"
                placeholder="e.g. Boy"
                handleChange={textChange}
                value={formInfo.lastName}
              />
            </form>
            <Button
              label="Next"
              handleClick={setGoals}
              disabled={!isFilled()}
            />
          </>
        )}
      </main>
      <section className="flex h-full w-1/2 items-center justify-center bg-primary">
        <img src={logo} alt="Githired" />
      </section>
    </div>
  );
}
