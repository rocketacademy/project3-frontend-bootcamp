import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import axios from "axios";
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
  return <div></div>;
}
