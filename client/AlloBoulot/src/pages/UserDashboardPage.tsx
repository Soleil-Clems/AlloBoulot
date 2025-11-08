import React, { useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router";
import Header from "@/components/header/Header";
import { Sidebar } from "@/components/dashboard/molecules/Sidebar";

const UserDashboardPage: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const path = location.pathname.split("/")[2] || "";
  const activeTab = ["companies", "table", "profile"].includes(path)
    ? path
    : "applications";

  const handleTabChange = (tab: "applications" | "companies" | "table" | "profile") => {
    switch (tab) {
      case "applications":
        navigate("/dashboard");
        break;
      case "companies":
        navigate("/dashboard/companies");
        break;
      case "table":
        navigate("/dashboard/table");
        break;
      case "profile":
        navigate("/dashboard/profile");
        break;
    }
  };

  const handleToggleCollapse = () => setIsCollapsed(!isCollapsed);

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar */}
      <Sidebar
        activeTab={activeTab}
        onTabChange={handleTabChange}
        isCollapsed={isCollapsed}
        onToggleCollapse={handleToggleCollapse}
      />

      {/* Contenu principal */}
      <div className={`flex-1 flex flex-col transition-all duration-300 ${isCollapsed ? "ml-20" : "ml-64"}`}>
        {/* Header */}
        <Header />

        

        {/* Contenu scrollable */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default UserDashboardPage;
