import React, { useEffect, useState } from "react";
import { Input } from "antd";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Link, useParams } from "react-router-dom";

export default function SearchBar({ handleSearchParams }) {
  const { Search } = Input;
  let { user_id } = useParams();

  // const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();

  const handleSearch = (value) => {
    handleSearchParams(value);
    setSearchParams({ search: value });
  };

  useEffect(() => {
    if (searchParams) {
      console.log(searchParams);
      console.log(searchParams.get("search"));
    }
  }, [searchParams]);

  return (
    <Search
      placeholder="What are you looking for?"
      allowClear
      enterButton="Search"
      size="large"
      style={{ width: "90%", margin: "20px 50px" }}
      onSearch={handleSearch}
      defaultValue={searchParams.get("search")}
    />
  );
}
