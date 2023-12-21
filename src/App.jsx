import { Routes, Route } from "react-router-dom";
import { ROUTES } from "./utils/routes";
import DossierMedical from "./pages/DossierMedical";
import InfoUser from "./pages/InfoUser";
import Rdv from "./pages/RDV";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import LandingPage from "./pages/LandingPage";
import ConsultationDetail from "./components/user/ConsultationDetail";
function App() {
  return (
    <Routes>
      <Route path={ROUTES.LANDING} element={<LandingPage />} />
      <Route path={ROUTES.SIGNUP} element={<SignupPage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.HOME} element={<ProtectedRoute />}>
        <Route path={ROUTES.DOSSIER_MEDICAL} element={<DossierMedical />} />
        <Route path={ROUTES.INFO_USER} element={<InfoUser />} />
        <Route path={ROUTES.RDV} element={<Rdv />} />
        <Route path={ROUTES.CONSULATION_DETAIL} element={<ConsultationDetail/>}/>
      </Route>
    </Routes>
  );
}

export default App;
