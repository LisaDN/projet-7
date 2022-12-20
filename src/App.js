import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import AccommodationSheet from "./pages/AccommodationSheet";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* mise en place des routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/accommodation/:id" element={<AccommodationSheet />} />
        {/* path=* si chemin ne correspond pas au chemin déclaré au dessus envoie vers la page d'erreur */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
