import "./App.css";
import SideBar from "./components/Sidebar/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Login from "./components/login/Login";
import Dresses from "./pages/Dresses";
import Customers from "./pages/Customers";
import Importers from "./pages/Importers";
import Reservation from "./pages/Reservation";
import Transactions from "./pages/Transactions";

function App() {
  const user = "AAA";
  return (
    <>
      {!user ? (
        <Login />
      ) : (
        <Router>
          <SideBar>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/Dresses" element={<Dresses />} />
              <Route path="/Customers" element={<Customers />} />
              <Route path="/Importers" element={<Importers />} />
              <Route path="/Reservation" element={<Reservation />} />
              <Route path="/Transactions" element={<Transactions />} />

              <Route path="*" element={<> not found</>} />
            </Routes>
          </SideBar>
        </Router>
      )}
    </>
  );
}

export default App;
