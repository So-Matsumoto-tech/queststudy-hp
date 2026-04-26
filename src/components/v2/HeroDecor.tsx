/**
 * サブページヒーロー用の軽量装飾。3 つのぼかしオーブ（radial-gradient）
 * を absolute 配置し、CSS keyframes で slow drift。
 *
 * R3F を使わずに「ブランドの動き」を演出する目的。/ の HeroCanvas より
 * 圧倒的に軽く、prefers-reduced-motion でアニメ停止。
 */
export default function HeroDecor() {
  return (
    <div className="v2-hero-decor" aria-hidden="true">
      <div className="v2-hero-decor-orb is-1" />
      <div className="v2-hero-decor-orb is-2" />
      <div className="v2-hero-decor-orb is-3" />
    </div>
  );
}
