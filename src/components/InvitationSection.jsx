import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

function getTargetDate() {
  const now = new Date();
  const year = now.getFullYear();
  let target = new Date(`${year}-01-02T12:00:00+01:00`);
  if (now.getTime() > target.getTime()) {
    target = new Date(`${year + 1}-01-02T12:00:00+01:00`);
  }
  return target.getTime();
}

function getRemainingTime(targetMs) {
  const diff = Math.max(0, targetMs - Date.now());
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
}

function CountdownTimer() {
  const [targetMs] = useState(() => getTargetDate());
  const [timeLeft, setTimeLeft] = useState(() => getRemainingTime(targetMs));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getRemainingTime(targetMs));
    }, 1000);
    return () => clearInterval(interval);
  }, [targetMs]);

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Mins", value: timeLeft.minutes },
    { label: "Secs", value: timeLeft.seconds },
  ];

  return (
    <div className="w-full pt-4 border-t border-surface-container-highest/70 flex flex-col items-center gap-3">
      <span className="font-label-caps text-[10px] uppercase tracking-[0.25em] text-secondary">
        Countdown
      </span>
      <div className="grid grid-cols-4 gap-2 sm:gap-3 w-full max-w-md">
        {units.map((unit) => (
          <div
            key={unit.label}
            className="flex flex-col items-center justify-center py-2.5 sm:py-3 px-2 rounded bg-surface-container border border-primary/15 shadow-sm"
          >
            <span className="font-headline-sm sm:font-headline-md text-[22px] sm:text-[26px] text-primary font-semibold leading-none tabular-nums">
              {String(unit.value).padStart(2, "0")}
            </span>
            <span className="font-caption text-[10px] uppercase tracking-widest text-on-surface-variant mt-1.5">
              {unit.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function BrickIcon({ className = "w-3.5 h-3.5" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M3 7.5L12 3L21 7.5V16.5L12 21L3 16.5V7.5Z"
        fill="currentColor"
        fillOpacity="0.9"
        stroke="#fff3d6"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path
        d="M3 7.5L12 12M12 12L21 7.5M12 12V21"
        stroke="#271900"
        strokeOpacity="0.45"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ScratchDateCard() {
  const canvasRef = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [sparks, setSparks] = useState([]);
  const isDrawingRef = useRef(false);
  const lastSparkTimeRef = useRef(0);
  const sparkIdRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;
    const width = canvas.offsetWidth;
    const height = canvas.offsetHeight;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    // Metallic gold foil gradient
    const grad = ctx.createLinearGradient(0, 0, width, height);
    grad.addColorStop(0, "#b89049");
    grad.addColorStop(0.35, "#f3cf90");
    grad.addColorStop(0.65, "#d6b477");
    grad.addColorStop(1, "#9e7733");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);

    // Subtle brushed foil texture lines
    ctx.strokeStyle = "rgba(255, 255, 255, 0.14)";
    ctx.lineWidth = 1;
    for (let i = -height; i < width + height; i += 12) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i + height * 0.4, height);
      ctx.stroke();
    }

    // Prompt text on foil
    ctx.fillStyle = "#271900";
    ctx.font = "600 11px 'Plus Jakarta Sans', sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("SCRATCH TO REVEAL THE DATE", width / 2, height / 2 - 8);

    ctx.font = "400 10px 'Plus Jakarta Sans', sans-serif";
    ctx.fillStyle = "rgba(39, 25, 0, 0.75)";
    ctx.fillText("Swipe across the gold foil", width / 2, height / 2 + 12);
  }, []);

  const spawnSparks = (x, y, count = 3) => {
    const newSparks = Array.from({ length: count }, (_, idx) => {
      const angle = Math.random() * Math.PI * 2;
      const distance = 22 + Math.random() * 44;
      sparkIdRef.current += 1;
      return {
        id: sparkIdRef.current,
        x,
        y,
        dx: Math.cos(angle) * distance,
        dy: Math.sin(angle) * distance - 12,
        rotate: (Math.random() - 0.5) * 140,
        scale: 0.7 + Math.random() * 0.65,
        isBrick: idx % 2 === 0,
      };
    });
    setSparks((prev) => [...prev.slice(-24), ...newSparks]);
  };

  const removeSpark = (id) => {
    setSparks((prev) => prev.filter((s) => s.id !== id));
  };

  const checkRevealProgress = () => {
    const canvas = canvasRef.current;
    if (!canvas || isRevealed) return;
    const ctx = canvas.getContext("2d");
    const { width, height } = canvas;
    const imageData = ctx.getImageData(0, 0, width, height).data;
    let cleared = 0;
    const total = imageData.length / 4;
    for (let i = 3; i < imageData.length; i += 64) {
      if (imageData[i] < 128) cleared++;
    }
    if (cleared / (total / 16) > 0.36) {
      setIsRevealed(true);
    }
  };

  const scratchAt = (clientX, clientY) => {
    const canvas = canvasRef.current;
    if (!canvas || isRevealed) return;
    const rect = canvas.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const ctx = canvas.getContext("2d");
    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(x, y, 26, 0, Math.PI * 2);
    ctx.fill();

    const now = Date.now();
    if (now - lastSparkTimeRef.current > 45) {
      lastSparkTimeRef.current = now;
      spawnSparks(x, y, 3);
    }

    checkRevealProgress();
  };

  const handlePointerDown = (e) => {
    isDrawingRef.current = true;
    scratchAt(e.clientX, e.clientY);
  };

  const handlePointerMove = (e) => {
    if (!isDrawingRef.current) return;
    scratchAt(e.clientX, e.clientY);
  };

  const handlePointerUp = () => {
    isDrawingRef.current = false;
  };

  return (
    <div className="relative w-full max-w-[290px] mx-auto overflow-visible">
      <div className="relative w-full h-24 rounded-lg overflow-hidden bg-surface-container-lowest border border-primary/40 shadow-[0_0_24px_rgba(243,207,144,0.16)] flex flex-col items-center justify-center select-none">
        {/* Step 1 after scratch finishes: Building block icon smoothly emerges & sparks */}
        {isRevealed && (
          <motion.div
            initial={{ opacity: 0, scale: 0.55 }}
            animate={{
              opacity: [0, 1, 1, 0],
              scale: [0.55, 1.12, 1, 0.92],
            }}
            transition={{
              duration: 1.5,
              delay: 0.2,
              times: [0, 0.32, 0.72, 1],
              ease: "easeInOut",
            }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <div className="relative flex items-center justify-center">
              <div className="absolute w-14 h-14 rounded-full bg-primary/20 blur-md" />
              <BrickIcon className="relative w-10 h-10 text-primary drop-shadow-[0_0_12px_rgba(243,207,144,0.75)]" />
            </div>
          </motion.div>
        )}

        {/* Step 2: Date smoothly fades in place after the block icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={
            isRevealed
              ? { opacity: 1, scale: 1 }
              : { opacity: 0, scale: 0.96 }
          }
          transition={{ duration: 0.95, delay: 1.45, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center justify-center text-center px-4"
        >
          <span className="font-label-caps text-[10px] uppercase tracking-[0.26em] text-secondary mb-0.5">
            Save The Date
          </span>
          <span className="font-headline-md text-[26px] sm:text-[28px] text-primary font-semibold tracking-wide">
            2nd January
          </span>
        </motion.div>

        <motion.canvas
          ref={canvasRef}
          animate={{ opacity: isRevealed ? 0 : 1 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          style={{
            touchAction: "none",
            pointerEvents: isRevealed ? "none" : "auto",
          }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
          onPointerCancel={handlePointerUp}
          className="absolute inset-0 w-full h-full cursor-crosshair"
        />
      </div>

      {/* Building block & gold spark particles emitted while scratching */}
      <div className="pointer-events-none absolute inset-0 overflow-visible z-20">
        {sparks.map((spark) => (
          <motion.div
            key={spark.id}
            initial={{
              x: spark.x,
              y: spark.y,
              opacity: 1,
              scale: 0.4,
              rotate: 0,
            }}
            animate={{
              x: spark.x + spark.dx,
              y: spark.y + spark.dy,
              opacity: 0,
              scale: spark.scale,
              rotate: spark.rotate,
            }}
            transition={{ duration: 0.95, ease: "easeOut" }}
            onAnimationComplete={() => removeSpark(spark.id)}
            className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 text-primary drop-shadow-[0_0_6px_rgba(243,207,144,0.85)]"
          >
            {spark.isBrick ? (
              <BrickIcon className="w-3.5 h-3.5 text-primary" />
            ) : (
              <span className="block w-1.5 h-1.5 rounded-full bg-[#fff2cc]" />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function InvitationSection() {
  return (
    <section className="w-full py-space-xl lg:py-24 px-margin-mobile lg:px-margin bg-surface relative overflow-hidden">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full bg-surface-container-low rounded-lg p-6 sm:p-10 md:p-12 shadow-2xl border border-primary/20 text-center flex flex-col items-center gap-6 relative overflow-hidden"
        >
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(243,207,144,0.08)_0%,transparent_65%)]" />

          <div className="relative z-10 flex flex-col items-center gap-3">
            <span className="font-label-caps text-[10px] sm:text-label-caps uppercase text-primary tracking-[0.26em]">
              Formal Invitation
            </span>
            <h2 className="font-headline-md text-[20px] leading-[28px] sm:text-headline-lg text-on-surface whitespace-nowrap">
              Come &amp; Celebrate With Us
            </h2>
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent my-1" />
            <p className="font-body-md sm:font-body-lg text-on-surface-variant font-light leading-relaxed max-w-xl">
              <strong className="text-primary font-medium">
                Mr. &amp; Mrs. Candid Clems
              </strong>{" "}
              warmly invite you to come and celebrate with them as they open
              their new home.
            </p>
          </div>

          {/* Interactive Scratch-Off Date */}
          <div className="relative z-10 w-full py-1">
            <ScratchDateCard />
          </div>

          {/* Location centered */}
          <div className="relative z-10 w-full flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container text-on-surface border border-outline-variant/30">
              <span className="material-symbols-outlined text-primary text-[18px]">
                location_on
              </span>
              <span className="font-body-sm text-[12px] sm:text-body-sm font-medium tracking-wide">
                Ikembra, Ikeduru, Imo State
              </span>
            </div>
          </div>

          {/* Live Countdown at the bottom */}
          <div className="relative z-10 w-full">
            <CountdownTimer />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
