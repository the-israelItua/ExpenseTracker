import React, { useContext } from "react";
import { GlobalContext } from "./context/GlobalState";
import InputForm from "./InputForm";
import HistoryPanel from "./HistoryPanel";

const IncomeTrack = () => {
  const { transactions } = useContext(GlobalContext);

  const incomeValues = transactions.map((item) => {
    if (item.type === "income") {
      return item;
    } else {
      return null;
    }
  });

  const incomeHistory = incomeValues.map((income) => {
    if (income === null) {
      return null;
    } else {
      return (
        <HistoryPanel
          key={income.id}
          id={income.id}
          text={income.title}
          amount={income.amount}
          type={"income"}
        />
      );
    }
  });

  return (
    <>
      <InputForm type={"income"} btnValue="Add Income" />
      <h3 className="history_header">Income History</h3>
      {incomeHistory}
    </>
  );
};
export default IncomeTrack;
