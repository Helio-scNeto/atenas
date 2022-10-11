import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ReachUs from "./pages/ReachUs";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/reachUs" replace />} />
        <Route path="/reachUs" element={<ReachUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
