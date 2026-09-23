import React from 'react';

interface SoleneLogoProps {
  variant?: 'full' | 'compact' | 'minimal' | 'emblem';
  theme?: 'light' | 'dark';
  className?: string;
}

export const SoleneLogo: React.FC<SoleneLogoProps> = ({
  variant = 'compact',
  theme = 'light',
  className = '',
}) => {
  const isDark = theme === 'dark';
  const textColor = isDark ? '#FFFFFF' : '#18191B';
  const accentColor = '#C89F56'; // Warm gold from card
  const mutedColor = isDark ? '#D8D4CF' : '#6A6763';
  const leafColor = '#C29672'; // Soft tan/peach accent

  if (variant === 'emblem') {
    return (
      <div className={`relative inline-flex items-center justify-center ${className}`}>
        <svg
          viewBox="0 0 60 60"
          className="w-10 h-10 transition-transform duration-300 hover:scale-105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle outer geometric halo */}
          <circle cx="30" cy="30" r="28" stroke={accentColor} strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
          <circle cx="30" cy="30" r="25" stroke={leafColor} strokeWidth="1.2" opacity="0.8" />
          {/* Delicate botanical sun/leaf motif representing 'Naturally Inspired & Scientifically Perfected' */}
          <path
            d="M30 11C30 11 32 20 37 24C42 28 49 30 49 30C49 30 42 32 37 36C32 40 30 49 30 49C30 49 28 40 23 36C18 32 11 30 11 30C11 30 18 28 23 24C28 20 30 11 30 11Z"
            fill="url(#soleneGoldGrad)"
            opacity="0.9"
          />
          {/* Center core */}
          <circle cx="30" cy="30" r="3.5" fill={accentColor} />
          <defs>
            <linearGradient id="soleneGoldGrad" x1="11" y1="11" x2="49" y2="49" gradientUnits="userSpaceOnUse">
              <stop stopColor="#E2C188" />
              <stop offset="0.5" stopColor="#C89F56" />
              <stop offset="1" stopColor="#9B6D3B" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  }

  if (variant === 'full') {
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        {/* Emblem top */}
        <div className="mb-2">
          <svg
            viewBox="0 0 60 60"
            className="w-12 h-12 mx-auto"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="30" cy="30" r="28" stroke={accentColor} strokeWidth="1" strokeDasharray="2 2" opacity="0.5" />
            <circle cx="30" cy="30" r="24.5" stroke={leafColor} strokeWidth="1.2" opacity="0.8" />
            <path
              d="M30 12C30 12 32 21 37 25C42 29 48 30 48 30C48 30 42 31 37 35C32 39 30 48 30 48C30 48 28 39 23 35C18 31 12 30 12 30C12 30 18 29 23 25C28 21 30 12 30 12Z"
              fill="url(#soleneFullGoldGrad)"
            />
            <circle cx="30" cy="30" r="3.5" fill="#C89F56" />
            <defs>
              <linearGradient id="soleneFullGoldGrad" x1="12" y1="12" x2="48" y2="48" gradientUnits="userSpaceOnUse">
                <stop stopColor="#E5C790" />
                <stop offset="0.6" stopColor="#C89F56" />
                <stop offset="1" stopColor="#966734" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Brand Name */}
        <span
          className="font-serif tracking-[0.25em] text-3xl md:text-4xl font-semibold uppercase leading-none"
          style={{ color: textColor }}
        >
          SOLÈNE
        </span>

        {/* Descriptor */}
        <span
          className="text-[10px] md:text-xs tracking-[0.3em] font-sans uppercase font-medium mt-1.5"
          style={{ color: mutedColor }}
        >
          Skin · Hair · Laser Clinic & Academy
        </span>

        {/* Tagline */}
        <span
          className="text-[11px] md:text-xs font-serif italic mt-1 tracking-wide"
          style={{ color: accentColor }}
        >
          Naturally Inspired & Scientifically Perfected
        </span>
      </div>
    );
  }

  // Compact variant for Navbar & Headers
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Icon */}
      <svg
        viewBox="0 0 60 60"
        className="w-9 h-9 shrink-0 transition-transform duration-300 group-hover:scale-105"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="30" cy="30" r="27" stroke={accentColor} strokeWidth="1" strokeDasharray="2 2" opacity="0.6" />
        <circle cx="30" cy="30" r="23" stroke={leafColor} strokeWidth="1.2" opacity="0.8" />
        <path
          d="M30 13C30 13 32 21 37 25C42 29 47 30 47 30C47 30 42 31 37 35C32 39 30 47 30 47C30 47 28 39 23 35C18 31 13 30 13 30C13 30 18 29 23 25C28 21 30 13 30 13Z"
          fill="url(#soleneCompactGrad)"
        />
        <circle cx="30" cy="30" r="3" fill="#C89F56" />
        <defs>
          <linearGradient id="soleneCompactGrad" x1="13" y1="13" x2="47" y2="47" gradientUnits="userSpaceOnUse">
            <stop stopColor="#E2C188" />
            <stop offset="0.5" stopColor="#C89F56" />
            <stop offset="1" stopColor="#966734" />
          </linearGradient>
        </defs>
      </svg>

      {/* Text lockup */}
      <div className="flex flex-col text-left">
        <div className="flex items-baseline gap-1.5">
          <span
            className="font-serif tracking-[0.2em] text-xl font-semibold uppercase leading-none"
            style={{ color: textColor }}
          >
            SOLÈNE
          </span>
          <span className="hidden sm:inline-block text-[9px] tracking-wider uppercase font-medium text-[#C89F56]">
            Clinic & Academy
          </span>
        </div>
        <span
          className="text-[9px] tracking-[0.18em] uppercase font-sans font-medium leading-tight mt-0.5"
          style={{ color: mutedColor }}
        >
          Race Course · Dehradun
        </span>
      </div>
    </div>
  );
};
