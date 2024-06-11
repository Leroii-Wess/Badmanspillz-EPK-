import { createContext, useContext, useState } from "react";

const NavigationContext = createContext();

function NavigationProvider({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    console.log(element, id);
    element?.scrollIntoView({
      behavior: "smooth",
    });
    setMenuOpen(false);
  };

  return (
    <NavigationContext.Provider
      value={{ scrollToSection, menuOpen, setMenuOpen }}
    >
      {children}
    </NavigationContext.Provider>
  );
}

function useNavigation() {
  const context = useContext(NavigationContext);
  return context;
}

export { NavigationProvider, useNavigation };
