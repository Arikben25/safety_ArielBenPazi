import "./module.css";
import type { Field } from "../../types";
import { tableHeaders } from "../../data/constants";

export default function DataTable() {
  const saved = localStorage.getItem("formHistory");
  const data = saved ? (JSON.parse(saved) as Field[]) : [];

  const createTitles = () => {
    return tableHeaders.map((val) => (
      <th className="card__title" key={val.name}>
        {val.title}
      </th>
    ));
  };

  const createRow = () => {
    return data.map((row, rowIndex) => (
      <tr key={rowIndex}>
        {tableHeaders.map((col) => (
          <td key={`${rowIndex}-${col.name}`}>{row[col.name] || "-"}</td>
        ))}
      </tr>
    ));
  };

  return (
    <div>
      <table className="dataTable">
        <thead>
          <tr>{createTitles()}</tr>
        </thead>
        <tbody>{createRow()}</tbody>
      </table>
    </div>
  );
}
