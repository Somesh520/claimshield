import { Card, CardHeader, CardFooter, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  avatar: string;
  rating?: number;
}

interface TestimonialsSectionProps {
  title?: string;
  subtitle?: string;
  badgeText?: string;
  testimonials: Testimonial[];
}

export function TestimonialsSection({
  title = "Trusted by Industry Leaders",
  subtitle = "See how the world's most innovative insurance teams are transforming their operations.",
  badgeText = "Success Stories",
  testimonials,
}: TestimonialsSectionProps) {
  return (
    <section id="testimonials" className="w-full py-48 relative overflow-hidden bg-slate-50 mt-12">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="inline-block rounded-full bg-slate-900 px-4 py-1.5 text-xs font-bold text-white border border-slate-800">
              {badgeText}
            </div>
            <h2 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl text-slate-900">
              {title}
            </h2>
            <p className="max-w-[800px] text-slate-500 md:text-xl font-medium mx-auto">
              {subtitle}
            </p>
          </motion.div>
        </div>
        <div className="mx-auto grid max-w-6xl gap-8 py-12 lg:grid-cols-3">
          {testimonials.map((t, i) => {
            const stars = typeof t.rating === "number" ? t.rating : 5;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="flex flex-col h-full border-slate-200/60 bg-white/70 backdrop-blur-sm hover:-translate-y-1 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-1.5">
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <Star
                          key={idx}
                          size={14}
                          className={idx < stars ? "fill-slate-900 text-slate-900" : "fill-slate-200 text-slate-200"}
                        />
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700 font-medium leading-relaxed italic">"{t.text}"</p>
                  </CardContent>
                  <CardFooter className="mt-auto pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-4">
                      <img
                        src={t.avatar}
                        alt={t.name}
                        className="rounded-xl w-12 h-12 object-cover border-2 border-slate-50"
                      />
                      <div>
                        <p className="text-sm font-bold text-slate-900">{t.name}</p>
                        <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">{t.role}</p>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
