"use client";

import { motion } from "framer-motion";

const technologies = [
  "React", "Next.js", "TypeScript", "Node.js", "Python", "Tailwind CSS", "Prisma", "PostgreSQL",
  "AWS", "Docker", "Figma", "Stripe", "OpenAI", "Vercel", "Supabase", "GraphQL"
];

export function TechStack() {
  return (
    <section className="py-12 bg-black border-y border-white/5 overflow-hidden">
        <div className="flex relative">
            <motion.div
                className="flex gap-12 whitespace-nowrap"
                animate={{ x: [0, -1000] }}
                transition={{
                    repeat: Infinity,
                    duration: 30,
                    ease: "linear",
                }}
            >
                {[...technologies, ...technologies, ...technologies].map((tech, index) => (
                    <span 
                        key={index} 
                        className="text-2xl md:text-3xl font-bold text-white/20 select-none uppercase tracking-widest hover:text-primary transition-colors cursor-default"
                    >
                        {tech}
                    </span>
                ))}
            </motion.div>
             <motion.div
                className="flex gap-12 whitespace-nowrap absolute top-0 left-0"
                animate={{ x: [0, -1000] }}
                transition={{
                    repeat: Infinity,
                    duration: 30,
                    ease: "linear",
                }}
                 style={{ left: "100%" }} 
            >
                 {/* Duplicated for seamless loop if needed, but the first map handles it well if long enough */}
            </motion.div>
        </div>
    </section>
  );
}
