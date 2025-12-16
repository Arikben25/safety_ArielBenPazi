import "./Header.css";
import { useNavigate } from "react-router-dom";
import zyLogo from "../../assets/zy.png";
import Card from "./navigationCard/navigationCard";
import { useAppTheme } from "../../themeContext/ThemeContext";

export default function Header() {
  const navigate = useNavigate();
  const { mode, toggleTheme } = useAppTheme();
  
  const MapsToDataTable = () => {
    navigate("/dataTable");
  };

  return (
    <div className="heder">
      
      <img className="zyLogo" src={zyLogo} alt="לוגו זרוע יבשה" />
      
      <button 
        className="theme-toggle-btn" 
        onClick={toggleTheme} 
      >
        {mode === 'light' ? '🌙' : '☀️'}
      </button>
     
      <button className="evensButtn" onClick={MapsToDataTable}>
        הצגת אירועים
      </button>
      <Card />
    </div>
  );
}
