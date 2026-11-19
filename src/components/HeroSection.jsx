import { motion } from "framer-motion";

const HERO_IMAGE = "/images/estate-facade.jpg";

export default function HeroSection({ onOpenLightbox }) {
  return (
    <>
      {/* SECTION 1: CEREMONIAL PRELUDE & MONOGRAM */}
      <section className="relative w-full py-space-xl lg:py-28 px-margin-mobile lg:px-margin flex flex-col items-center justify-center text-center overflow-hidden bg-surface-container-lowest">
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.75, 0.4] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative mb-8 flex items-center justify-center"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-2 rounded-full border border-dashed border-primary/35 pointer-events-none"
            />
            <div className="w-24 h-24 rounded-full bg-surface-container-high flex items-center justify-center shadow-[0_0_24px_rgba(214,180,119,0.18)]">
              <div className="w-20 h-20 rounded-full bg-surface-container flex flex-col items-center justify-center">
                <span className="font-title-editorial text-headline-sm text-primary tracking-widest font-semibold">
                  C&amp;C
                </span>
                <span className="font-caption text-[10px] text-secondary tracking-[0.25em] uppercase">
                  RESIDENCE
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-surface-container-high mb-6 shadow-sm max-w-full"
          >
            <span className="font-label-caps text-[10px] sm:text-label-caps uppercase text-primary tracking-[0.15em] sm:tracking-[0.26em] whitespace-nowrap">
              A Milestone Worth Celebrating
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="font-headline-lg text-headline-lg lg:text-[46px] text-on-surface font-normal tracking-tight max-w-3xl leading-[1.2] mb-4"
          >
            House Opening Ceremony
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="font-title-editorial text-title-editorial text-secondary italic mb-3"
          >
            The Private Residence of Mr. &amp; Mrs. Candid Clems
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.9, delay: 0.45 }}
            className="w-16 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent my-6"
          />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl font-light leading-relaxed mb-10"
          >
            A special gathering of appreciation, architectural elegance, and
            joyful celebration as we warmly welcome you to celebrate the opening
            of our newly completed home.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="flex flex-col sm:flex-row items-center gap-space-md"
          >
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3.5 rounded bg-primary text-on-primary font-label-caps text-label-caps uppercase font-semibold tracking-[0.2em] shadow-[0_4px_20px_rgba(214,180,119,0.3)] hover:brightness-110 transition-all duration-300"
              href="#monograph-archive"
            >
              Explore Archival Plates (30+)
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: CINEMATIC MONUMENTAL HERO ARCHITECTURE */}
      <section
        className="relative w-full py-space-xl lg:py-24 px-margin-mobile lg:px-margin bg-surface"
        id="the-estate"
      >
        <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="pb-2 md:pb-4"
            id="architecture"
          >
            <h2 className="font-headline-lg text-[24px] leading-[32px] sm:text-[32px] sm:leading-[40px] md:text-headline-lg text-on-surface">
              A Beautiful Home Just Built by Gideson Concept
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative w-full rounded-lg overflow-hidden bg-surface-container shadow-2xl group cursor-pointer flex flex-col"
            onClick={() =>
              onOpenLightbox({
                src: HERO_IMAGE,
                title: "Monumental Frontal Elevation",
                category: "Exterior Architecture & Estate Grounds",
                description:
                  "Textured slate-blue masonry columns, gold filigree terrace balustrades, shaded porticos, and a paved courtyard.",
              })
            }
          >
            <div className="relative aspect-[4/3] sm:aspect-[16/10] md:aspect-[21/10] w-full overflow-hidden">
              <motion.img
                alt="Clems Residence Exterior"
                className="w-full h-full object-cover will-change-transform"
                src={HERO_IMAGE}
                animate={{
                  scale: [1, 1.07, 1.03, 1.08, 1],
                  x: ["0%", "-1.5%", "1%", "-1%", "0%"],
                }}
                transition={{
                  duration: 24,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface/70 via-surface/15 to-transparent md:from-surface md:via-surface/30" />

              <div className="absolute top-3 left-3 md:top-8 md:left-8 px-3 py-1.5 md:px-4 md:py-2 rounded bg-surface/90 backdrop-blur-md shadow-lg flex items-center gap-2 md:gap-3">
                <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-primary animate-pulse" />
                <div className="flex flex-col">
                  <span className="font-label-caps text-[9px] md:text-[10px] text-primary uppercase tracking-[0.18em] md:tracking-[0.2em] font-semibold">
                    Master Builder
                  </span>
                  <span className="font-body-sm text-[11px] md:text-[12px] text-on-surface font-medium leading-tight">
                    Gideson Concept &amp; Partners
                  </span>
                </div>
              </div>
            </div>

            <div className="relative md:absolute md:bottom-10 md:left-10 md:right-10 flex flex-col md:flex-row items-start md:items-end justify-between gap-4 bg-surface-container-low md:bg-transparent p-4 sm:p-5 md:p-0">
              <div className="w-full md:max-w-2xl md:bg-surface-container-low/95 md:backdrop-blur-xl md:p-6 md:rounded-lg md:shadow-xl">
                <span className="font-label-caps text-[10px] md:text-label-caps uppercase text-primary tracking-[0.22em] md:tracking-[0.25em] block mb-1">
                  Architectural Elevation
                </span>
                <h3 className="font-headline-sm text-[18px] leading-[24px] md:text-headline-sm text-on-surface mb-1.5 md:mb-2">
                  Monumental Stone Cladding &amp; Grand Cantilever Porch
                </h3>
                <p className="font-body-sm text-[12px] leading-[18px] md:text-body-sm text-on-surface-variant font-light">
                  Textured slate-blue masonry columns, gold filigree terrace
                  balustrades, shaded porticos, and a paved courtyard.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
