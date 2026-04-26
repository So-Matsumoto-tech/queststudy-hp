import { ImageResponse } from 'next/og';

export const alt =
  'QuestStudy — 中学受験 × AI × RPGで、親子の対立をなくす。';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Google Fonts CSS から woff2 URL を抽出して fetch する。
// `text=` で必要な文字だけサブセット化し、woff2 サイズを最小化。
async function loadFont(family: string, weight: 400 | 700, text: string) {
  const css = await fetch(
    `https://fonts.googleapis.com/css2?family=${family.replace(
      / /g,
      '+',
    )}:wght@${weight}&text=${encodeURIComponent(text)}&display=swap`,
    {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      },
    },
  ).then((r) => r.text());

  const url = css.match(/src:\s*url\((https:\/\/[^)]+)\)/)?.[1];
  if (!url) throw new Error(`Font URL not found in CSS for ${family}`);
  return fetch(url).then((r) => r.arrayBuffer());
}

const SUBSET =
  '挑め、クエスト。エンディングは「合格」だ中学受験×AIRPGで親子の対立をなくすQuestStudy ';

export default async function OgImage() {
  const [biz700, inter700] = await Promise.all([
    loadFont('BIZ UDPGothic', 700, SUBSET),
    loadFont('Inter', 700, 'QuestStudy'),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: '#ffffff',
          backgroundImage:
            'radial-gradient(circle at 82% 18%, rgba(5,150,105,0.18), transparent 55%), radial-gradient(circle at 14% 82%, rgba(5,150,105,0.08), transparent 55%)',
          fontFamily: 'BIZ UDPGothic',
          padding: '72px 80px',
          position: 'relative',
        }}
      >
        {/* logo (compass + wordmark) */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 18,
            color: '#065f46',
          }}
        >
          <svg width="56" height="56" viewBox="0 0 44 44">
            <circle
              cx="22"
              cy="22"
              r="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            />
            <path
              d="M 22 4 L 26 22 L 22 40 L 18 22 Z"
              fill="currentColor"
            />
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
          </svg>
          <span
            style={{
              fontFamily: 'Inter',
              fontSize: 40,
              fontWeight: 700,
              letterSpacing: -1,
            }}
          >
            QuestStudy
          </span>
        </div>

        {/* spacer */}
        <div style={{ display: 'flex', flex: 1 }} />

        {/* hero text */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              fontSize: 132,
              fontWeight: 700,
              color: '#0e1116',
              letterSpacing: -3.3,
              lineHeight: 1.05,
            }}
          >
            挑め、<span style={{ color: '#059669' }}>クエスト</span>。
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 56,
              fontWeight: 700,
              letterSpacing: -0.8,
              lineHeight: 1.25,
              marginTop: 28,
            }}
          >
            <span style={{ color: '#0e1116' }}>エンディングは</span>
            <span style={{ color: '#059669' }}>「合格」</span>
            <span style={{ color: '#0e1116' }}>だ。</span>
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 30,
              fontWeight: 700,
              color: '#6b7280',
              marginTop: 36,
              letterSpacing: 0.5,
            }}
          >
            中学受験 × AI × RPGで、親子の対立をなくす。
          </div>
        </div>

        {/* bottom rule */}
        <div
          style={{
            display: 'flex',
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 8,
            background: '#059669',
          }}
        />
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'BIZ UDPGothic', data: biz700, weight: 700, style: 'normal' },
        { name: 'Inter', data: inter700, weight: 700, style: 'normal' },
      ],
    },
  );
}
