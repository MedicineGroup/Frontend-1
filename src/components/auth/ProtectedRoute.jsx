import { Navigate } from "react-router-dom";
import { useAuthContext } from "../../store/auth-context";
import { ROUTES } from "../../utils/routes";
import HomePageLayout from "../layout/HomePageLayout";

const ProtectedRoute = () => {
  const { isLoggedIn } = useAuthContext();
  if (!isLoggedIn) {
    return <Navigate to={ROUTES.LOGIN} />;
  }
  return (
    <>
      <HomePageLayout />
    </>
  );
};

export default ProtectedRoute;
