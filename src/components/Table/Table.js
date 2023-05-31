import React from "react";
import "./Table.css";
import { useTable, useSortBy } from "react-table";

const Table = () => {
  const data = React.useMemo(
    () => [
      {
        name: "Anon",
        postal: 552455,
        neighbourhood: "SERANGOON CENTRAL",
        year: 1993,
        phone: 97654323,
        isMale: true,
        isFirstTime: true,
        nationality: "Singaporean",
        race: "Chinese",
        maritalStatus: "Single",
      },
      {
        name: "Bnon",
        postal: 441244,
        neighbourhood: "TAMPINES WEST",
        year: 2000,
        phone: 98765483,
        isMale: true,
        isFirstTime: false,
        nationality: "Singaporean",
        race: "Indian",
        maritalStatus: "Married",
      },
      {
        name: "Cnon",
        postal: 262322,
        neighbourhood: "BUKIT BATOK",
        year: 1997,
        phone: 88776655,
        isMale: false,
        isFirstTime: true,
        nationality: "PR",
        race: "Malay",
        maritalStatus: "Single",
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
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
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy);

  return (
    <div className="table">
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  <h5>
                    {column.render("Header")}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? " ⬇"
                          : " ⬆"
                        : ""}
                    </span>
                  </h5>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>
                      <p>{cell.render("Cell")}</p>
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
