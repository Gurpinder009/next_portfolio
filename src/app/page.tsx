"use client"

import { useEffect, useState } from "react";
import FooterComponent from "./components/FooterComponent";
import NavComponent from "./components/NavComponent";
import AboutComponent from "./pages/AboutComponent";
import ContactComponent from "./pages/ContactComponent";
import IntroComponent from "./pages/IntroComponent";
import ProjectsComponent from "./pages/ProjectsComponent";
import SkillsComponent from "./pages/SkillsComponent";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 200);
          return 100;
        }
        return p + 2;
      });
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      {loading ? (
        <LoadingComponent progress={progress} />
      ) : (
        <>
          <NavComponent />

          <main>
            <section id="home">
              <IntroComponent />
            </section>

            <hr className="border-primary/10" />

            <section id="about" >
              <AboutComponent />
            </section>

            <hr className="border-primary/10" />

            <section id="projects">
              <ProjectsComponent />
            </section>

            <hr className="border-primary/10" />

            <section id="skills">
              <SkillsComponent />
            </section>

            <hr className="border-primary/10" />

            <section id="contact" >
              <ContactComponent />
            </section>
          </main>

          <hr className="border-primary/10" />

          <FooterComponent />
        </>
      )}
    </div>
  );
}

function LoadingComponent({ progress }: { progress: number }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <svg className="size-12 animate-spin" viewBox="0 0 24 24" fill="none">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="#12F7D6" strokeWidth="4" />
        <path className="opacity-75" fill="#12F7D6" d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4z" />
      </svg>
      <p className="text-primary text-sm font-semibold tracking-widest">{progress}%</p>
    </div>
  )
}