import React, { useEffect, useState } from "react";
import { useTable, useSortBy } from "react-table";
import Select from "react-select";
import { statusOptions, attendanceOptions } from "./statuses";
import "./Table.css";

const Table = ({ tableColumns, tableData, options = "none" }) => {
  const [columnsState, setColumnsState] = useState([]);
  const [status, setStatus] = useState({});
  const [attendance, setAttendance] = useState(false);

  const handleChange = async (e, egpId, participantId) => {
    console.log("Selected: " + e.value + " at index " + egpId);
    // These states are temporary. Will read from eventGroupParticipant for actual one
    if (options === "status") {
      setStatus((prevStatus) => ({
        ...prevStatus,
        [egpId]: e.value,
      }));
    } else if (options === "attendance") {
      setAttendance((prevAttendance) => ({
        ...prevAttendance,
        [egpId]: e.value,
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
                id={row.original.egpId}
                options={statusOptions}
                onChange={(e) =>
                  handleChange(e, row.original.egpId, row.original.id)
                }
                value={statusOptions.find(
                  (item) => item.value === status[row.original.egpId]
                )}
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
                className="select-attendance"
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

  // Definining & Initialising data to be used

  const data = React.useMemo(() => tableData, [tableData]);
  const columns = React.useMemo(() => [...columnsState], [columnsState]);
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
