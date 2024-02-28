import { NavigationContainer } from "@react-navigation/native";
import AuthStackRoutes from "./stack.routes";
import { AuthContext } from "@/context/AuthContext";
import { useContext } from "react";
import UserRoutes from "./user.routes";
import AdminRoutes from "./admin.routes";

export default function Routes() {
  const { isAuthenticated, isAdmin } = useContext(AuthContext);
  return (
    <NavigationContainer>
      {isAuthenticated ? (
        isAdmin ? (
          <AdminRoutes />
        ) : (
          <UserRoutes />
        )
      ) : (
        <AuthStackRoutes />
      )}
    </NavigationContainer>
  );
}
