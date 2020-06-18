import React, { useContext } from "react";
import { GlobalContext } from "./context/GlobalState";

const HistoryPanel = (props) => {
  const { deleteHistoryItem } = useContext(GlobalContext);
  const color = props.type === "income" ? "green" : "red";
  return (
    <div className="history_tab" style={{ color: color }}>
      <h3>{props.text}</h3>
      <h3>${props.amount}</h3>
      <button
        className="btn btn-outline-dark  del_btn"
        onClick={() => deleteHistoryItem(props.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default HistoryPanel;
