import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./comps/header/Header";
import Footer from "./comps/footer/Footer";
import Home from "./page/home/Home";
import TablePage from "./page/dataTable/TablePage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dataTable" element={<TablePage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
