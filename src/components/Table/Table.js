import React, { useEffect, useState } from "react";
import { useTable, useSortBy } from "react-table";
import Select from "react-select";
import { statusOptions, attendanceOptions, groupOptions } from "./statuses";
import "./Table.css";
import axios from "axios";

const Table = ({
  tableColumns,
  tableData,
  setTableData,
  eventId,
  options = "none",
}) => {
  const [columnsState, setColumnsState] = useState([]);

  const handleChange = async (e, egpId, participantId, rowId, column) => {
    console.log("Selected: " + e.value + " at index " + egpId);
    if (options === "status") {
      await axios.put(
        `${process.env.REACT_APP_BACKEND_URL}/events/${eventId}/participants`,
        { participantId, statusId: e.value }
      );
    } else if (options === "attendance") {
      if (column === "Attended") {
        await axios.put(
          `${process.env.REACT_APP_BACKEND_URL}/events/${eventId}/participants`,
          { participantId, isAttended: e.value }
        );
      } else if (column === "Group") {
        await axios.put(
          `${process.env.REACT_APP_BACKEND_URL}/events/${eventId}/participants`,
          { participantId, groupId: e.value }
        );
      }
    }
    setTableData((prevData) => {
      const data = [...prevData];
      if (options === "status") {
        data[rowId].statusId = e.value;
      } else if (options === "attendance") {
        if (column === "Attended") {
          data[rowId].isAttended = e.value;
        } else if (column === "Group") {
          data[rowId].groupId = e.value;
        }
      }
      return data;
    });
  };

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
                  handleChange(e, row.original.egpId, row.original.id, row.id)
                }
                value={statusOptions.find(
                  (item) => item.value === String(row.original.statusId)
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
          Cell: ({ row, column }) => {
            return (
              <Select
                menuPortalTarget={document.body}
                menuPosition={"fixed"}
                menuPlacement="auto"
                className="select-attendance"
                id={row.id}
                options={attendanceOptions}
                onChange={(e) =>
                  handleChange(
                    e,
                    row.original.egpId,
                    row.original.id,
                    row.id,
                    column.Header
                  )
                }
                value={attendanceOptions.find(
                  (item) => item.value === row.original.isAttended
                )}
              />
            );
          },
        },
        {
          Header: "Group",
          Cell: ({ row, column }) => {
            return (
              <Select
                menuPortalTarget={document.body}
                menuPosition={"fixed"}
                menuPlacement="auto"
                className="select-attendance"
                id={row.id}
                options={groupOptions}
                onChange={(e) =>
                  handleChange(
                    e,
                    row.original.egpId,
                    row.original.id,
                    row.id,
                    column.Header
                  )
                }
                value={groupOptions.find(
                  (item) => item.value === String(row.original.groupId)
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
