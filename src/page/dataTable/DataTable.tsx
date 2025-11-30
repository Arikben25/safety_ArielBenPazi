import "./DataTable.modoole.css";
import type { FormType } from "../home/Home";

export default function DataTable() {

  const saved = localStorage.getItem("formHistory");
  const data = saved ? (JSON.parse(saved) as FormType[]) : [];

  const titles = [
    "יחידת משנה",
    "תיאור מקרה",
    "מאפיין פעילות הפרט",
    "מאפיין תחומי",
    "פעילות היחידה",
    " מזג אוויר",
    "מיקום",
    "חומרת האירוע",
    "תוצאות האירוע",
    "חומרת הפציעה",
    "המלצות ראשוניות",
    "זמן האירוע",
  ];

  const createTitles = () => {
    return titles.map((v) => <th className="card__title">{v}</th>);
    // return Object.keys(data[0]).map((key) => <th key={key}>{key}</th>);
  };

  const createRow = () => {
    return data.map((row, k) => (
      <tr key={k}>
        {Object.values(row).map((value) => (
          <td key={value}>{value}</td>
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
