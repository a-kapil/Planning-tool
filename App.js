import React, { useState } from "react";
import * as XLSX from "xlsx";
import ExcelConverter from "./ExcelConverter";

function App() {
  const [file, setFile] = useState(null);
  const [jsonData, setJsonData] = useState([]);

  function handleUpload() {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = e.target.result;
        const workbook = XLSX.read(data, { type: "array" });
        const sheetName = workbook.SheetNames[4];
        const worksheet = workbook.Sheets[sheetName];
        const json = XLSX.utils.sheet_to_json(worksheet);
        setJsonData(json);
      };
      reader.readAsArrayBuffer(file);
    }
  }

  function handleChange(e) {
    setFile(e.target.files[0]);
  }

  return (
    <div>
      <h1>Warehouse Planning Tool</h1>
      {}
      <input accept=".xls, .xlsx, .xlsm" type="file" onChange={handleChange} />
      <button onClick={handleUpload}>Submit</button>
      <ExcelConverter props={jsonData} />
    </div>
  );
}

export default App;
