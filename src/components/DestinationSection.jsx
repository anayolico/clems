import { motion } from "framer-motion";

const MAP_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBX-DJPjYOL5r5iknSLoOEBQ79grzgGyfgXy86MsBQW4bix7oXMc-AkwD7FbBNhhSI1B05TzunQojiVUHskPEDFefy3U82qKiJqr9aUAPuPYbFglUGcPGIDByIhroJ7J5R_aCQW4BuIWgITXkjenZW1pV2OOsqdpTI4bLrK8qn5fk3QotKtlPp0FN1DZ8UwL1jzVQNOFQ8J9RJo9a4H5rShZeWPlkNuuwWRCFOFdsAD";

export default function DestinationSection() {
  return (
    <section className="w-full py-space-xl lg:py-24 px-margin-mobile lg:px-margin bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75 }}
          className="flex flex-col"
        >
          <span className="font-label-caps text-label-caps uppercase text-primary tracking-[0.25em] block mb-2">
            Venue Navigation
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">
            The Destination
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 rounded-lg overflow-hidden bg-surface-container shadow-2xl relative min-h-[380px]"
          >
            <div
              className="w-full h-full bg-cover bg-center min-h-[380px]"
              style={{ backgroundImage: `url('${MAP_IMAGE}')` }}
            />
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 p-3.5 sm:p-5 rounded bg-surface/95 backdrop-blur-md shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
              <div className="min-w-0">
                <h4 className="font-headline-sm text-[15px] sm:text-body-lg text-on-surface font-semibold whitespace-nowrap">
                  The Clems Private Residence
                </h4>
                <p className="font-caption text-[10px] sm:text-caption text-on-surface-variant whitespace-nowrap mt-0.5">
                  Ikembra, Ikeduru Local Government Area, Imo State
                </p>
              </div>
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="px-4 py-2 sm:py-2.5 rounded bg-primary text-on-primary font-label-caps text-label-caps uppercase font-semibold tracking-wider hover:brightness-110 transition-all text-center shrink-0"
                href="https://maps.google.com/?q=Ikembara,Ikeduru,Imo+State,Nigeria"
                rel="noopener noreferrer"
                target="_blank"
              >
                Navigate
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.12 }}
            className="lg:col-span-5 flex flex-col justify-center gap-space-md"
          >
            <div className="p-6 rounded-lg bg-surface-container-low shadow-xl flex flex-col gap-3">
              <div className="flex items-center gap-2 text-primary">
                <span className="material-symbols-outlined">directions_car</span>
                <span className="font-label-caps text-label-caps uppercase tracking-wider">
                  Driving Instructions
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant font-light leading-relaxed">
                From Owerri City Center, take the{" "}
                <strong className="text-on-surface font-normal">
                  Owerri–Okigwe Road
                </strong>{" "}
                into Ikeduru LGA toward Atta, Inyishi, and Nkwo Imo Market, then
                follow the route into{" "}
                <strong className="text-on-surface font-normal">
                  Ikembara (Ikembra)
                </strong>
                .
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-lg bg-surface-container flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary shrink-0">
                  contact_phone
                </span>
                <div className="flex flex-col min-w-0">
                  <span className="font-caption text-[11px] text-outline uppercase tracking-wider">
                    Phone
                  </span>
                  <div className="font-body-sm text-[13px] sm:text-body-sm text-on-surface font-medium flex items-center gap-1.5 whitespace-nowrap">
                    <a
                      href="tel:08037840392"
                      className="hover:text-primary transition-colors"
                    >
                      08037840392
                    </a>
                    <span className="text-outline">/</span>
                    <a
                      href="tel:08063974321"
                      className="hover:text-primary transition-colors"
                    >
                      08063974321
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <span className="font-label-caps text-[10px] text-primary uppercase tracking-widest bg-surface-container-high px-2.5 py-1 rounded whitespace-nowrap">
                  Available 24/7
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
