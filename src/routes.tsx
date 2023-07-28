import { Route, Routes } from "react-router-dom";
import { LoginrPage } from "./pages/loginPage";
import { RegisterPage } from "./pages/registerPage";
import { DashboardPage } from "./pages/dashboardPage";
import { ContactProvider } from "./context/ContactContext";
import { ProfilePage } from "./pages/profilePage";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginrPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route
        path="/dashboard"
        element={
          <ContactProvider>
            <DashboardPage />{" "}
          </ContactProvider>
        }
      />
      <Route path="/profile" element={<ProfilePage  />}/>
    </Routes>
  );
};
