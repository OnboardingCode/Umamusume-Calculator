import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import CharactersCard from "./routes/CharactersCard";


function App() {


  return (
    <>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<CharactersCard />} />
        </Routes>
      </div>
    </>
  )
}

export default App
