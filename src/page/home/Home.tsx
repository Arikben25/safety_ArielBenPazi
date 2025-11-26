import { useEffect, useState } from "react";
import "./home.css";
import OtherInputs from "../../comps/inputComps/OtherInputs";
import SelectFrom from "../../comps/inputComps/selects/SelectFrom";
import {Alert} from "@mui/material"

const defaultForm  =  {
  subUnit: "",
  description: "",
  activeType: "",
  category:  "",
  unitActivityType:  "",
  weather:  "",
  location: "",
  eventSeverity: "",
  results:  "",
  injuriesLevel: "",
  initialRecommendations:"",
   date:  "",
}

export type FormType = typeof defaultForm;

export default function Home() {
  const [history, setHistory] = useState< FormType []>(() => {
    const saved = localStorage.getItem("formHistory");
    return saved ? (JSON.parse(saved) as FormType[]) : [];
  });

  const [data, setData] = useState<FormType>(defaultForm );

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setHistory([...history, data]);
    setData(defaultForm );
    alert("טופס נשלח בהצלחה:)")
  };

  useEffect(() => {
    localStorage.setItem("formHistory", JSON.stringify(history));
  },[history]);

  return (
    <div className="home">
      <form onSubmit={submit}>
        <div className="card">
          <div className="card-content-columns">
            <div>
              <OtherInputs handleChange={handleChange} value={data} />
            </div>
            <div>
              <SelectFrom handleChange={handleChange} value={data} />
            </div>
          </div>
          <button type="submit" className="submit-btn">
            שליחה
          </button>
          
        </div>
      </form>
    </div>
  );
}