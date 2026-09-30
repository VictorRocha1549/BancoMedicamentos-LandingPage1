import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MissionVision from './components/MissionVision';
import Catalog from './components/Catalog';
import Team from './components/Team';
import Campaigns from './components/Campaigns';
import Permit from './components/Permit';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Navbar />
      <Hero />
      <MissionVision />
      <Catalog />
      <Team />
      <Campaigns />
      <Permit />
      <Contact />
      <Footer />
    </div>
  );
}
