import { motion } from "framer-motion";

export default function Header({ onReplayIntro }) {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-xl shadow-[0_1px_16px_rgba(0,0,0,0.4)]"
    >
      <div className="h-20 w-full max-w-7xl mx-auto px-margin-mobile lg:px-margin flex items-center justify-between gap-gutter">
        <div className="flex items-center gap-space-md">
          <motion.div
            whileHover={{ scale: 1.06, rotate: 4 }}
            className="w-11 h-11 rounded-full bg-surface-container-high flex items-center justify-center border border-primary/20"
          >
            <span className="font-title-editorial text-title-editorial text-primary tracking-widest">
              CC
            </span>
          </motion.div>
          <div className="flex flex-col">
            <span className="font-label-caps text-label-caps uppercase text-primary tracking-[0.25em]">
              THE RESIDENCE
            </span>
            <span className="font-caption text-caption text-on-surface-variant tracking-wider uppercase">
              HOUSE OPENING
            </span>
          </div>
        </div>

        <nav className="hidden xl:flex items-center gap-space-lg">
          <a
            aria-current="page"
            className="uppercase transition-colors duration-300 text-primary font-medium font-label-caps text-label-caps"
            href="#the-estate"
          >
            The Estate
          </a>
          <a
            className="font-label-caps text-label-caps uppercase text-on-surface-variant hover:text-primary transition-colors duration-300"
            href="#architecture"
          >
            Architecture
          </a>
          <a
            className="font-label-caps text-label-caps uppercase text-on-surface-variant hover:text-primary transition-colors duration-300"
            href="#property-showcase"
          >
            Interior Living
          </a>
          <a
            className="font-label-caps text-label-caps uppercase text-on-surface-variant hover:text-primary transition-colors duration-300"
            href="#monograph-archive"
          >
            Monograph
          </a>
          <a
            className="font-label-caps text-label-caps uppercase text-on-surface-variant hover:text-primary transition-colors duration-300"
            href="#celebration"
          >
            Celebration
          </a>
          <a
            className="font-label-caps text-label-caps uppercase text-on-surface-variant hover:text-primary transition-colors duration-300"
            href="#rsvp-portal"
          >
            Location &amp; RSVP
          </a>
        </nav>

        <div className="flex items-center gap-space-sm sm:gap-space-md">
          {onReplayIntro && (
            <motion.button
              type="button"
              onClick={onReplayIntro}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              title="Replay Entrance"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-surface-container text-on-surface-variant hover:text-primary font-label-caps text-[10px] uppercase tracking-wider transition-colors cursor-pointer border border-outline-variant/30"
            >
              <span className="material-symbols-outlined text-[14px]">
                slow_motion_video
              </span>
              <span className="hidden md:inline">Entrance</span>
            </motion.button>
          )}
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="hidden sm:inline-flex items-center px-space-md py-space-xs rounded bg-surface-container-high text-primary hover:bg-primary-container hover:text-on-primary-container font-label-caps text-label-caps uppercase transition-all duration-300 shadow-[0_0_12px_rgba(214,180,119,0.15)]"
            href="#rsvp-portal"
          >
            RSVP Attendance
          </motion.a>
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-on-primary text-[18px]">
              person
            </span>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
