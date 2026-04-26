/**
 * QuestStudy ロゴ — コンパス + Wordmark。
 *
 * MMC (app.queststudy.jp/v2) と共通定義。色は `currentColor` を使い、
 * 親の color プロパティ（例: var(--v2-green-darker)）に追従する。
 */

interface LogoMarkProps {
  size?: number;
  variant?: 'horizontal' | 'mark-only' | 'stacked';
  showTagline?: boolean;
  className?: string;
}

export default function LogoMark({
  size = 32,
  variant = 'horizontal',
  showTagline = false,
  className,
}: LogoMarkProps) {
  if (variant === 'mark-only') {
    return (
      <svg
        viewBox="0 0 44 44"
        width={size}
        height={size}
        role="img"
        aria-label="QuestStudy"
        className={className}
      >
        <CompassMark />
      </svg>
    );
  }

  const totalHeight = showTagline ? size + 14 : size;
  const widthRatio = variant === 'stacked' ? 5 : 7;

  if (variant === 'stacked') {
    return (
      <svg
        viewBox="0 0 200 80"
        width={size * widthRatio * 0.5}
        height={totalHeight * 1.4}
        role="img"
        aria-label="QuestStudy"
        className={className}
      >
        <g transform="translate(78, 0)">
          <CompassMark />
        </g>
        <text
          x="100"
          y="68"
          fontFamily="var(--font-inter), Inter, sans-serif"
          fontWeight="800"
          fontSize="20"
          textAnchor="middle"
          fill="currentColor"
          letterSpacing="-0.5"
        >
          QuestStudy
        </text>
      </svg>
    );
  }

  // horizontal (default)
  return (
    <svg
      viewBox="0 0 220 44"
      width={size * widthRatio}
      height={totalHeight}
      role="img"
      aria-label="QuestStudy"
      className={className}
    >
      <CompassMark />
      <text
        x="56"
        y="29"
        fontFamily="var(--font-inter), Inter, sans-serif"
        fontWeight="800"
        fontSize="22"
        fill="currentColor"
        letterSpacing="-0.5"
      >
        QuestStudy
      </text>
      {showTagline && (
        <text
          x="56"
          y="42"
          fontFamily="var(--font-inter), Inter, sans-serif"
          fontWeight="500"
          fontSize="8"
          fill="currentColor"
          opacity="0.55"
          letterSpacing="3"
        >
          EDUCATION × RPG
        </text>
      )}
    </svg>
  );
}

function CompassMark() {
  return (
    <g>
      <circle
        cx="22"
        cy="22"
        r="20"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <path d="M 22 4 L 26 22 L 22 40 L 18 22 Z" fill="currentColor" />
      <path
        d="M 4 22 L 22 18 L 40 22 L 22 26 Z"
        fill="currentColor"
        opacity="0.35"
      />
      <circle cx="22" cy="22" r="2.8" fill="white" />
      <circle
        cx="22"
        cy="22"
        r="2.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </g>
  );
}
