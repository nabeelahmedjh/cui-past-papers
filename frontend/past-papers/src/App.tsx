import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ThemeProvider } from "@/components/theme-provider";
import NavBar from "./components/NavBar";

import Home from "./components/Home";
import ReviewSubmissions from "./components/ReviewSubmissions";
import AddSubmissions from "./components/AddSubmissions";
import Contributors from "./components/Contributors";
import About from "./components/About";
import PastPapers from "./components/PastPapers";
import PaperViewer from "./components/PastPapers/PaperViewer";
import Login from "./components/Login";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/review-submissions" element={<ReviewSubmissions />} />
          <Route path="/sensei" element={<Login />} />
          <Route path="/add-submissions" element={<AddSubmissions />} />
          <Route path="/contributors" element={<Contributors />} />
          <Route path="/about" element={<About />} />
          <Route path="/past-papers" element={<PastPapers />} />
          <Route path="/past-papers/pdf-viewer/:id" element={<PaperViewer />} />
          <Route
            path="*"
            element={
              <h1 className="text-3xl text-center mt-4">
                ⚠️ Oops! Page not Found <br />
                <br /> Did you mean to go to some other place?
              </h1>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
