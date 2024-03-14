import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing-page";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/PCL-assignment">
          <Route index element={<LandingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
