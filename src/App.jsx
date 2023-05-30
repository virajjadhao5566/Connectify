import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Landing from "./components/Landing/landing";
const Login = React.lazy(() => import("./components/Login/login"));
const Register = React.lazy(() => import("./components/Register/register"));
const Dashboard = React.lazy(() => import("./components/Dashboard/dashboard"));
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Landing />} />
        <Route
          path="/login"
          exact
          element={
            <React.Suspense fallback={<p>Loading.....</p>}>
              <Login />
            </React.Suspense>
          }
        />
        <Route
          path="/register"
          exact
          element={
            <React.Suspense fallback={<p>Loading.....</p>}>
              <Register />
            </React.Suspense>
          }
        />
        <Route
          path="/dashboard"
          exact
          element={
            <React.Suspense fallback={<p>Loading.....</p>}>
              <Dashboard />
            </React.Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
