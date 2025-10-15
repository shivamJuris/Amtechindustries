import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import ShopContextProvider from "./context/ShopContext.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx"; // 👈 Import ThemeProvider

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ShopContextProvider>
        {/* 👇 Wrap your entire app with the ThemeProvider */}
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ShopContextProvider>
    </BrowserRouter>
  </StrictMode>
);
