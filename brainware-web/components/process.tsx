"use client";

import { motion } from "framer-motion";
import { Search, Code2, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Descubrimiento",
    description: "Analizamos tu visión y requerimientos para definir la mejor estrategia tecnológica.",
    color: "from-blue-400 to-blue-600"
  },
  {
    icon: Code2,
    title: "Construcción",
    description: "Desarrollamos soluciones escalables con código limpio y arquitectura moderna.",
    color: "from-primary to-purple-600"
  },
  {
    icon: Rocket,
    title: "Lanzamiento",
    description: "Despliegue automatizado y monitoreo para asegurar el éxito de tu producto.",
    color: "from-green-400 to-emerald-600"
  }
];

export function Process() {
  return (
    <section className="py-24 bg-black relative">
       {/* Decorative gradient */}
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-primary/5 blur-[120px] rounded-full" />
       
       <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Nuestro Proceso</h2>
              <p className="text-white/60 max-w-2xl mx-auto text-lg">
                  Simplificamos lo complejo. Llevamos tu idea del concepto a la realidad en tres pasos claros.
              </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="relative p-8 rounded-2xl bg-zinc-900/50 border border-white/10 overflow-hidden hover:border-primary/50 transition-colors group"
                  >
                      <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity bg-gradient-to-br ${step.color}`} />
                      
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 transition-transform`}>
                          <step.icon className="text-white" size={28} />
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                      <p className="text-white/60 leading-relaxed">
                          {step.description}
                      </p>

                      <div className="absolute top-4 right-4 text-6xl font-black text-white/5 select-none">
                          0{index + 1}
                      </div>
                  </motion.div>
              ))}
          </div>
       </div>
    </section>
  );
}
