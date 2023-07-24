import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "normalize.css";
import Home from "./pages/Home";
import LoadingBar from "./components/LoadingBar/LoadingBar";

function App() {
  return (
    <Router>
      <LoadingBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
