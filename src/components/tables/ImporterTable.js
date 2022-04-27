import React from "react";
import MainTable from "./MainTable";

const ImporterTable = () => {
  function createData(name, phoneNum1, phoneNum2, ID, notice) {
    return { name, phoneNum1, phoneNum2, ID, notice };
  }
  const rows = [
    createData(
      "أنس محمد محمد",
      201111111111,
      2011111111112,
      2880628281577,
      "تم الدفع"
    ),
    createData(
      "محمد محمد محمد",
      201111111111,
      2011111111112,
      2880628281577,
      "طلب زيادة طول الفستان"
    ),
    createData("أحمد", 201111111111, 2011111111112, 2880628281577, "..."),
    createData("محمود", 201111111111, 2011111111112, 2880628281577, "..."),
    createData("إسلام", 201111111111, 2011111111112, 2880628281577, "..."),
  ];
  return (
    <>
      <MainTable rows={rows} />
    </>
  );
};

export default ImporterTable;
