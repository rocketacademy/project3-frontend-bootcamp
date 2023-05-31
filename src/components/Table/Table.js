import React, { useEffect, useState } from "react";
import { useTable, useSortBy } from "react-table";
import { allColumns, groupingColumns } from "./columns";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

import "./Table.css";

const Table = ({ selector = "participants" }) => {
  const [tableColumns, setTableColumns] = useState([]);
  const [status, setStatus] = useState([]);
  const statuses = ["Not Contacted", "Contacted", "Confirmed"];

  const handleChange = (e, id) => {
    console.log("Selected: " + e.value + " at index " + id);
    setStatus((prevStatus) => ({
      ...prevStatus,
      [id]: e.value,
    }));
  };

  // Selecting table through selector that's passed in

  useEffect(() => {
    if (selector === "participants") {
      setTableColumns([...allColumns]);
    } else if (selector === "eventpage") {
      setTableColumns([
        {
          Header: "Status",
          Cell: ({ row }) => (
            <div>
              <Dropdown
                id={row.id}
                options={statuses}
                onChange={(e) => handleChange(e, row.id)}
                value={status[row.id]}
              />
            </div>
          ),
        },
        ...allColumns,
      ]);
    } else if (selector === "groupings") {
      setTableColumns([...groupingColumns]);
    }
    // eslint-disable-next-line
  }, []);

  // Dummy data for now

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

  // Defining columns

  const columns = React.useMemo(() => [...tableColumns], [tableColumns]);

  // Initialising table

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
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
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
