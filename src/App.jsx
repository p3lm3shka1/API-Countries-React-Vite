import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Footer from "./components/Footer";
import "./App.scss";

export default function App() {
  return (
    <div className="app-layout">
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country/:code" element={<Details />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
