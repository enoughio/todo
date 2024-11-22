import React, { useEffect } from "react";
import "./App.css";
import Container from "./components/Container.jsx";
import Add from "./components/Add.jsx";
import ViewProvider from "./context/ViewContext.jsx";
import { useTheme } from "./context/TheamContext.jsx";

const App = () => {
  const [isDarkTheme, toggleTheme] = useTheme(); // Correct destructuring

  useEffect(() => {
    console.log("Theme changed:", isDarkTheme ? "Dark" : "Light");
  }, [isDarkTheme]);

  return (
    <div className={`app ${isDarkTheme ? "dark" : "light"}`}>
      <ViewProvider>
        <button onClick={toggleTheme}>Toggle Theme</button> {/* Correct button */}
        <Container />
        <Add />
      </ViewProvider>
    </div>
  );
};

export default App;
