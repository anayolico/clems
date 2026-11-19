import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import IntroCurtain from "./components/IntroCurtain";
import HeroSection from "./components/HeroSection";
import WelcomeSection from "./components/WelcomeSection";
import PropertyShowcase from "./components/PropertyShowcase";
import InvitationSection from "./components/InvitationSection";
import PhotographicMonograph from "./components/PhotographicMonograph";
import DestinationSection from "./components/DestinationSection";
import RsvpSection from "./components/RsvpSection";
import Footer from "./components/Footer";
import LightboxModal from "./components/LightboxModal";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [lightboxItem, setLightboxItem] = useState(null);

  const handleEnterResidence = () => {
    setShowIntro(false);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {showIntro && <IntroCurtain onEnter={handleEnterResidence} />}
      </AnimatePresence>

      {!showIntro && (
        <>
          <main className="w-full bg-surface min-h-screen overflow-x-hidden">
            <div className="flex flex-col w-full">
              <HeroSection onOpenLightbox={setLightboxItem} />
              <WelcomeSection />
              <PropertyShowcase onOpenLightbox={setLightboxItem} />
              <InvitationSection />
              <PhotographicMonograph onOpenLightbox={setLightboxItem} />
              <DestinationSection />
              <RsvpSection />
            </div>
          </main>
          <Footer />
          <LightboxModal
            item={lightboxItem}
            onClose={() => setLightboxItem(null)}
          />
        </>
      )}
    </>
  );
}
