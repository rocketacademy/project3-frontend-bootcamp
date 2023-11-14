//-----------Library-----------//
import { useState } from "react";
//-----------Components-----------//
import InputText from "../Details/InputText";
import Button from "../Details/Button";

const NewApplication = () => {
  const [formInfo, setFormInfo] = useState({
    company: "",
    jobTitle: "",
    location: "",
    description: "",
    color: "",
    status: "",
    applicationDate: "",
  });

  const textChange = (e) => {
    const name = e.target.id;
    const value = e.target.value;
    setFormInfo((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  return (
    <div>
      <button
        className="fixed bottom-6 right-6 h-[60px] w-[60px] rounded-full bg-primary text-[30px] leading-none shadow-md"
        onClick={() =>
          document.getElementById("new_application_modal").showModal()
        }
      >
        +
      </button>
      <dialog id="new_application_modal" className="modal  ">
        <div className="modal-box bg-slate-950 shadow-lg shadow-secondary">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2 ">
              ✕
            </button>
          </form>
          <form className="text-black">
            <h3 className=" text-lg font-bold ">Create New Application</h3>
            <div className="flex flex-row">
              <p className="py-4 ">Company:</p>
              <InputText placeholder="Rocket" />
            </div>
            <p className="py-4 ">Job Title:</p>
            <InputText placeholder="Software Engineer" />
            <p className="py-4 ">Location:</p>
            <InputText placeholder="Singapore" />
            <p className="py-4 ">Status:</p>
            <InputText placeholder="Applied" />
          </form>

          <Button label="Create" />
        </div>
      </dialog>
    </div>
  );
};

export default NewApplication;
