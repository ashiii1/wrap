import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"; // Make sure this imports the CSS below

function Donation() {
  return (
    <div>
      <button
        className="switch-btn"
        onClick={() => (window.location.href = "/hospital")}
      >
        Hospital
      </button>

      <iframe
        src="https://donation-pied.vercel.app/"
        style={{ width: "100%", height: "100vh", border: "none" }}
        title="Donation"
      ></iframe>
    </div>
  );
}

function Hospital() {
  return (
    <div>
      <button
        className="switch-btn"
        onClick={() => (window.location.href = "/")}
      >
        Donation
      </button>

      <iframe
        src="https://hospital-app-zeta-eight.vercel.app/"
        style={{ width: "100%", height: "100vh", border: "none" }}
        title="Hospital"
      ></iframe>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Donation />} />
        <Route path="/hospital" element={<Hospital />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;