import { motion } from "framer-motion";
import { PLATES } from "../data/plates";

const SECTIONS = [
  {
    id: "exterior",
    title: "Exterior & Grounds",
    subtitle: "Architectural facades, gates, lawns & perimeter",
    duration: "110s",
    direction: "rtl",
    plates: PLATES.filter((p) => p.category === "exterior"),
  },
  {
    id: "salon",
    title: "Salon & Royal Dining",
    subtitle: "Grand parlor, chandelier & banqueting chambers",
    duration: "80s",
    direction: "ltr",
    plates: PLATES.filter((p) => p.category === "salon"),
  },
  {
    id: "private",
    title: "Suites & Craftsmanship",
    subtitle: "Illuminated marble staircases & private bedrooms",
    duration: "90s",
    direction: "rtl",
    plates: PLATES.filter((p) => p.category === "private"),
  },
];

function PlateCard({ plate, onOpenLightbox }) {
  return (
    <div
      className="w-[260px] sm:w-[320px] md:w-[360px] shrink-0 rounded-lg overflow-hidden bg-surface-container shadow-xl group cursor-pointer relative border border-outline-variant/20"
      onClick={() =>
        onOpenLightbox({
          src: plate.src,
          title: plate.lightboxTitle,
          category: plate.lightboxCategory,
          description: plate.lightboxDescription,
        })
      }
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <img
          alt={plate.alt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          src={plate.src}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/85 via-transparent to-transparent" />
        <div className="absolute bottom-3 left-3.5 right-3.5">
          <span className="font-caption text-[10px] text-secondary uppercase tracking-widest block">
            {plate.plateLabel}
          </span>
          <h5 className="font-body-sm sm:font-body-md font-medium text-on-surface truncate">
            {plate.cardTitle}
          </h5>
        </div>
      </div>
    </div>
  );
}

export default function PhotographicMonograph({ onOpenLightbox }) {
  return (
    <section
      className="w-full py-space-xl lg:py-24 bg-surface-container-lowest overflow-hidden"
      id="monograph-archive"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75 }}
          className="flex flex-col items-center text-center"
        >
          <div className="flex flex-col items-center">
            <span className="font-label-caps text-[10px] sm:text-label-caps uppercase text-primary tracking-[0.16em] sm:tracking-[0.25em] block mb-2">
              Archival Portfolio &amp; Spatial Chapters
            </span>
            <h2 className="font-headline-lg text-[23px] leading-[30px] sm:text-headline-lg text-on-surface whitespace-nowrap">
              Photographic Monograph
            </h2>
            <p className="font-body-sm sm:font-body-md text-[13px] leading-[20px] sm:text-body-md text-on-surface-variant mt-2 max-w-xl">
              26 plates across three wings — tap any photo to inspect.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Three Continuous Right-to-Left Moving Sections */}
      <div className="flex flex-col gap-12">
        {SECTIONS.map((section, sectionIdx) => (
          <div key={section.id} className="flex flex-col gap-4">
            <div className="w-full px-4 sm:px-6 lg:px-8 flex flex-col items-start text-left">
              <span className="font-label-caps text-[10px] uppercase tracking-[0.22em] text-secondary block">
                Chapter 0{sectionIdx + 1} • {section.plates.length} Plates
              </span>
              <h3 className="font-headline-sm sm:font-headline-md text-on-surface">
                {section.title}
              </h3>
            </div>

            <div className="marquee-wrapper relative w-full overflow-hidden py-1">
              <div
                className={`${
                  section.direction === "ltr"
                    ? "animate-marquee-ltr"
                    : "animate-marquee-rtl"
                } gap-4 sm:gap-gutter px-2`}
                style={{ "--marquee-duration": section.duration }}
              >
                {section.plates.map((plate, idx) => (
                  <PlateCard
                    key={`${section.id}-a-${idx}`}
                    plate={plate}
                    onOpenLightbox={onOpenLightbox}
                  />
                ))}
                {section.plates.map((plate, idx) => (
                  <PlateCard
                    key={`${section.id}-b-${idx}`}
                    plate={plate}
                    onOpenLightbox={onOpenLightbox}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
