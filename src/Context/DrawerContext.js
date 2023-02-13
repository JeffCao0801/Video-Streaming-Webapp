import React, { createContext } from "react";

export const SidebarContext = createContext();

function DrawerContext({ children }) {
  return (
    <SidebarContext.Provider value={0}>{children}</SidebarContext.Provider>
  );
}

export default DrawerContext;
