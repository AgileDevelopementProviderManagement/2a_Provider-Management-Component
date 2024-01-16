import {
  Context,
  FunctionComponent,
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from "react";
import { Navigate } from "react-router-dom";

const AuthProviderContext: Context<any> = createContext(null);

const getUserData = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user).user: null;
}

export const AuthProvider: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const [userData, setUserData] = useState(getUserData());

  const logout = () => {
    localStorage.removeItem("user");
    setUserData(null);
  }
  
  return (
    <AuthProviderContext.Provider value={{
      userData,
      logout
    }}>
      {userData ? children : <Navigate to="/login" replace={true} />}
    </AuthProviderContext.Provider>
  );
};

export const useAuth = () => useContext(AuthProviderContext);