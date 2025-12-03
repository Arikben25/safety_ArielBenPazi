import { useEffect, useState } from "react";
import "./home.css";
import OtherInputs from "../../comps/inputComps/OtherInputs";
import SelectFrom from "../../comps/inputComps/selects/SelectFrom";
import type { Field } from "../../types";
import { defaultForm } from "../../types";

export default function Home() {
  const [history, setHistory] = useState<Field[]>(() => {
    const saved = localStorage.getItem("formHistory");
    return saved ? (JSON.parse(saved) as Field[]) : [];
  });

  const [data, setData] = useState<Field>(defaultForm);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<any>) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setHistory([...history, data]);
    setData(defaultForm);

    setToastMessage("✅ הטופס נשלח בהצלחה!");
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  useEffect(() => {
    localStorage.setItem("formHistory", JSON.stringify(history));
  }, [history]);

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
          {toastMessage && <p className="toast-notification">{toastMessage}</p>}
        </div>
      </form>
    </div>
  );
}
