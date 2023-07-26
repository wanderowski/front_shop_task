import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "reset-css";
import Home from "./pages/Home";
import LoadingBar from "./components/LoadingBar/LoadingBar";
import Card from "./pages/Card";

function App() {
  return (
    <>
      <LoadingBar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<Card />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
