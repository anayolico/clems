export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest py-10 px-margin-mobile lg:px-margin shadow-[0_-1px_16px_rgba(0,0,0,0.5)]">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-3">
        <div className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center border border-primary/20">
          <span className="font-title-editorial text-body-sm text-primary">
            CC
          </span>
        </div>
        <p className="font-title-editorial text-[16px] sm:text-[18px] text-primary italic leading-relaxed">
          Mr. &amp; Mrs. Candid Clems warmly invite you to the opening of their
          new home.
        </p>
        <span className="font-caption text-caption text-outline uppercase tracking-[0.2em]">
          Ikembra, Ikeduru, Imo State
        </span>
      </div>
    </footer>
  );
}
