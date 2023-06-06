import React, { useEffect, useState } from "react";
import { useTable, useSortBy } from "react-table";
import Select from "react-select";

import "./Table.css";

const Table = ({ tableColumns, tableData, options = "none" }) => {
  const [columnsState, setColumnsState] = useState([]);
  const [status, setStatus] = useState({});
  const [attendance, setAttendance] = useState(false);
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
  const attendanceOptions = [
    { value: true, label: "Yes" },
    { value: false, label: "No" },
  ];

  const handleChange = (e, id) => {
    console.log("Selected: " + e.value + " at index " + id);
    // These states are temporary. Will read from eventGroupParticipant for actual one
    if (options === "status") {
      setStatus((prevStatus) => ({
        ...prevStatus,
        [id]: e.value,
      }));
    } else if (options === "attendance") {
      setAttendance((prevAttendance) => ({
        ...prevAttendance,
        [id]: e.value,
      }));
    }
  };

  // Selecting table through selector that's passed in

  useEffect(() => {
    if (options === "none") {
      setColumnsState([...tableColumns]);
    } else if (options === "status") {
      setColumnsState([
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
        ...tableColumns,
      ]);
    } else if (options === "attendance") {
      setColumnsState([
        {
          Header: "Attended",
          Cell: ({ row }) => {
            return (
              <Select
                menuPortalTarget={document.body}
                menuPosition={"fixed"}
                menuPlacement="auto"
                className="select-status"
                id={row.id}
                options={attendanceOptions}
                onChange={(e) => handleChange(e, row.id)}
                value={attendanceOptions.find(
                  (item) => item.value === attendanceOptions[row.id]
                )}
              />
            );
          },
        },
        ...tableColumns,
      ]);
    }
    // eslint-disable-next-line
  }, []);

  const data = React.useMemo(() => tableData, [tableData]);

  // Defining columns

  const columns = React.useMemo(() => [...columnsState], [columnsState]);

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
