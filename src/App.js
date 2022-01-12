import "./App.css";
import PlanLayout from "./pages/Layout/PlanLayout";
import Welcome from "./pages/Welcome";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PhoneConfirmation from "./pages/PhoneConfirmation";
import CodeConfirm from "./pages/CodeConfirm";
import AllowNotification from "./pages/AllowNotification";
import AppLayout from "./pages/Layout/AppLayout";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <PlanLayout>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/invite" element={<PhoneConfirmation />} />
          <Route path="/code_confirm" element={<CodeConfirm />} />
          <Route path="/allow_notification" element={<AllowNotification />} />
        </Routes>
      </PlanLayout>
      <AppLayout>
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
      </AppLayout>
    </Router>
  );
}

export default App;
