import React from "react";

import { ApContextProps, childrenProps } from "../types";
import axios from "axios";

export const ApPetContext = React.createContext({} as ApContextProps);

export const ApProvider = ({ children }: childrenProps) => {
  //   const sUrl = import.meta.env.VITE_APP_AP_PET_PRODUCTS_SERVER;

  return <ApPetContext.Provider value={{}}>{children}</ApPetContext.Provider>;
};
