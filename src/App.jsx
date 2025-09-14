import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import ProjectsistemML from "./pages/projectsistemML";
import { Toaster } from "@/components/ui/toaster";
import Hiteman from "./pages/Hiteman";

function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/projectsistemML" element={<ProjectsistemML />} />
        <Route path="/hiteman" element={<Hiteman />} />
      </Routes>
    </>
  );
}

export default App;
