import { createContext } from "react";
import UseFirebase from "../../Firebase/UseFirebase";
const AppContext = createContext();

export function UserProvider({ children }) {
  const { signedInUser } = UseFirebase();
  return (
    <AppContext.Provider value={{ signedInUser }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;
