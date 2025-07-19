/* app/components/FadeInUp.tsx */
"use client";
import { motion } from "framer-motion";

interface FadeInUpProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export default function FadeInUp({
  children,
  delay = 0,
  className = "",
}: FadeInUpProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      viewport={{ once: true, amount: 0.25 }}
    >
      {children}
    </motion.div>
  );
}
