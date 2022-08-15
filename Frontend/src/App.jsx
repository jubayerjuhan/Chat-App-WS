import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import Chat from "./pages/Chat/Chat";
import { useSelector } from "react-redux";
import ProtectedRoute from "./component/ProtectedRoute/ProtectedRoute";

function App() {
  const user = useSelector((state) => state.user);
  console.log(user);
  return (
    <Routes>
      <Route element={<LoginPage />} path="/"></Route>
      <Route path="/chat" element={<Chat />} />
    </Routes>
  );
}

export default App;
