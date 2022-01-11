import "./App.css";
import PlanLayout from "./pages/Layout/PlanLayout";
import Welcome from "./pages/Welcome";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PhoneConfirmation from "./pages/PhoneConfirmation";

function App() {
  return (
    <Router>
      <PlanLayout>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/invite" element={<PhoneConfirmation />} />
        </Routes>
      </PlanLayout>
    </Router>
  );
}

export default App;
