import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import axios from "axios";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
export default function ForumCreate({ type }) {
  const [, setErrorMessage] = useOutletContext();
  const [categoryOptions, setCategoryOptions] = useState([]);

  useEffect(() => {
    const getCategoriesOption = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/categories/all`
        );
        setCategoryOptions(
          data.map((category) => {
            return { value: category.name, label: category.name };
          })
        );
      } catch (error) {
        setErrorMessage(error.message);
      }
    };
    if (type === "post") {
      getCategoriesOption();
    } else {
      setErrorMessage("Wrong Type for create form.");
    }
  }, [type, setErrorMessage]);
  return (
    <div>
      <div className="flex items-center py-5 space-x-5">
        <ArrowBackOutlinedIcon fontSize="large" />
        <b className="text-2xl">Create {type}:</b>
      </div>
      <div className="artboard phone-2 border-2 border-neutral rounded-xl">
        <div className="space-x-5 flex items-center p-5">
          <label className="text-xl">Title:</label>
          <input className="input input-bordered border-2 w-full" />
        </div>
      </div>
    </div>
  );
}
