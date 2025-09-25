import Header from "./components/common/Header.jsx";
import About from "./components/pages/home/About.jsx";
import Hero from "./components/pages/home/Hero.jsx";
import WelcomeToMedical from "./components/pages/home/WelcomeToMedical.jsx";

export default function Home() {
  return (
    <div>
       <Header />
       <Hero />
       <About />
       <WelcomeToMedical />
    </div>
  );
}
