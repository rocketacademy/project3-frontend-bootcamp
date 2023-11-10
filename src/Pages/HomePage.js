//-----------Libaries-----------//
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

//-----------Components-----------//
import Button from "../Components/Details/Button";
import InputText from "../Components/Details/InputText";
import RotatingWords from "../Components/Home/RotatingWords";

//-----------Media-----------//
import logo from "../Images/Logo-GitHired.svg";
import demo from "../Images/Mock-demo.png";

export default function HomePage() {
  const rotatingText = ["Applications", "Reminders", "Questions", "Notes"];

  return (
    <motion.div
      className=" flex h-screen flex-row items-center justify-center bg-background"
      initial={{ opacity: 0.2, scale: 1 }} // Initial state (hidden and scaled down)
      animate={{ opacity: 1, scale: 1 }} // Final state (visible and at full scale)
      transition={{
        duration: 0.8,
        ease: "easeInOut",
      }}
    >
      <main className="flex w-1/2 flex-col items-center justify-center">
        <img src={logo} className="scale-125" alt="GitHired Logo" />
        <RotatingWords words={rotatingText} />
        <form className="mb-4">
          <InputText placeholder="Enter your email" />
          <Button label="Enter" />
        </form>
        <NavLink to="/dashboard">Try our App</NavLink>
      </main>
      <article className=" flex h-full w-1/2 items-center justify-center bg-primary">
        <img
          className="max-h-[400px]"
          src={demo}
          alt="Illustration of GitHired's Dashboard"
        />
      </article>
      <footer></footer>
    </motion.div>
  );
}
