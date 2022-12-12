// import logo from "./logo.svg";
import "./styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import AccomodationSheet from "./pages/AccomodationSheet";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* mise en place des routes */}
        <Route path="/" element={<Home />} />
        <Route path="A-Propos" element={<About />} />
        <Route path="Fiche-Logement" element={<AccomodationSheet />} />
        <Route path="404" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
