"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import { site } from "@/lib/site";

export default function MobileBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          initial={{ y: 90 }}
          animate={{ y: 0 }}
          exit={{ y: 90 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-0 z-40 border-t border-ink/10 bg-paper/95 px-4 pb-[max(12px,env(safe-area-inset-bottom))] pt-3 backdrop-blur-xl lg:hidden"
        >
          <div className="flex gap-2.5">
            <a href={site.phoneHref} className="btn-ghost flex-1 !py-3">
              <Phone className="h-4 w-4" strokeWidth={1.9} />
              Call
            </a>
            <a href="#quote" className="btn-primary flex-1 !py-3">
              Free quote
              <ArrowRight className="h-4 w-4" strokeWidth={2.1} />
            </a>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
