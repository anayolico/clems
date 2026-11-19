import { motion } from "framer-motion";

export default function RsvpSection() {
  return (
    <section className="w-full py-space-xl lg:py-20 px-margin-mobile lg:px-margin bg-surface-container-lowest">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto flex flex-col items-center text-center"
      >
        <div className="p-5 sm:p-6 md:p-8 rounded-lg bg-surface-container-high shadow-xl w-full flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 mb-10 md:mb-12">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="font-label-caps text-[10px] text-secondary uppercase tracking-[0.22em]">
              Architectural Artistry
            </span>
            <span className="font-headline-sm text-[20px] sm:text-headline-sm text-on-surface mt-0.5">
              Gideson Concept &amp; Partners
            </span>
          </div>
          <div className="w-12 h-[1px] bg-outline-variant/40 md:hidden" />
          <div className="flex flex-col items-center md:items-end text-center md:text-right shrink-0">
            <span className="font-caption text-caption text-primary italic">
              “A beautiful home just built by Gideson Concept.”
            </span>
            <span className="font-caption text-[11px] text-outline tracking-wider uppercase mt-1">
              A House to Celebrate
            </span>
          </div>
        </div>

        <h3 className="font-headline-md text-[20px] leading-[28px] sm:text-headline-md text-on-surface mb-3">
          Built with Precision • Celebrated with Joy
        </h3>
        <p className="font-body-md sm:font-body-lg text-[14px] leading-[24px] sm:text-body-lg text-on-surface-variant max-w-2xl font-light mb-8">
          “We look forward to welcoming you into our home as we share in a
          memorable occasion filled with happiness, appreciation, and warm
          hospitality.”
        </p>
        <div className="flex flex-col items-center">
          <span className="font-title-editorial text-[24px] text-primary italic font-medium">
            Mr. &amp; Mrs. Candid Clems
          </span>
          <span className="font-label-caps text-label-caps uppercase text-secondary tracking-[0.25em] mt-1">
            Ikembra, Ikeduru, Imo State
          </span>
        </div>
      </motion.div>
    </section>
  );
}
