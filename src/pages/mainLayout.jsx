import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "../components/layout/sidebar";
import Navbar from "../components/layout/navbar";

const MainLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const authUser = JSON.parse(localStorage.getItem("authUser"));

  if (!authUser) {
    return <Navigate to="/" />;
  }

  return (
    <div className="h-screen flex overflow-hidden bg-gray-900">
      <Sidebar
        authUser={authUser}
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
        collapsed={collapsed}
        setCollapsed={setCollapsed}
      />

      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${
          collapsed ? "lg:ml-20" : "lg:ml-64"
        }`}
      >
        <Navbar
          authUser={authUser}
          onToggleSidebar={() => setSidebarOpen(true)}
        />

        <main className="flex-1 overflow-y-auto p-4 text-white">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
