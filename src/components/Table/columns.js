// Columns for Participants Page

const allColumns = [
  { Header: "Name", accessor: "name" },
  { Header: "Postal Code", accessor: "postalCode" },
  { Header: "Neighbourhood", accessor: "neighbourhood" },
  {
    Header: "Age",
    accessor: "year",
    Cell: (content) => {
      return 2023 - content.value;
    },
  },
  { Header: "Phone No.", accessor: "mobile" },
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
  {
    Header: "Neighbourhood",
    accessor: "neighbourhood",
    Cell: ({ row }) => {
      if (row.original.mobile) {
        return row.original.neighbourhood;
      } else {
        return <p></p>;
      }
    },
  },
  {
    Header: "Age",
    accessor: "year",
    Cell: ({ row }) => {
      if (row.original.mobile) {
        return 2023 - row.original.year;
      } else {
        return <p></p>;
      }
    },
  },
  {
    Header: "Sex",
    accessor: "isMale",
    sortType: "basic",
    Cell: ({ row }) => {
      if (row.original.mobile) {
        return row.original.isMale ? "M" : "F";
      } else {
        return <p></p>;
      }
    },
  },
  {
    Header: "Race",
    accessor: "race",
    Cell: ({ row }) => {
      if (row.original.mobile) {
        return row.original.race;
      } else {
        return <p></p>;
      }
    },
  },
];

const facilitatorColumns = [{ Header: "Facilitator Name", accessor: "name" }];

export { allColumns, groupingColumns, facilitatorColumns };
