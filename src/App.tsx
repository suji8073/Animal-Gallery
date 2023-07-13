import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Cat from "./page/Cat";
import Dog from "./page/Dog";
import Others from "./page/Others";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CAT" element={<Cat />} />
        <Route path="/DOG" element={<Dog />} />
        <Route path="/OTHERS" element={<Others />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
