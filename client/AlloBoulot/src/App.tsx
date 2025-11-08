import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import NotFoundPage from "@/pages/NotFoundPage";
import Home from "@/pages/HomePage";
import About from "@/pages/AboutPage";
import Contact from "@/pages/ContactPage";
import Company from "@/pages/CompanyPage";
import CompanyModifyPage from "./pages/CompanyModifyPage";
import CompanyEmployees from "./pages/CompanyEmployeesPage";
import CompanyCandidats from "./pages/CompanyCandidatsPage";
import CompanyOffers from "./pages/CompanyOffers";
import CompanyCreateOffer from "./pages/CompanyCreateOfferPage";
import CompanyModifyOffer from "./pages/CompanyModifyOfferPage";
import Offer from "@/pages/OfferPage";
import Apply from "@/pages/ApplyJobPage";
import Login from "@/pages/LoginPage";
import UserDashboardPage from "./pages/UserDashboardPage";
import Signup from "@/pages/SignUpPage";
import { ApplicationsList } from "@/components/dashboard/organisms/ApplicationsList";
import CompaniesPage from "@/pages/CompaniesPage";
import { TableView } from "@/components/dashboard/organisms/TableView";
import { UserProfile } from "@/components/dashboard/organisms/UserProfile";
import { mockApplications } from "@/data/mockData";
import { useAuth } from "@/hooks/useAuth";
import AdminCompany from "@/pages/AdminCompanyPage";
import AdminUser from "@/pages/AdminUserPage";
import AdminCategory from "@/pages/AdminCategoryPage";


import Test from "@/pages/TestPage";

function App() {
  const { isAuth, isAdmin } = useAuth();

  const ProtectedRoute = () => {
    if (!isAuth) {
      return <Navigate to="/login" replace />;
    }

    return <Outlet />;
  };

  const PublicRoute = () => {
    if (isAuth) {
      return <Navigate to="/" replace />;
    }

    return <Outlet />;
  };

  const PrivateRoute = () => {
    if (!isAdmin) {

      return <Navigate to="/" replace />;

    }

    return <Outlet />;
  };

  return (
    <>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route element={<PrivateRoute />}>
              <Route path="/admin/company" element={<AdminCompany />} />
              <Route path="/admin/user" element={<AdminUser />} />
              <Route path="/admin/category" element={<AdminCategory />} />
            </Route>

            <Route element={<PublicRoute />}>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Route>
            
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />

            <Route element={<PrivateRoute />}>
              <Route path="/admin/company" element={<AdminCompany />} />
              <Route path="/admin/user" element={<AdminUser />} />
              <Route path="/admin/category" element={<AdminCategory />} />
            </Route>


            <Route index element={<Home />} />

            <Route element={<ProtectedRoute />}>

              <Route path="/dashboard" element={<UserDashboardPage />}>
                <Route index element={<TableView />} />
                <Route path="companies" element={<CompaniesPage />} />
                <Route path="profile" element={<UserProfile />} />
              </Route>

              <Route path="/jobAplication/company/:companyId/offer/:offerId" element={<Apply />} />
              <Route path="/company/:companyId" element={<Company />} />
              <Route path="/company/:companyId/modify" element={<CompanyModifyPage />} />
              <Route path="/company/:companyId/employees" element={<CompanyEmployees />} />
              <Route path="/company/:companyId/candidats" element={<CompanyCandidats />} />
              <Route path="/company/:companyId/offers" element={<CompanyOffers />} />
              <Route path="/company/:companyId/createOffer" element={<CompanyCreateOffer />} />
              <Route path="/company/:companyId/modifyOffer/:offerId" element={<CompanyModifyOffer />} />
            </Route>

            <Route path="/company/:companyId/offer/:offerId" element={<Offer />} />

            <Route path="*" element={<NotFoundPage />} />

            <Route path="test" element={<Test />} />
          </Routes>
        </QueryClientProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
