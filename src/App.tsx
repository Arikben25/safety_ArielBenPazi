import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./comps/header/Header";
import Footer from "./comps/footer/Footer";
import Home from "./page/home/Home";
import DataTable from "./page/dataTable/DataTable";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dataTable" element={<DataTable />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
