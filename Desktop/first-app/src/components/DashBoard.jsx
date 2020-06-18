import React, { useContext } from "react";
import { GlobalContext } from "./context/GlobalState";

const Dashboard = () => {
  const { transactions } = useContext(GlobalContext);

  const income = transactions.map((item) => {
    if (item.type === "income") {
      return item.amount;
    }
    return 0;
  });

  const expenses = transactions.map((item) => {
    if (item.type === "expense") {
      return item.amount;
    }
    return 0;
  });

  const totalIncome = income.reduce((a, b) => (a += b), 0).toFixed(2);
  const totalExpenses = expenses.reduce((a, b) => (a += b), 0).toFixed(2);
  const balance = (totalIncome - totalExpenses).toFixed(2);

  return (
    <div className="dashboard">
      <h1 className="header">EXPENSE TRACKER</h1>
      <div className="balance">
        <h4>Your Balance</h4>
        <h4 className="bal_amt">${balance}</h4>
      </div>

      <div className="track_panel">
        <div className="income_track">
          <p>Income</p>
          <p>+{totalIncome}</p>
        </div>
        <div className="expense_track">
          <p>Expense</p>
          <p>-{totalExpenses}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
