import { motion } from "framer-motion";

const SALON_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAzrsL9aOte6-U4vrxZHh1hIPM37Pnu0cHt8TJozRNU2F7Cn6kWOwEtpKc4XJcEoVgh7GaKVNNSoRToglgJlkDtST19z4Lx4KmTZsiArtKBslolZErHg0adTOCLUbjuE-Kb-tvxjCkTfE01UvvglPPbPki9kka761RDiO5r8RXwbCNqjW2FDKuvScZiPXQNcil3uLtrc6RrX9Hc63pDE9RL-VY5d3r6VEOeuUmyWOSazeKU7hSEsUN3aQ";

const DINING_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA8Zu6t7p9a_rx92KCETuNpW0uCaiUFfhlPUVJYxdzMkqxuOet4Rlf-RaFBT1N54RnyHNQMjLnFj2jAYkNRrW2gZMMCWUyqSrSE-Fv9zx8wDSzSQ--akyTRH-KpYXzuCuKnhaxz1nvvG6dD0E04VD8KljLJuJEanElWXplg2xQt5mNah-CpglimHH-uS4mfrjqtM5MXSfoQaV1jtTbC_Z9P4OyQf5nQJPNy18pPJXhvyBsvVy3AUOU8BA";

export default function PropertyShowcase({ onOpenLightbox }) {
  return (
    <section
      className="w-full py-space-xl lg:py-24 px-margin-mobile lg:px-margin bg-surface"
      id="property-showcase"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75 }}
          className="flex flex-col"
        >
          <span className="font-label-caps text-label-caps uppercase text-primary tracking-[0.25em] block mb-2">
            Curated Spatial Experience
          </span>
          <h2 className="font-headline-lg text-[24px] leading-[32px] sm:text-[28px] sm:leading-[36px] lg:text-[36px] lg:leading-[44px] text-on-surface sm:whitespace-nowrap">
            Living Spaces of Poise &amp; Royal Elegance
          </h2>
        </motion.div>

        {/* Feature 1: The Royal Grand Salon */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center"
        >
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.35 }}
            className="lg:col-span-7 rounded-lg overflow-hidden bg-surface-container shadow-xl cursor-pointer group"
            onClick={() =>
              onOpenLightbox({
                src: SALON_IMAGE,
                title: "Cathedral Ceilings & Royal Baroque Salon",
                category: "The Grand Salon & Royal Interiors",
                description:
                  "Double-height ceiling with crystal chandelier, tailored slate curtains, and hand-carved baroque salon seating.",
              })
            }
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <img
                alt="Double Height Grand Salon"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src={SALON_IMAGE}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="font-label-caps text-[10px] text-primary uppercase tracking-[0.25em]">
                  Zone I • Grand Reception
                </span>
                <p className="font-headline-sm text-headline-sm text-on-surface">
                  Cathedral Ceilings &amp; Royal Baroque Salon
                </p>
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-5 flex flex-col gap-space-md p-2 lg:pl-6">
            <span className="font-label-caps text-label-caps uppercase text-secondary tracking-[0.2em]">
              Atmospheric Grandeur
            </span>
            <h3 className="font-headline-md text-headline-md text-on-surface leading-snug">
              Double-Height Drapery &amp; Crystal Splendor
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant font-light leading-relaxed">
              Soaring two-story charcoal velvet drapery frames tall casements
              beneath a tiered crystal chandelier, casting warm amber
              reflections across polished Italian marble floors.
            </p>
          </div>
        </motion.div>

        {/* Feature 2: Banqueting & Formal Dining Hall */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center"
        >
          <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col gap-space-md p-2 lg:pr-6">
            <span className="font-label-caps text-label-caps uppercase text-secondary tracking-[0.2em]">
              Culinary Fellowship
            </span>
            <h3 className="font-headline-md text-headline-md text-on-surface leading-snug">
              The Gilded Banqueting Suite
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant font-light leading-relaxed">
              Crafted for Igbo hospitality, the formal dining salon features a
              hand-carved acanthus table paired with high-back jacquard damask
              royal chairs.
            </p>
            <div className="grid grid-cols-2 gap-3 mt-2">
              <div className="p-3 rounded bg-surface-container-low">
                <span className="font-caption text-[11px] text-outline uppercase block">
                  Table Finish
                </span>
                <span className="font-body-sm text-on-surface font-medium">
                  Beveled Glass &amp; Gilding
                </span>
              </div>
              <div className="p-3 rounded bg-surface-container-low">
                <span className="font-caption text-[11px] text-outline uppercase block">
                  Capacity
                </span>
                <span className="font-body-sm text-on-surface font-medium">
                  Banqueting State Ensemble
                </span>
              </div>
            </div>
          </div>

          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.35 }}
            className="lg:col-span-7 order-1 lg:order-2 rounded-lg overflow-hidden bg-surface-container shadow-xl cursor-pointer group"
            onClick={() =>
              onOpenLightbox({
                src: DINING_IMAGE,
                title: "Royal Feast Dining with Carved Acanthus Crests",
                category: "The Grand Salon & Royal Interiors",
                description:
                  "High-back golden throne chairs and hand-carved baroque banqueting table with tempered beveled inlay.",
              })
            }
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <img
                alt="Formal Banqueting Dining Suite"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src={DINING_IMAGE}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="font-label-caps text-[10px] text-primary uppercase tracking-[0.25em]">
                  Zone II • Dining Salon
                </span>
                <p className="font-headline-sm text-headline-sm text-on-surface">
                  Royal Feast Dining with Carved Acanthus Crests
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
