import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "./components/mode-toggle";

import "./App.css";

import Home from "./components/Home";
import ReviewSubmissions from "./components/ReviewSubmissions";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <div className="flex justify-end my-4 mr-8">
          <ModeToggle />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/review-submissions" element={<ReviewSubmissions />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
