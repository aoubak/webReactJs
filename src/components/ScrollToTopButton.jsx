import { useEffect, useState } from "react";
import { ChevronUp } from 'lucide-react';// or use any icon you like

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.pageYOffset > 200); // Show after scroll
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 cursor-pointer right-6 z-50 p-3 bg-cyan-900 border border-cyan-600 text-white rounded-full shadow-lg hover:bg-cyan-700 transition-all"
        aria-label="Scroll to top"
      >
        <ChevronUp size={20} strokeWidth={2.5}  />
      </button>
    )
  );
}
