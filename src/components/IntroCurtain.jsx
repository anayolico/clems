import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const FLOATING_PARTICLES = [
  { left: "12%", top: "22%", size: 4, duration: 9, delay: 0 },
  { left: "28%", top: "68%", size: 3, duration: 11, delay: 1.5 },
  { left: "44%", top: "18%", size: 5, duration: 13, delay: 0.8 },
  { left: "63%", top: "76%", size: 3, duration: 10, delay: 2.1 },
  { left: "78%", top: "28%", size: 4, duration: 12, delay: 0.4 },
  { left: "88%", top: "60%", size: 3, duration: 9.5, delay: 1.9 },
  { left: "18%", top: "82%", size: 4, duration: 14, delay: 2.7 },
  { left: "52%", top: "48%", size: 2.5, duration: 11.5, delay: 1.1 },
];

const BACKGROUND_SLIDES = [
  {
    src: "/images/estate-facade.jpg",
    alt: "The Clems Residence Front Facade",
    fromScale: 1.04,
    toScale: 1.13,
    fromX: "0%",
    toX: "-2%",
    fromY: "0%",
    toY: "-1.2%",
  },
  {
    src: "/images/estate-forecourt.jpg",
    alt: "The Clems Residence Paved Forecourt",
    fromScale: 1.06,
    toScale: 1.15,
    fromX: "-1.5%",
    toX: "1.5%",
    fromY: "0%",
    toY: "-1.5%",
  },
  {
    src: "/images/estate-lawn.jpg",
    alt: "The Clems Residence Emerald Grounds",
    fromScale: 1.04,
    toScale: 1.14,
    fromX: "1.5%",
    toX: "-1.5%",
    fromY: "-1%",
    toY: "1%",
  },
  {
    src: "/images/estate-salon.jpg",
    alt: "The Clems Residence Grand Salon",
    fromScale: 1.05,
    toScale: 1.14,
    fromX: "0%",
    toX: "1.8%",
    fromY: "1%",
    toY: "-1.2%",
  },
];

export default function IntroCurtain({ onEnter }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const hasMountedRef = useRef(false);

  useEffect(() => {
    hasMountedRef.current = true;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % BACKGROUND_SLIDES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const currentSlide = BACKGROUND_SLIDES[activeIndex];

  return (
    <motion.div
      key="intro-curtain"
      initial={{ opacity: 1 }}
      exit={{
        y: "-100%",
        opacity: 0.9,
        transition: { duration: 0.95, ease: [0.76, 0, 0.24, 1] },
      }}
      className="fixed inset-0 z-[120] overflow-hidden bg-surface-container-lowest flex flex-col justify-between"
    >
      {/* Continuous Moving & Crossfading Full-Screen Estate Backdrop */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <AnimatePresence>
          <motion.img
            key={currentSlide.src}
            src={currentSlide.src}
            alt={currentSlide.alt}
            className="absolute inset-0 w-full h-full object-cover will-change-transform"
            initial={{
              opacity: hasMountedRef.current ? 0 : 1,
              scale: currentSlide.fromScale,
              x: currentSlide.fromX,
              y: currentSlide.fromY,
            }}
            animate={{
              opacity: 1,
              scale: currentSlide.toScale,
              x: currentSlide.toX,
              y: currentSlide.toY,
            }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 1, ease: "easeInOut" },
              scale: { duration: 5, ease: "easeOut" },
              x: { duration: 5, ease: "easeOut" },
              y: { duration: 5, ease: "easeOut" },
            }}
          />
        </AnimatePresence>

        {/* Luxury Obsidian & Warm Gold Vignette Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-surface-container-lowest/80 via-surface/50 to-surface-container-lowest/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(243,207,144,0.12)_0%,transparent_62%)]" />
      </div>

      {/* Continuous Floating Gold Dust Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {FLOATING_PARTICLES.map((p, idx) => (
          <motion.span
            key={idx}
            className="absolute rounded-full bg-primary/60 shadow-[0_0_10px_rgba(243,207,144,0.7)]"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
            }}
            animate={{
              y: [0, -28, 10, -18, 0],
              x: [0, 12, -10, 6, 0],
              opacity: [0.2, 0.75, 0.35, 0.85, 0.2],
              scale: [1, 1.35, 0.9, 1.2, 1],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

    

      {/* Centerpiece Editorial Copy & Small Luxury Enter Button */}
      <div className="relative z-10 max-w-4xl mx-auto px-margin-mobile text-center flex flex-col items-center my-auto py-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative mb-6 flex items-center justify-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="w-24 h-24 md:w-28 md:h-28 rounded-full border border-dashed border-primary/45 flex items-center justify-center p-1.5 shadow-[0_0_32px_rgba(243,207,144,0.2)]"
          >
            <div className="w-full h-full rounded-full border border-primary/25" />
          </motion.div>
          <div className="absolute inset-2.5 rounded-full bg-surface-container-lowest/85 backdrop-blur-md flex flex-col items-center justify-center border border-primary/30">
            <span className="font-title-editorial text-headline-sm md:text-[26px] text-primary tracking-widest font-semibold">
              C&amp;C
            </span>
            <span className="font-caption text-[9px] text-secondary tracking-[0.28em] uppercase">
              RESIDENCE
            </span>
          </div>
        </motion.div>

        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="font-label-caps text-[11px] uppercase tracking-[0.32em] text-primary mb-3"
        >
          The Private Residence of Mr. &amp; Mrs. Candid Clems
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="font-display-hero text-[36px] sm:text-[48px] md:text-[60px] leading-[1.12] text-on-surface font-medium tracking-tight mb-4 drop-shadow-[0_4px_24px_rgba(0,0,0,0.65)]"
        >
          The Clems Residence
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.48 }}
          className="font-title-editorial text-title-editorial md:text-[22px] text-primary italic mb-4"
        >
          “A Masterpiece of Architectural Elegance.”
        </motion.p>

        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.55 }}
          className="w-24 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent my-3"
        />

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.62 }}
          className="font-body-md md:font-body-lg text-on-surface-variant max-w-xl font-light leading-relaxed mb-8 drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]"
        >
          Welcome to our newly completed home — built with precision by{" "}
          <span className="text-primary font-medium">Gideson Concept</span> and
          consecrated in gratitude to God.
        </motion.p>

        {/* Small Luxury Button to Enter Full Page */}
        <motion.button
          type="button"
          onClick={onEnter}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="group relative inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-primary text-on-primary font-label-caps text-[11px] uppercase font-semibold tracking-[0.22em] shadow-[0_0_28px_rgba(243,207,144,0.4)] hover:shadow-[0_0_38px_rgba(243,207,144,0.65)] transition-shadow duration-300 cursor-pointer overflow-hidden"
        >
          <motion.span
            aria-hidden="true"
            animate={{ x: ["-120%", "220%"] }}
            transition={{
              duration: 3.2,
              repeat: Infinity,
              repeatDelay: 1.8,
              ease: "easeInOut",
            }}
            className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] pointer-events-none"
          />
          <span className="relative z-10">Enter The Residence</span>
          <motion.span
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="material-symbols-outlined text-[16px] relative z-10"
          >
            arrow_forward
          </motion.span>
        </motion.button>
      </div>

      {/* Bottom Spacer for Balanced Vertical Centering */}
      <div className="h-8 md:h-12" />
    </motion.div>
  );
}
