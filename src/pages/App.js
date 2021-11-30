import { Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Detail from "./Detail";
import Home from "./Home";
import MyBag from "./MyBag";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/mybag" element={<MyBag />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
