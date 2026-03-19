import React, { type ReactNode } from "react";
import { NotepadTextDashed } from "lucide-react";
import { cn } from "@/lib/utils";

interface FooterLink {
  label: string;
  href: string;
}

interface SocialLink {
  icon: ReactNode;
  href: string;
  label: string;
}

interface FooterProps {
  brandName?: string;
  brandDescription?: string;
  socialLinks?: SocialLink[];
  navLinks?: FooterLink[];
  creatorName?: string;
  creatorUrl?: string;
  brandIcon?: ReactNode;
  className?: string;
}

export const Footer = ({
  brandName = "YourBrand",
  brandDescription = "Your description here",
  socialLinks = [],
  navLinks = [],
  creatorName,
  creatorUrl,
  brandIcon,
  className,
}: FooterProps) => {
  return (
    <section className={cn("relative w-full mt-0 overflow-hidden", className)}>
      <footer className="border-t bg-white mt-20 relative">
        <div className="max-w-7xl flex flex-col justify-between mx-auto min-h-[30rem] sm:min-h-[35rem] md:min-h-[40rem] relative p-4 py-10">
          <div className="flex flex-col mb-12 sm:mb-20 md:mb-0 w-full">
            <div className="w-full flex flex-col items-center">
              <div className="space-y-2 flex flex-col items-center flex-1">
                <div className="flex items-center gap-2">
                  {brandIcon}
                  <h2 className="text-3xl font-black tracking-tighter text-slate-950">
                    {brandName}
                  </h2>
                </div>
                <p className="text-slate-600 font-bold max-w-sm text-center leading-relaxed">
                  {brandDescription}
                </p>
                <div className="flex items-center gap-4 pt-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="p-3 rounded-2xl bg-white border border-slate-100 text-slate-600 hover:text-blue-600 hover:translate-y-[-4px] transition-all shadow-xl shadow-slate-200"
                      aria-label={link.label}
                    >
                      {React.cloneElement(link.icon as any, { size: 20 })}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto w-full border-t border-slate-100 pt-12">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-center text-sm font-black text-slate-500 hover:text-blue-600 transition-colors tracking-tight uppercase"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center w-full pt-8 border-t border-slate-100 z-10 text-slate-400 font-bold text-xs">
            <p>©{new Date().getFullYear()} {brandName}. All rights reserved.</p>
            <p>
              Crafted by{" "}
              <a
                href={creatorUrl}
                target="_blank"
                rel="noreferrer"
                className="text-slate-600 hover:text-blue-600 transition-colors"
              >
                {creatorName}
              </a>
            </p>
          </div>
        </div>

        {/* Large background brand text */}
        <div
          className="bg-gradient-to-b from-slate-200 via-slate-100 to-transparent bg-clip-text text-transparent leading-none absolute left-1/2 -translate-x-1/2 bottom-40 md:bottom-32 font-extrabold tracking-tighter pointer-events-none select-none text-center px-4"
          style={{
            fontSize: 'clamp(3rem, 12vw, 10rem)',
            maxWidth: '95vw'
          }}
        >
          {brandName.toUpperCase()}
        </div>

        {/* Bottom logo badge */}
        <div className="absolute hover:border-slate-900 duration-300 drop-shadow-[0_0px_20px_rgba(0,0,0,0.5)] bottom-24 md:bottom-20 backdrop-blur-sm rounded-3xl bg-white/60 left-1/2 border-2 border-slate-200 flex items-center justify-center p-3 -translate-x-1/2 z-10">
          <div className="w-12 sm:w-16 md:w-24 h-12 sm:h-16 md:h-24 bg-gradient-to-br from-slate-900 to-slate-700 rounded-2xl flex items-center justify-center shadow-lg">
            {brandIcon || (
              <NotepadTextDashed className="w-8 sm:w-10 md:w-14 h-8 sm:h-10 md:h-14 text-white drop-shadow-lg" />
            )}
          </div>
        </div>

        {/* Divider line */}
        <div className="absolute bottom-32 sm:bottom-34 backdrop-blur-sm h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent w-full left-1/2 -translate-x-1/2"></div>

        {/* Bottom fade */}
        <div className="bg-gradient-to-t from-white via-white/80 blur-[1em] to-white/40 absolute bottom-28 w-full h-24"></div>
      </footer>
    </section>
  );
};
