import React, { useEffect, useState } from "react";
import { useTable, useSortBy } from "react-table";
import Select from "react-select";
import {
  statusOptions,
  attendanceOptions,
  groupOptions,
  facilOptions,
} from "./statuses";
import "./Table.css";
import axios from "axios";

const Table = ({
  tableColumns,
  tableData,
  setTableData,
  eventId,
  options = "none",
  groupData,
  setGroupData,
  facilData,
}) => {
  const [columnsState, setColumnsState] = useState([]);

  const handleChange = async (e, egpId, participantId, columnName) => {
    let updatedId;
    if (options === "status") {
      updatedId = "statusId";
    } else if (options === "attendance") {
      if (columnName === "Attended") {
        updatedId = "isAttended";
      } else if (columnName === "Group") {
        updatedId = "groupId";
      }
    }

    await axios.put(
      `${process.env.REACT_APP_BACKEND_URL}/events/${eventId}/participants`,
      { participantId, [updatedId]: e.value }
    );

    setTableData((prevData) => {
      const data = [...prevData];
      const editedIndex = data.findIndex(
        (participant) => participant.egpId === egpId
      );
      if (options === "status") {
        data[editedIndex].statusId = e.value;
      } else if (options === "attendance") {
        if (columnName === "Attended") {
          data[editedIndex].isAttended = e.value;
        } else if (columnName === "Group") {
          data[editedIndex].groupId = e.value;
        }
      }
      return data;
    });
  };

  const handleFacilChange = async (e, content) => {
    const tempData = [...groupData];
    const targetIndex = tempData.findIndex(
      (data) => Number(data.name) === content.groupId
    );
    tempData[targetIndex].facilitatorId = e.value;
    const response = await axios.put(
      `${process.env.REACT_APP_BACKEND_URL}/groups/${eventId}`,
      { groupArray: tempData }
    );
    setGroupData(response.data.data);
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
                  handleChange(e, row.original.egpId, row.original.id)
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
      // Get group options based on no of groups
      const groups = groupOptions(groupData.length);
      const facils = facilOptions(facilData);
      setColumnsState([
        {
          Header: "Group",
          Cell: ({ row, column }) => {
            if (row.original.mobile) {
              return (
                <Select
                  menuPortalTarget={document.body}
                  menuPosition={"fixed"}
                  menuPlacement="auto"
                  className="select-attendance"
                  id={row.id}
                  options={groups}
                  onChange={(e) =>
                    handleChange(
                      e,
                      row.original.egpId,
                      row.original.id,
                      column.Header
                    )
                  }
                  value={groups.find(
                    (item) => item.value === String(row.original.groupId)
                  )}
                />
              );
            } else {
              return <h5>Group {row.original.groupId}</h5>;
            }
          },
        },
        {
          Header: "Attended",
          Cell: ({ row, column }) => {
            if (row.original.mobile) {
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
                      column.Header
                    )
                  }
                  value={attendanceOptions.find(
                    (item) => item.value === row.original.isAttended
                  )}
                />
              );
            } else {
              return <h5>Facilitator:</h5>;
            }
          },
        },
        {
          Header: "Name",
          accessor: "name",
          Cell: ({ row, column }) => {
            if (row.original.mobile) {
              return row.original.name;
            } else {
              console.log(row);
              return (
                <Select
                  menuPortalTarget={document.body}
                  menuPosition={"fixed"}
                  menuPlacement="auto"
                  className="select-attendance"
                  id={row.id}
                  options={facils}
                  onChange={(e) => handleFacilChange(e, row.original)}
                  value={facils.find((item) => {
                    return item.label === row.original.name;
                  })}
                />
              );
            }
          },
        },
        ...tableColumns,
      ]);
    }
    // eslint-disable-next-line
  }, [groupData]);

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
                  const participant = cell.row.original;

                  // Conditional Row Color Rendering
                  let rowColor = "white";
                  let textColor = "black";
                  if (options === "status") {
                    if (participant.statusId === 5) {
                      rowColor = "#B3DFA1";
                    }
                  } else if (options === "attendance") {
                    if (!participant.mobile) {
                      rowColor = "rgb(120,120,120)";
                      textColor = "white";
                    } else if (participant.groupId % 2) {
                      rowColor = "#CECECE";
                    }
                  }

                  return (
                    <td
                      style={{
                        backgroundColor: rowColor,
                        color: textColor,
                      }}
                      {...cell.getCellProps()}
                    >
                      {cell.render("Cell")}
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
