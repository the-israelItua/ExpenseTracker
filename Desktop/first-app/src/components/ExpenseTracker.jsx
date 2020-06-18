import React, { useContext } from "react";
import { GlobalContext } from "./context/GlobalState";
import InputForm from "./InputForm";
import HistoryPanel from "./HistoryPanel";

const ExpenseTrack = () => {
  const { transactions } = useContext(GlobalContext);
  const expenseValues = transactions.map((item) => {
    if (item.type === "expense") {
      return item;
    } else {
      return null;
    }
  });

  const expenseHistory = expenseValues.map((expense) => {
    if (expense === null) {
      return null;
    } else {
      return (
        <HistoryPanel
          key={expense.id}
          id={expense.id}
          text={expense.title}
          amount={expense.amount}
          type={"expense"}
        />
      );
    }
  });
  return (
    <>
      <InputForm type={"expense"} btnValue="Subtract Expense" />
      <h3 className="history_header">Expense History</h3>
      {expenseHistory}
    </>
  );
};

export default ExpenseTrack;
