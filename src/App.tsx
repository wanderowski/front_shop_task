import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "reset-css";
import Home from "./pages/Home";
import LoadingBar from "./components/LoadingBar/LoadingBar";
import LoginPage from "@/pages/Login/Login";
import AuthWrapper from "@/components/AuthWrapper/AuthWrapper";

function App() {
  return (
    <>
      <LoadingBar />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <AuthWrapper>
                <Home />
              </AuthWrapper>
            }
          />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
