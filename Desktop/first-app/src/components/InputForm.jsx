import React, { useState, useContext } from "react";
import { GlobalContext } from "./context/GlobalState";
import uuid from "uuid";

const InputForm = (props) => {
  const { addTransaction } = useContext(GlobalContext);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const onSubmit = (evt) => {
    evt.preventDefault();

    const newTransaction = {
      id: uuid(),
      type: props.type,
      title,
      amount: parseInt(amount),
    };
  
    if (!newTransaction.amount) {
      return null;
    }
    addTransaction(newTransaction);
    setTitle("");
    setAmount("");
  };
  const btn_style =
    props.btnValue === "Add Income" ? "btn-success" : "btn-danger";
  return (
    <form className="input_form">
      <div className="form-group">
        <input
          type="text"
          className="form-control border-0"
          placeholder="Item title"
          value={title}
          onChange={(evt) => setTitle(evt.target.value)}
        />
      </div>
      <div className="form-group">
        <input
          type="number"
          className="form-control border-0"
          placeholder="Enter Amount"
          value={amount}
          onChange={(evt) => setAmount(evt.target.value)}
        />
      </div>
      <button className={`btn ${btn_style}`} onClick={onSubmit}>
        {props.btnValue}
      </button>
    </form>
  );
};

export default InputForm;
