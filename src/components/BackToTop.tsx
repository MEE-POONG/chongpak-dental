"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react"; // หรือใช้ SVG ปกติก็ได้ครับ

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // ตรวจสอบการ Scroll เพื่อแสดง/ซ่อนปุ่ม
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg transition-all duration-300 hover:scale-110 active:scale-95"
          aria-label="Back to top"
        >
          {/* ลูกศรสี #4A5E3A */}
          <ChevronUp size={28} color="#4A5E3A" strokeWidth={3} />
        </button>
      )}
    </>
  );
};

export default BackToTop;