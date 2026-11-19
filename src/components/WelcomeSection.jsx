import { motion } from "framer-motion";

export default function WelcomeSection() {
  return (
    <section className="w-full py-space-xl lg:py-24 px-margin-mobile lg:px-margin bg-surface-container-lowest relative overflow-hidden">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-3xl text-center mb-10"
        >
          <span className="font-label-caps text-label-caps uppercase text-secondary tracking-[0.3em] block mb-2">
            A Timeless Biblical Principle
          </span>
          <blockquote className="font-title-editorial text-title-editorial lg:text-[22px] italic text-primary leading-relaxed">
            “Unless Jehovah builds the house,
            <br className="hidden sm:inline" /> it is in vain that its builders
            work hard on it.”
          </blockquote>
          <span className="font-caption text-caption text-outline tracking-widest uppercase block mt-2">
            — Psalm 127:1
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          className="w-full bg-surface-container-low rounded-lg p-5 sm:p-8 md:p-14 shadow-2xl relative"
        >
          <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-center md:items-start">
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center justify-center shrink-0 w-32 h-32 md:w-40 md:h-40 rounded bg-surface-container-high shadow-inner text-center p-4 border border-primary/15"
            >
              <span className="font-headline-sm text-headline-sm text-primary tracking-widest">
                CLEMS
              </span>
            </motion.div>

            <div className="flex flex-col gap-4 text-left w-full">
              <div className="flex flex-col">
                <span className="font-label-caps text-[9.5px] sm:text-label-caps uppercase text-primary tracking-[0.14em] sm:tracking-[0.25em] whitespace-nowrap">
                  Personal Message of Gratitude
                </span>
                <h3 className="font-headline-md text-[17px] leading-[24px] sm:text-[24px] sm:leading-[32px] md:text-headline-md text-on-surface whitespace-nowrap">
                  Warmest Welcome from Our Family
                </h3>
              </div>
              <p className="font-body-md sm:font-body-lg text-on-surface-variant leading-relaxed text-justify">
                With heartfelt gratitude to the Almighty and profound joy in our
                hearts, we warmly invite our cherished family, esteemed friends,
                and distinguished guests to witness the dedication and opening
                of our new home.
              </p>
              <p className="font-body-sm sm:font-body-md text-on-surface-variant leading-relaxed text-justify">
                What began as a blueprint, shared faith, and prayer has
                blossomed into a physical haven of grace, laughter, and
                hospitality. In collaboration with the master craftsmen at{" "}
                <strong className="text-primary font-medium">
                  Gideson Concept
                </strong>
                , every corner has been constructed to honor God and provide
                warmth to all who cross its threshold.
              </p>
              <div className="pt-4 flex flex-col">
                <span className="font-title-editorial text-[20px] text-primary italic font-medium">
                  Mr. &amp; Mrs. Candid Clems
                </span>
                <span className="font-caption text-caption text-outline tracking-wider uppercase">
                  Hosts &amp; Proud Custodians
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
