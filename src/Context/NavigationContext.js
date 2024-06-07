import { createContext, useContext } from "react";

const NavigationContext = createContext();

function NavigationProvider({ children }) {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    console.log(element, id);
    element?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <NavigationContext.Provider value={{ scrollToSection }}>
      {children}
    </NavigationContext.Provider>
  );
}

function useNavigation() {
  const context = useContext(NavigationContext);
  return context;
}

export { NavigationProvider, useNavigation };
