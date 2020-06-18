import React, { createContext, useReducer } from "react";
import { appReducer } from "./appReducer";

const initial_state = {
  transactions: [],
};

export const GlobalContext = createContext(initial_state);

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(appReducer, initial_state);

  function deleteHistoryItem(id) {
    dispatch({
      type: "DELETE_HISTORY_ITEM",
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteHistoryItem,
        addTransaction,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
