import React, { useState } from "react";
import { UserData } from "../../../Context/UserDataContext";

export const Tables = (props) => {
  const {
    tableType,
    userData,
    dynamicTextClass,
    dynamicThemeClass,
    setSubmit,
  } = props;
  const { deleteUserData } = UserData();
  const [sortBy, setSortBy] = useState("asc"); // State to track the sorting order

  // const handleEdit = (timestamp) => {
  //   // Logic to open edit form/modal with pre-filled data
  //   editUserData(timestamp, tableType);
  //   console.log("Edit entry with timestamp:", timestamp);
  // };

  const handleDelete = async (timestamp) => {
    // Logic to delete entry from Firestore
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this entry?"
    );
    if (confirmDelete) {
      await deleteUserData(timestamp, tableType);
      setSubmit(true);
      // Logic to open edit form/modal with pre-filled data
      // console.log("Deleted entry with timestamp:", timestamp);
    }
  };

  function formatDate(userData) {
    return userData.map((item) => {
      const date = new Date(
        item.date.seconds * 1000 + item.date.nanoseconds / 1000000
      ); // Convert seconds to milliseconds and add nanoseconds
      const formattedDate = `${("0" + date.getDate()).slice(-2)}/${(
        "0" +
        (date.getMonth() + 1)
      ).slice(-2)}/${date.getFullYear()} ${("0" + date.getHours()).slice(
        -2
      )}:${("0" + date.getMinutes()).slice(-2)}:${(
        "0" + date.getSeconds()
      ).slice(-2)}`;
      return { ...item, date: formattedDate };
    });
  }

  const toggleSortBy = () => {
    setSortBy(sortBy === "asc" ? "desc" : "asc");
  };

  const sortData = (data) => {
    return data.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return sortBy === "asc" ? dateA - dateB : dateB - dateA;
    });
  };

  const tabulateData = (data) => {
    data = formatDate(data);
    if (!data || data.length === 0) return null;

    // Find the index of the dummy entry (if present) with an empty amount field
    const dummyIndex = data.findIndex((entry) => entry.amount === 0);

    // Remove the dummy entry (if found)
    if (dummyIndex !== -1) {
      data.splice(dummyIndex, 1);
    }

    // Sort data by date
    data = sortData(data);

    const fixedHeaders = ["date", "amount", "notes", "type"]; // Define fixed headers
    const tableData = [];

    data.forEach((entry) => {
      const rowData = [];
      fixedHeaders.forEach((key) => {
        const value = entry[key];
        rowData.push(value || "-");
      });

      // Push "edit" and "delete" buttons to the row
      rowData.push(
        <td
          key="edit-delete"
          className="text-center px-2 py-2 gap-2 flex flex-col"
        >
          {/* <button
            onClick={() => handleEdit(entry.date)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mx-1"
          >
            Edit
          </button> */}
          <button
            onClick={() => handleDelete(entry.date)}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded mx-1"
          >
            Delete
          </button>
        </td>
      );

      tableData.push(rowData);
    });

    return (
      <div
        className={`noto-sans-1 text-xs w-full h-[450px] overflow-x-auto overflow-y-auto ${dynamicTextClass} ${dynamicThemeClass}`}
        // Set maximum height to 50% of viewport height and rounded edges
      >
        <table className="table-auto border-collapse w-full">
          <thead>
            <tr className="">
              {fixedHeaders.map((key, index) => (
                <th
                  key={index}
                  className={`px-4 py-2 capitalize border inter-heading-2 sticky top-0 bg-gray-400 ${dynamicTextClass} ${dynamicThemeClass}`}
                  onClick={key === "date" ? toggleSortBy : null} // Toggle sort order when clicking on the date header
                  style={{ cursor: key === "date" ? "pointer" : "default" }} // Change cursor style for clickable headers
                >
                  {key}{" "}
                  {key === "date" && ( // Show sorting symbol for the date header
                    <span>{sortBy === "asc" ? "↑" : "↓"}</span>
                  )}
                </th>
              ))}
              <th
                key="edit-delete"
                className={`px-4 py-2 capitalize border inter-heading-2 sticky top-0 bg-gray-400 ${dynamicTextClass} ${dynamicThemeClass}`}
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((rowData, index) => (
              <tr key={index} className={index % 2 === 0 ? "" : ""}>
                {rowData.map((value, index) => (
                  <td key={index} className="border text-center px-4 py-2">
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  const render = () => {
    if (tableType === "incomes") {
      return tabulateData(userData.incomes);
    } else if (tableType === "donations") {
      return tabulateData(userData.donations);
    } else if (tableType === "expenses") {
      return tabulateData(userData.expenses);
    } else if (tableType === "investments") {
      return tabulateData(userData.investments);
    } else if (tableType === "subscriptions") {
      return tabulateData(userData.subscriptions);
    } else {
      return <div>No data available for table type: {tableType}</div>;
    }
  };

  return render();
};

export default Tables;
