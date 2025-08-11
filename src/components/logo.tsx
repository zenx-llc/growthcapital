import * as React from "react";

type LogoProps = {
  className?: string;
  variant?: "default" | "inverted";
};

export function Logo({ className, variant = "default" }: LogoProps) {
  return (
    <div className={`${className} flex items-center`}>
      <div className="relative group">
        <div className="absolute -inset-2 bg-gradient-to-r from-[#1e3a8a]/10 to-[#d97706]/10 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur-sm"></div>
        <img
          src="/growthcapitallogo.jpg"
          alt="Growth Capital - Institutional-grade Wealth Management"
          width="320"
          height="80"
          className="relative h-18 w-auto object-contain filter drop-shadow-sm transition-all duration-300 group-hover:drop-shadow-md"
          style={{
            imageRendering: 'crisp-edges'
          }}
        />
      </div>
    </div>
  );
}


