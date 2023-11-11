//-----------Libaries-----------//

//-----------Components-----------//
import Button from "../Components/Details/Button";
import InputText from "../Components/Details/InputText";
import RotatingWords from "../Components/HomePage/RotatingWords";

//-----------Media-----------//
import logo from "../Images/Logo-GitHired.svg";
import demo from "../Images/Mock-demo.png";
import "./HomePage.css";

export default function HomePage() {
  const rotatingText = ["Applications", "Reminders", "Questions", "Notes"];

  return (
    <div className=" flex h-screen flex-row items-center justify-center bg-background">
      <main className="flex w-1/2 flex-col items-center justify-center">
        <img src={logo} className="scale-125" alt="GitHired Logo" />
        <RotatingWords words={rotatingText} />
        <form>
          <InputText placeholder="Enter your email" />
          <Button label="Enter" />
        </form>
      </main>
      <article className=" flex h-full w-1/2 items-center justify-center bg-primary">
        <img
          className="max-h-[400px]"
          src={demo}
          alt="Illustration of GitHired's Dashboard"
        />
      </article>
      <footer></footer>
    </div>
  );
}
