import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function LightboxModal({ item, onClose }) {
  useEffect(() => {
    if (!item) return undefined;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [item, onClose]);

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          key="lightbox-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
          onClick={onClose}
        >
          <motion.div
            key="lightbox-dialog"
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ type: "spring", stiffness: 280, damping: 26 }}
            className="relative max-w-5xl w-full bg-surface-container-low rounded-lg overflow-hidden shadow-2xl border border-outline-variant/40 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-3.5 px-4 sm:p-4 sm:px-6 bg-surface-container flex items-center justify-between gap-3 border-b border-surface-container-highest">
              <h4 className="font-headline-sm text-[15px] sm:text-headline-sm text-on-surface font-medium truncate">
                {item.title}
              </h4>
              <button
                type="button"
                className="w-8 h-8 sm:w-9 sm:h-9 shrink-0 rounded-full bg-surface-container-high hover:bg-surface-container-highest text-on-surface flex items-center justify-center transition-colors cursor-pointer"
                onClick={onClose}
              >
                <span className="material-symbols-outlined text-[18px] sm:text-[20px]">
                  close
                </span>
              </button>
            </div>

            <div className="relative w-full max-h-[70vh] bg-surface-container-lowest flex items-center justify-center overflow-hidden">
              <img
                alt={item.title || "Expanded plate"}
                className="max-w-full max-h-[70vh] object-contain"
                src={item.src}
              />
            </div>

            <div className="p-4 px-5 sm:px-6 bg-surface-container-low flex justify-end border-t border-surface-container-highest">
              <p className="font-body-sm text-[12px] leading-[18px] sm:text-body-sm text-on-surface-variant font-light text-right max-w-xl">
                {item.description}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
