import { createContext, useEffect, useReducer } from "react";
import LoginReducer from "./Reducer";

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isFetching: false,
  error: false,
};

export const LoginContext = createContext(INITIAL_STATE);
export const LoginContextProvider = ({ children }) => {
  const [stateVal, dispatch] = useReducer(LoginReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(stateVal.user));
  }, [stateVal.user]);

  return (
    <LoginContext.Provider
      value={{
        user: stateVal.user,
        isFetching: stateVal.isFetching,
        error: stateVal.error,
        dispatch,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
