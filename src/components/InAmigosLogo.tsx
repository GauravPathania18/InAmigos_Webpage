import React from 'react';

interface InAmigosLogoProps {
  layout?: 'horizontal' | 'vertical' | 'icon-only';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  theme?: 'auto' | 'light' | 'dark';
}

export const InAmigosLogo: React.FC<InAmigosLogoProps> = ({
  layout = 'horizontal',
  size = 'md',
  className = '',
  theme = 'auto',
}) => {
  // Size mapping for the SVG Emblem
  const emblemSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
    xl: 'w-20 h-20',
  };

  const emblemSizeClass = emblemSizes[size] || emblemSizes.md;

  // Render the official 5-colored human star emblem with IAF center
  const renderEmblem = () => (
    <div className={`relative shrink-0 flex items-center justify-center ${emblemSizeClass}`}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-sm transition-transform duration-1000 ease-in-out group-hover:scale-[1.015]"
      >
        {/* Definition of one human figure sector pointing UP (angle 0) */}
        <defs>
          <g id="iaf-person">
            {/* Round Head */}
            <circle cx="50" cy="16.5" r="6.8" />
            {/* Body and outstretched arms connecting to adjacent points at (-36 deg) and (+36 deg) */}
            <path d="M 50 50 L 21.8 11.2 C 34 22, 40 25.5, 42 26 C 45 26.5, 50 28, 58 26 C 60 25.5, 66 22, 78.2 11.2 Z" />
          </g>
        </defs>

        {/* 5 Rotated Colored Figures forming the official star */}
        {/* 1. Sky Blue (Top-Right: 36 deg) */}
        <use href="#iaf-person" transform="rotate(36, 50, 50)" fill="#1EA2E4" />
        
        {/* 2. Purple / Magenta (Bottom-Right: 108 deg) */}
        <use href="#iaf-person" transform="rotate(108, 50, 50)" fill="#A1208B" />
        
        {/* 3. Emerald Green (Bottom: 180 deg) */}
        <use href="#iaf-person" transform="rotate(180, 50, 50)" fill="#16A04B" />
        
        {/* 4. Golden Yellow (Bottom-Left: 252 deg) */}
        <use href="#iaf-person" transform="rotate(252, 50, 50)" fill="#F7B512" />
        
        {/* 5. Orange / Red (Top-Left: 324 deg / -36 deg) */}
        <use href="#iaf-person" transform="rotate(324, 50, 50)" fill="#F25C22" />

        {/* Center White Starburst Cutout (10 points) */}
        <polygon
          points="50,35 62.6,32.6 64.3,45.4 70.4,56.6 58.8,62.1 50,71.5 41.2,62.1 29.6,56.6 35.7,45.4 37.4,32.6"
          fill="#FFFFFF"
        />

        {/* IAF Text in Center */}
        <text
          x="50"
          y="55"
          textAnchor="middle"
          fontSize="14.5"
          fontWeight="900"
          fill="#111827"
          fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
          letterSpacing="-0.5"
        >
          IAF
        </text>
      </svg>
    </div>
  );

  if (layout === 'icon-only') {
    return <div className={`inline-flex items-center ${className}`}>{renderEmblem()}</div>;
  }

  // Text color styles based on theme
  const titleColor =
    theme === 'light'
      ? 'text-gray-900'
      : theme === 'dark'
      ? 'text-white'
      : 'text-gray-900 dark:text-white';

  const subtitleColor =
    theme === 'light'
      ? 'text-gray-700'
      : theme === 'dark'
      ? 'text-gray-200'
      : 'text-gray-700 dark:text-gray-200';

  const taglineColor =
    theme === 'light'
      ? 'text-gray-500'
      : theme === 'dark'
      ? 'text-gray-400'
      : 'text-gray-500 dark:text-gray-400';

  if (layout === 'vertical') {
    return (
      <div className={`inline-flex flex-col items-center text-center group ${className}`}>
        {renderEmblem()}
        <div className="flex flex-col items-center mt-2">
          <div className="flex items-center gap-0.5">
            <span className={`font-heading font-extrabold text-2xl tracking-tight leading-none ${titleColor}`}>
              InAmigos
            </span>
            <span className="text-xs font-bold text-[#4CAF50] -mt-3">®</span>
          </div>
          <span className={`text-[10px] font-bold tracking-[0.22em] uppercase leading-tight mt-1 ${subtitleColor}`}>
            FOUNDATION
          </span>
          <span className={`text-[10px] font-medium tracking-normal leading-tight mt-0.5 ${taglineColor}`}>
            Uniting Minds for Change
          </span>
        </div>
      </div>
    );
  }

  // Horizontal layout (default for Navbar)
  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl sm:text-2xl',
    lg: 'text-2xl sm:text-3xl',
    xl: 'text-3xl sm:text-4xl',
  };

  const titleSize = textSizeClasses[size] || textSizeClasses.md;

  return (
    <div className={`inline-flex items-center gap-2.5 group ${className}`}>
      {renderEmblem()}
      <div className="flex flex-col justify-center text-left">
        <div className="flex items-center gap-0.5">
          <span className={`font-heading font-extrabold ${titleSize} tracking-tight leading-none ${titleColor}`}>
            InAmigos
          </span>
          <span className="text-xs font-bold text-[#4CAF50] -mt-3">®</span>
        </div>
        <span className={`text-[10px] font-bold tracking-[0.22em] uppercase leading-tight mt-1 ${subtitleColor}`}>
          FOUNDATION
        </span>
        <span className={`text-[9px] font-medium tracking-normal leading-tight mt-0.5 ${taglineColor}`}>
          Uniting Minds for Change
        </span>
      </div>
    </div>
  );
};
