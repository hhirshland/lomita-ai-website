import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/hyperactive-logo.png"
            alt="Hyperactive Studio"
            width={32}
            height={32}
          />
          <span className="flex items-baseline gap-1.5">
            <span className="text-sm font-semibold tracking-tight text-foreground">
              hyperactive
            </span>
            <span className="annotation opacity-40">studio</span>
          </span>
        </div>

        {/* Copyright */}
        <p className="font-mono text-[11px] text-muted-light">
          &copy; {new Date().getFullYear()} Hyperactive Studio
        </p>
      </div>
    </footer>
  );
}
