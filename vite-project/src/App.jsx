import { BrowserRouter, Routes, Route } from "react-router-dom";

function Donation() {
  return (
    <div>
      <button
        style={{ position: "fixed", top: "10px", right: "10px", zIndex: 999 }}
        onClick={() => window.location.href = "/hospital"}
      >
        Hospital
      </button>

      <iframe
        src="https://don-xi-drab.vercel.app/"
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
        style={{ position: "fixed", top: "10px", right: "10px", zIndex: 999 }}
        onClick={() => window.location.href = "/"}
      >
        Donation
      </button>

      <iframe
        src="https://hos-rouge.vercel.app/"
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