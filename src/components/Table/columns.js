// Columns for Participants Page

const allColumns = [
  { Header: "Name", accessor: "name" },
  { Header: "Postal Code", accessor: "postal" },
  { Header: "Neighbourhood", accessor: "neighbourhood" },
  {
    Header: "Age",
    accessor: "year",
    Cell: (content) => {
      return 2023 - content.value;
    },
  },
  { Header: "Phone No.", accessor: "phone" },
  {
    Header: "Sex",
    accessor: "isMale",
    sortType: "basic",
    Cell: (content) => {
      return content.value ? "M" : "F";
    },
  },
  {
    Header: "First Timer",
    accessor: "isFirstTime",
    sortType: "basic",
    Cell: (content) => {
      return content.value ? "Yes" : "No";
    },
  },
  { Header: "Nationality", accessor: "nationality" },
  { Header: "Race", accessor: "race" },
  { Header: "Marital Status", accessor: "maritalStatus" },
];

// Columns for Groupings Page

const groupingColumns = [
  { Header: "Name", accessor: "name" },
  { Header: "Neighbourhood", accessor: "neighbourhood" },
  {
    Header: "Age",
    accessor: "year",
    Cell: (content) => {
      return 2023 - content.value;
    },
  },
  {
    Header: "Sex",
    accessor: "isMale",
    sortType: "basic",
    Cell: (content) => {
      return content.value ? "M" : "F";
    },
  },
  { Header: "Race", accessor: "race" },
];

export { allColumns, groupingColumns };
