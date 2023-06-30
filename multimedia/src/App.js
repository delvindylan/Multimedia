import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Kontakt from "./components/Kontakt";
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
            <Route path="/kontakt" element={<Kontakt />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
