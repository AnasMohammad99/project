import { Search } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import CustomerTable from "../components/tables/CustomerTable";

const Customers = () => {
  return (
    <>
      <div className="header">
        <div className="headContainer">
          <input type="text" className="searchField" />
          <IconButton type="submit" aria-label="search">
            <Search style={{ fill: "white" }} />
          </IconButton>
        </div>
      </div>
      <CustomerTable />
    </>
  );
};

export default Customers;
