import "./App.css"; 
import { Routes, Route } from "react-router-dom";
import Header from "./comps/header/Header";
import Home from "./page/home/Home";
import TablePage from "./page/dataTable/TablePage";
import { useAppTheme } from "./themeContext/ThemeContext";

function App() {
  const { mode } = useAppTheme(); 

  return (
    <div className={`app-container ${mode === 'dark' ? 'dark-mode' : ''}`}> 
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dataTable" element={<TablePage />} />
      </Routes>
    </div>
  );
}

export default App;

