"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquareQuote, Phone } from "lucide-react";
import { business } from "@/lib/config";

export default function MobileBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 90 }}
          animate={{ y: 0 }}
          exit={{ y: 90 }}
          transition={{ type: "spring", stiffness: 320, damping: 34 }}
          className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-ink-950/92 backdrop-blur-xl sm:hidden"
          style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
        >
          <div className="grid grid-cols-2 gap-2.5 p-3">
            <a
              href={business.phoneHref}
              className="flex min-h-[52px] items-center justify-center gap-2 rounded-xl bg-white text-[13px] font-bold uppercase tracking-[0.12em] text-ink-950"
            >
              <Phone size={17} aria-hidden="true" /> Call Now
            </a>
            <a
              href="#quote"
              className="flex min-h-[52px] items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/[0.06] text-[13px] font-bold uppercase tracking-[0.12em] text-white"
            >
              <MessageSquareQuote size={17} aria-hidden="true" /> Get a Quote
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
