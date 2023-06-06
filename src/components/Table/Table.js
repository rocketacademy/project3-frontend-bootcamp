import React, { useEffect, useState } from "react";
import { useTable, useSortBy } from "react-table";
import { allColumns, groupingColumns } from "./columns";
import Select from "react-select";

import "./Table.css";

const Table = ({ selector = "participants", tableData }) => {
  const [columnState, setColumnState] = useState([]);
  const [status, setStatus] = useState({});
  const statuses = [
    { value: "not-contacted", label: "Not Contacted" },
    { value: "contacted", label: "Contacted" },
    { value: "to-reject", label: "To Reject" },
    { value: "rejected", label: "Rejected" },
    { value: "confirmed", label: "Confirmed" },
    { value: "not-coming", label: "Not Coming" },
    { value: "prompted", label: "Prompted" },
    { value: "ghosted", label: "Ghosted" },
  ];

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
      setColumnState([...allColumns]);
    } else if (selector === "eventpage") {
      setColumnState([
        {
          Header: "Status",
          Cell: ({ row }) => {
            return (
              <Select
                menuPortalTarget={document.body}
                menuPosition={"fixed"}
                menuPlacement="auto"
                className="select-status"
                id={row.id}
                options={statuses}
                onChange={(e) => handleChange(e, row.id)}
                value={statuses.find((item) => item.value === status[row.id])}
              />
            );
          },
        },
        ...allColumns,
      ]);
    } else if (selector === "groupings") {
      setColumnState([...groupingColumns]);
    }
    // eslint-disable-next-line
  }, [status]);

  // Dummy data for now

  const data = React.useMemo(() => tableData, [tableData]);

  // Defining columns

  const columns = React.useMemo(() => [...columnState], [columnState]);

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
