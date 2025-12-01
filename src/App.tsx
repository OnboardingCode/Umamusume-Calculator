import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import CharactersCard from "./routes/CharactersCard";
import CharactersInfo from "./routes/CharactersInfo";


function App() {


  return (
    <>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<CharactersCard />} />
          {/* Ruta para mostrar información de personaje específico usando query parameter */}
          <Route path="/character" element={<CharactersInfo />} />
        </Routes>
      </div>
    </>
  )
}

export default App
