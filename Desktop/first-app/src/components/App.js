import React from "react";
import { GlobalProvider } from "./context/GlobalState";
import Dashboard from "./DashBoard";
import ExpenseTrack from "./ExpenseTracker";
import IncomeTrack from "./IncomeTracker";

const App = () => {
  return (
    <GlobalProvider>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <Dashboard />
          </div>
          <div className="col-md-4">
            <IncomeTrack />
          </div>
          <div className="col-md-4">
            <ExpenseTrack />
          </div>
        </div>
      </div>
    </GlobalProvider>
  );
};

export default App;
