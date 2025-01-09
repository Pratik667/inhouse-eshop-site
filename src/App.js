import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Auth/Login";

function App() {
  return (
    <>
    <h1>hey</h1>
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
    </>
  );
}

export default App;
