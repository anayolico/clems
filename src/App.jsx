import { useEffect, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import bgMusic from "./assets/Flavour_-_Big_Moves_Only(128k).m4a";
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
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return undefined;

    audio.volume = 0.45;

    const tryPlay = () => {
      const playPromise = audio.play();
      if (playPromise && typeof playPromise.catch === "function") {
        playPromise.catch(() => {
          // Browser blocked unmuted autoplay before user interaction;
          // will start seamlessly on the first tap/click anywhere.
        });
      }
    };

    tryPlay();

    const unlockAudio = () => {
      if (audio.paused) {
        tryPlay();
      }
    };

    window.addEventListener("pointerdown", unlockAudio, { once: true });
    window.addEventListener("touchstart", unlockAudio, { once: true });
    window.addEventListener("keydown", unlockAudio, { once: true });

    return () => {
      window.removeEventListener("pointerdown", unlockAudio);
      window.removeEventListener("touchstart", unlockAudio);
      window.removeEventListener("keydown", unlockAudio);
    };
  }, []);

  const handleEnterResidence = () => {
    if (audioRef.current && audioRef.current.paused) {
      audioRef.current.play().catch(() => {});
    }
    setShowIntro(false);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={bgMusic}
        loop
        autoPlay
        playsInline
        preload="auto"
      />
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
