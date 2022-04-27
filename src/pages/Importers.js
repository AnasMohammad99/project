import { Search } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import ImporterTable from "../components/tables/ImporterTable";

const Importers = () => {
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
      <ImporterTable />
    </>
  );
};

export default Importers;
