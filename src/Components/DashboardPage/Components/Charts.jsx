import React from "react";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";

const IncomePieChart = ({ data }) => {
  if (data.incomes.length > 1) {
    // Function to calculate total amount
    const totalAmount = data.incomes.reduce(
      (acc, entry) => acc + parseFloat(entry.amount),
      0
    );

    // Function to extract and count types from the provided data
    const extractAndCountTypes = () => {
      const typesCount = {};
      data.incomes.forEach((item) => {
        const type = item.type; // Type may be undefined or empty
        if (type && type.trim() !== "") {
          // Check if type is defined and not empty
          if (type in typesCount) {
            typesCount[type] += parseFloat(item.amount);
          } else {
            typesCount[type] = parseFloat(item.amount);
          }
        }
      });
      return typesCount;
    };

    // Extract and count types from the data
    const typesCount = extractAndCountTypes();

    // Prepare data for the pie chart
    const chartData = {
      labels: Object.keys(typesCount),
      datasets: [
        {
          data: Object.values(typesCount),
          backgroundColor: [
            "rgba(255, 99, 132, 0.5)",
            "rgba(54, 162, 35, 0.5)",
            "rgba(255, 206, 86, 0.5)",
            "rgba(75, 192, 192, 0.5)",
            "rgba(53, 152, 255, 0.5)",
            "rgba(55, 59, 61, 0.5)",
            "rgba(255, 159, 164, 0.5)",
            "rgba(155, 59, 244, 0.5)",
            // Add more colors as needed
          ],
        },
      ],
    };

    // Render the pie chart
    return (
      <div className="flex flex-col w-full h-full">
        <Pie
          data={chartData}
          options={{
            tooltips: {
              callbacks: {
                label: function (tooltipItem, data) {
                  const type = data.labels[tooltipItem.index];
                  const amount = data.datasets[0].data[tooltipItem.index];
                  const percentage = ((amount / totalAmount) * 100).toFixed(2);
                  return `${type}: $${amount} (${percentage}%)`;
                },
              },
            },
          }}
        />
      </div>
    );
  } else {
    // Return a message if there's an error or no data
    return <div>No data available for chart.</div>;
  }
};

const ExpensesPieChart = ({ data }) => {
  if (
    data.donations.length > 1 ||
    data.investments.length > 1 ||
    data.expenses.length > 1 ||
    data.subscriptions.length > 1
  ) {
    // Function to calculate the total amount for each category
    const calculateTotalAmount = (category) => {
      return data[category].reduce(
        (total, item) => total + parseFloat(item.amount),
        0
      );
    };

    // Prepare data for the pie chart
    const chartData = {
      labels: ["Donations", "Expenses", "Investments", "Subscriptions"],
      datasets: [
        {
          data: [
            calculateTotalAmount("donations"),
            calculateTotalAmount("expenses"),
            calculateTotalAmount("investments"),
            calculateTotalAmount("subscriptions"),
          ],
          backgroundColor: [
            "rgba(155, 199, 32, 0.6)",
            "rgba(54, 162, 235, 0.6)",
            "rgba(255, 206, 0, 0.6)",
            "rgba(225, 0, 0, 0.6)",
          ],
        },
      ],
    };

    // Render the pie chart
    return (
      <div>
        <Pie data={chartData} />
      </div>
    );
  } else {
    // Return a message if there's an error or no data
    return <div>No data available for chart.</div>;
  }
};

const ExpensePieChart = ({ data }) => {
  if (data.expenses.length > 1) {
    // Function to calculate total amount
    const totalAmount = data.expenses.reduce(
      (acc, entry) => acc + parseFloat(entry.amount),
      0
    );

    // Function to extract and count types from the provided data
    const extractAndCountTypes = () => {
      const typesCount = {};
      data.expenses.forEach((item) => {
        const type = item.type; // Type may be undefined or empty
        if (type && type.trim() !== "") {
          // Check if type is defined and not empty
          if (type in typesCount) {
            typesCount[type] += parseFloat(item.amount);
          } else {
            typesCount[type] = parseFloat(item.amount);
          }
        }
      });
      return typesCount;
    };

    // Extract and count types from the data
    const typesCount = extractAndCountTypes();

    // Prepare data for the pie chart
    const chartData = {
      labels: Object.keys(typesCount),
      datasets: [
        {
          data: Object.values(typesCount),
          backgroundColor: [
            "rgba(255, 99, 132, 0.5)",
            "rgba(54, 162, 35, 0.5)",
            "rgba(255, 206, 86, 0.5)",
            "rgba(75, 192, 192, 0.5)",
            "rgba(53, 152, 255, 0.5)",
            "rgba(55, 59, 61, 0.5)",
            "rgba(255, 159, 164, 0.5)",
            "rgba(155, 59, 244, 0.5)",
            // Add more colors as needed
          ],
        },
      ],
    };

    // Render the pie chart
    return (
      <div className="flex flex-col">
        <Pie
          data={chartData}
          options={{
            tooltips: {
              callbacks: {
                label: function (tooltipItem, data) {
                  const type = data.labels[tooltipItem.index];
                  const amount = data.datasets[0].data[tooltipItem.index];
                  const percentage = ((amount / totalAmount) * 100).toFixed(2);
                  return `${type}: $${amount} (${percentage}%)`;
                },
              },
            },
          }}
        />
      </div>
    );
  } else {
    // Return a message if there's an error or no data
    return <div>No data available for chart.</div>;
  }
};

const InvestmentPieChart = ({ data }) => {
  if (data.investments.length > 1) {
    // Function to calculate total amount
    const totalAmount = data.investments.reduce(
      (acc, entry) => acc + parseFloat(entry.amount),
      0
    );

    // Function to extract and count types from the provided data
    const extractAndCountTypes = () => {
      const typesCount = {};
      data.investments.forEach((item) => {
        const type = item.type; // Type may be undefined or empty
        if (type && type.trim() !== "") {
          // Check if type is defined and not empty
          if (type in typesCount) {
            typesCount[type] += parseFloat(item.amount);
          } else {
            typesCount[type] = parseFloat(item.amount);
          }
        }
      });
      return typesCount;
    };

    // Extract and count types from the data
    const typesCount = extractAndCountTypes();

    // Prepare data for the pie chart
    const chartData = {
      labels: Object.keys(typesCount),
      datasets: [
        {
          data: Object.values(typesCount),
          backgroundColor: [
            "rgba(255, 99, 132, 0.5)",
            "rgba(54, 162, 35, 0.5)",
            "rgba(255, 206, 86, 0.5)",
            "rgba(75, 192, 192, 0.5)",
            "rgba(53, 152, 255, 0.5)",
            "rgba(55, 59, 61, 0.5)",
            "rgba(255, 159, 164, 0.5)",
            "rgba(155, 59, 244, 0.5)",
            // Add more colors as needed
          ],
        },
      ],
    };

    // Render the pie chart
    return (
      <div className="flex flex-col">
        <Pie
          data={chartData}
          options={{
            tooltips: {
              callbacks: {
                label: function (tooltipItem, data) {
                  const type = data.labels[tooltipItem.index];
                  const amount = data.datasets[0].data[tooltipItem.index];
                  const percentage = ((amount / totalAmount) * 100).toFixed(2);
                  return `${type}: $${amount} (${percentage}%)`;
                },
              },
            },
          }}
        />
      </div>
    );
  } else {
    // Return a message if there's an error or no data
    return <div>No data available for chart.</div>;
  }
};

const DonationPieChart = ({ data }) => {
  if (data.donations.length > 1) {
    // Function to calculate total amount
    const totalAmount = data.donations.reduce(
      (acc, entry) => acc + parseFloat(entry.amount),
      0
    );

    // Function to extract and count types from the provided data
    const extractAndCountTypes = () => {
      const typesCount = {};
      data.donations.forEach((item) => {
        const type = item.type; // Type may be undefined or empty
        if (type && type.trim() !== "") {
          // Check if type is defined and not empty
          if (type in typesCount) {
            typesCount[type] += parseFloat(item.amount);
          } else {
            typesCount[type] = parseFloat(item.amount);
          }
        }
      });
      return typesCount;
    };

    // Extract and count types from the data
    const typesCount = extractAndCountTypes();

    // Prepare data for the pie chart
    const chartData = {
      labels: Object.keys(typesCount),
      datasets: [
        {
          data: Object.values(typesCount),
          backgroundColor: [
            "rgba(255, 99, 132, 0.5)",
            "rgba(54, 162, 35, 0.5)",
            "rgba(255, 206, 86, 0.5)",
            "rgba(75, 192, 192, 0.5)",
            "rgba(53, 152, 255, 0.5)",
            "rgba(55, 59, 61, 0.5)",
            "rgba(255, 159, 164, 0.5)",
            "rgba(155, 59, 244, 0.5)",
            // Add more colors as needed
          ],
        },
      ],
    };

    // Render the pie chart
    return (
      <div className="flex flex-col">
        <Pie
          data={chartData}
          options={{
            tooltips: {
              callbacks: {
                label: function (tooltipItem, data) {
                  const type = data.labels[tooltipItem.index];
                  const amount = data.datasets[0].data[tooltipItem.index];
                  const percentage = ((amount / totalAmount) * 100).toFixed(2);
                  return `${type}: $${amount} (${percentage}%)`;
                },
              },
            },
          }}
        />
      </div>
    );
  } else {
    // Return a message if there's an error or no data
    return <div>No data available for chart.</div>;
  }
};

const SubscriptionPieChart = ({ data }) => {
  if (data.subscriptions.length > 1) {
    // Function to calculate total amount
    const totalAmount = data.subscriptions.reduce(
      (acc, entry) => acc + parseFloat(entry.amount),
      0
    );

    // Function to extract and count types from the provided data
    const extractAndCountTypes = () => {
      const typesCount = {};
      data.subscriptions.forEach((item) => {
        const type = item.type; // Type may be undefined or empty
        if (type && type.trim() !== "") {
          // Check if type is defined and not empty
          if (type in typesCount) {
            typesCount[type] += parseFloat(item.amount);
          } else {
            typesCount[type] = parseFloat(item.amount);
          }
        }
      });
      return typesCount;
    };

    // Extract and count types from the data
    const typesCount = extractAndCountTypes();

    // Prepare data for the pie chart
    const chartData = {
      labels: Object.keys(typesCount),
      datasets: [
        {
          data: Object.values(typesCount),
          backgroundColor: [
            "rgba(255, 99, 132, 0.5)",
            "rgba(54, 162, 35, 0.5)",
            "rgba(255, 206, 86, 0.5)",
            "rgba(75, 192, 192, 0.5)",
            "rgba(53, 152, 255, 0.5)",
            "rgba(55, 59, 61, 0.5)",
            "rgba(255, 159, 164, 0.5)",
            "rgba(155, 59, 244, 0.5)",
            // Add more colors as needed
          ],
        },
      ],
    };

    // Render the pie chart
    return (
      <div className="flex flex-col">
        <Pie
          data={chartData}
          options={{
            tooltips: {
              callbacks: {
                label: function (tooltipItem, data) {
                  const type = data.labels[tooltipItem.index];
                  const amount = data.datasets[0].data[tooltipItem.index];
                  const percentage = ((amount / totalAmount) * 100).toFixed(2);
                  return `${type}: $${amount} (${percentage}%)`;
                },
              },
            },
          }}
        />
      </div>
    );
  } else {
    // Return a message if there's an error or no data
    return <div>No data available for chart.</div>;
  }
};

export {
  IncomePieChart,
  ExpensesPieChart,
  ExpensePieChart,
  InvestmentPieChart,
  DonationPieChart,
  SubscriptionPieChart,
};
