import Image from 'next/image';

interface LogoProps {
  height?: number;
  priority?: boolean;
  showText?: boolean;
}

/**
 * QuestStudy Logo — 新ブランド版（オレンジQマーク）
 * showText=true の時はマーク + "QuestStudy" テキストを横並び表示
 */
export function Logo({ height = 40, priority = false, showText = true }: LogoProps) {
  return (
    <div className="inline-flex items-center gap-3">
      <Image
        src="/logo/queststudy-logo.png"
        alt="QuestStudy"
        width={height}
        height={height}
        priority={priority}
        className="object-contain"
      />
      {showText && (
        <span
          className="font-display text-brand-parchment leading-none"
          style={{ fontSize: `${height * 0.55}px`, letterSpacing: '0.02em' }}
        >
          QuestStudy
        </span>
      )}
    </div>
  );
}
