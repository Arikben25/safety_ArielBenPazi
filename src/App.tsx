import "./App.css";
import { Routes, Route } from "react-router-dom";
import Heder from "./comps/heder/Heder";
import Footer from "./comps/footer/Footer";
import Home from "./page/home/Home";
import DataTable from "./page/dataTable/DataTable";

function App() {
  return (
    <>
      <Heder />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/DataTable" element={<DataTable />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
