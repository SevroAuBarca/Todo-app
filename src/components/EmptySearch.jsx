import React from "react";
import search from "../assets/User research-amico.svg";

export const EmptySearch = (props) => (
  <div>
    <h2>No se encontro {props.searchText}</h2>
    <img src={search} alt="search xd" />
  </div>
);
