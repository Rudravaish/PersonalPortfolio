import { useState, useEffect } from "react";
import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Projects from "@/pages/Projects";
import Skills from "@/pages/Skills";
import Resume from "@/pages/Resume";
import Contact from "@/pages/Contact";

function Router() {
  const [location, setLocation] = useLocation();
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    // Extract the section from the URL or default to home
    const section = location === "/" ? "home" : location.replace("/", "");
    setActiveSection(section);
  }, [location]);

  const handleNavigation = (section: string) => {
    setActiveSection(section);
    setLocation(section === "home" ? "/" : `/${section}`);
  };

  return (
    <>
      <Navbar activeSection={activeSection} onNavigate={handleNavigation} />
      <main className="pt-16 overflow-hidden">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/skills" component={Skills} />
          <Route path="/resume" component={Resume} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
