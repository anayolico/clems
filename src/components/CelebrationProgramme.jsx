import { motion } from "framer-motion";

const SCHEDULE_ITEMS = [
  {
    time: "12:00 PM",
    title: "Arrival of Guests & Welcome Protocol",
    description:
      "Red carpet reception, signature beverage service, and estate registration.",
    location: "Grand Courtyard",
  },
  {
    time: "01:00 PM",
    title: "Dedication Prayer & Solemn Ribbon-Cutting",
    description:
      "Clergy blessing, scripture invocation, thanksgiving praise, and official cutting of the ribbon.",
    location: "Main Entrance Portico",
  },
  {
    time: "02:00 PM",
    title: "The Guided Estate Walkthrough",
    description:
      "First official tour of the master salon, banqueting chambers, and elevated observation decks.",
    location: "Master Wings",
  },
  {
    time: "02:30 PM",
    title: "Grand Reception, Festive Feast & Musical Toast",
    description:
      "Sumptuous multi-course royal luncheon, vintage champagne toasts, highlife orchestra, and celebration.",
    location: "Ceremonial Marquee",
  },
];

const PROTOCOL_CARDS = [
  {
    icon: "checkroom",
    label: "Attire",
    value: "Regal Traditional / Black-Tie Formal",
  },
  {
    icon: "local_parking",
    label: "Chauffeur & Parking",
    value: "Valet & Paved Compound Spaces",
  },
  {
    icon: "shield",
    label: "Security Protocol",
    value: "Uniformed Gate Verification",
  },
];

export default function CelebrationProgramme() {
  return (
    <section
      className="w-full py-space-xl lg:py-24 px-margin-mobile lg:px-margin bg-surface"
      id="celebration"
    >
      <div className="max-w-5xl mx-auto flex flex-col gap-space-lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="font-label-caps text-label-caps uppercase text-primary tracking-[0.25em] block mb-2">
            Order of Thanksgiving
          </span>
          <h2 className="font-headline-lg text-[28px] leading-[36px] sm:text-headline-lg text-on-surface">
            The Celebration Programme
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2 font-light">
            We invite you to share each sacred milestone as we consecrate and
            celebrate this monument of God's benevolence.
          </p>
        </motion.div>

        <div className="w-full bg-surface-container-low rounded-lg p-6 md:p-10 shadow-xl flex flex-col divide-y divide-surface-container-highest">
          {SCHEDULE_ITEMS.map((item, idx) => (
            <motion.div
              key={item.time}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="py-6 flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div className="flex items-center gap-4">
                <span className="font-headline-sm text-primary font-light whitespace-nowrap min-w-[120px]">
                  {item.time}
                </span>
                <div className="flex flex-col">
                  <h4 className="font-headline-sm text-headline-sm text-on-surface">
                    {item.title}
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant font-light">
                    {item.description}
                  </p>
                </div>
              </div>
              <span className="font-label-caps text-[11px] text-secondary tracking-widest uppercase md:text-right">
                {item.location}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-gutter">
          {PROTOCOL_CARDS.map((card, idx) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -3 }}
              className="p-5 rounded bg-surface-container flex items-start gap-3"
            >
              <span className="material-symbols-outlined text-primary text-2xl">
                {card.icon}
              </span>
              <div>
                <span className="font-label-caps text-[10px] text-secondary uppercase tracking-widest">
                  {card.label}
                </span>
                <p className="font-body-sm text-body-sm text-on-surface font-medium">
                  {card.value}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
