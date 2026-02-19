"use client";
import { motion, useMotionValue, useSpring } from 'framer-motion';
import Image from "next/image";
import { StaticImageData } from "next/image";
import rhyzenpic from "../images/rhyzen.jpg";
import { useRef } from 'react';

export default function HolocardSelfie({rhyzenpic}: {rhyzenpic: StaticImageData}) {
  const ref = useRef<HTMLDivElement>(null);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const springX = useSpring(rotateX, { stiffness: 500, damping: 20 });
  const springY = useSpring(rotateY, { stiffness: 500, damping: 20 });

  function handleMouseMove(e: { clientX: number; clientY: number; }) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const midX = rect.width / 2;
    const midY = rect.height / 2;

    rotateY.set((x - midX) / 30);
    rotateX.set(-(y - midY) / 30);
  }

  function handleMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: springX,
        rotateY: springY,
        perspective: 1000,
      }}
      className="relative w-full max-w-lg mx-auto rounded-4xl overflow-hidden"
    >
      {/* card image */}
      <Image src={rhyzenpic} alt="Card" className="rounded-4xl" />

      {/* holographic shine */}
      {/* <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(
              circle at 50% 50%,
              rgba(255,255,255,0.35),
              rgba(255,0,255,0.25),
              rgba(0,255,255,0.25),
              transparent 60%
            )
          `,
          mixBlendMode: "overlay",
        }}
      /> */}
    </motion.div>
  );
}
