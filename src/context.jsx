import { createContext, useContext, useReducer } from "react";
import reducer from "./reducer";
export const Appcontext = createContext();

export const useGlobalContext = () => useContext(Appcontext);
const defaultState = {
  users: [
    { name: "Sahith", data: [] },
    { name: "Geeta", data: [] },
    { name: "Manoj", data: [] },
    { name: "Sai", data: [] },
    { name: "Hema", data: [] },
  ],
  currentdata: [],
  currentuser: "",
};
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  return (
    <Appcontext.Provider value={{ ...state, dispatch }}>
      {children}
    </Appcontext.Provider>
  );
};

export default AppProvider;
