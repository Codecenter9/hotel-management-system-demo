import { Routes, Route } from "react-router-dom";
import MainLayout from "./pages/mainLayout";
// pages
import AdminDashboard from "./pages/admin/dashboard";
import ReceptionDashboard from "./pages/reception/dashboard";
import CustomerDashboard from "./pages/customer/dashboard";
import WaiterDashboard from "./pages/waiter/dashboard";
import Login from "./pages/login";
import ManageRooms from "./pages/admin/rooms/manage-rooms";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route element={<MainLayout />}>
        <Route path="admin">
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="rooms" element={<ManageRooms />} />
        </Route>

        <Route path="reception">
          <Route path="dashboard" element={<ReceptionDashboard />} />
        </Route>

        <Route path="customer">
          <Route path="dashboard" element={<CustomerDashboard />} />
        </Route>

        <Route path="waiter">
          <Route path="dashboard" element={<WaiterDashboard />} />
        </Route>

        <Route path="*" element={<h1>404 - Not Found</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
