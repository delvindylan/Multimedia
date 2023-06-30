import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Kontakt from "./components/Kontakt";
import Angebote from "./components/Angebote"
import About from "./components/About";
import Impressum from "./components/Impressum"
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="bg-image">
        <header className="App-header">
          <Navbar />
        </header>

        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/angebote" element={<Angebote />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="/about" element={<About />} />
            <Route path="/impressum" element={<Impressum />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
