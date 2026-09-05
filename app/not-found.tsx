import Link from "next/link";
import { business } from "@/lib/config";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-ink-950 px-6 text-center">
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent-soft">404</p>
        <h1 className="h-display mt-5 text-[clamp(2rem,6vw,3.5rem)]">Page Not Found</h1>
        <p className="mx-auto mt-5 max-w-md text-[16px] text-steel-400">
          That page doesn&apos;t exist — but your vehicle still needs a valet.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/" className="btn-primary">
            Back to Home
          </Link>
          <a href={business.phoneHref} className="btn-ghost">
            Call {business.phone}
          </a>
        </div>
      </div>
    </main>
  );
}
