import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./routes/Home";
import CharactersCard from "./routes/CharactersCard";
import CharactersInfo from "./routes/CharactersInfo";
import InheritanceCalPage from "./routes/InheritanceCalPage";


function App() {


  return (
    <>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<CharactersCard />} />
          <Route path="/character" element={<CharactersInfo />} />
          <Route path="/inheritance" element={<InheritanceCalPage />} />
        </Routes>

        <Footer />
      </div>
    </>
  )
}

export default App