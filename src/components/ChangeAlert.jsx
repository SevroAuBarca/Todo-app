import React from "react";
import { withStorageListener } from "./withSorageAlert";

const ChangeAlert = ({ show, toggleShow }) => {
  return show ? <button onClick={toggleShow}>Refresh</button> : null;
};

export const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);
