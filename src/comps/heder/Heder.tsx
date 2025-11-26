import "./Heder.css";
import { useNavigate } from "react-router-dom";
import idfLogo from "../../assets/Untitled.png";
import zyLogo from "../../assets/zy.png";
import Card from "../navigationCard/navigationCard";

export default function Heder() {
  const navigate = useNavigate();
  const buttn = () => {
    navigate("/DataTable");
  };

  return (
    <div className="heder">
      <img src={idfLogo} alt="idf_logo" />
      <img className="zyLogo" src={zyLogo} alt="לוגו זרוע יבשה" />
      <button className="evensButtn" onClick={buttn}>
        הצגת אירועים
      </button>
      <Card />
    </div>
  );
}
