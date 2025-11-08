import * as React from "react";

type PostedAtMarkProps = {
  /** When the item was posted (Date, ISO string, or epoch ms) */
  timestamp: Date | string | number;
  className?: string;
};

function toDate(v: Date | string | number): Date {
  return v instanceof Date ? v : new Date(v);
}

function timeAgo(d: Date): string {
  const rtf = new Intl.RelativeTimeFormat("fr", { numeric: "auto" });
  const now = Date.now();
  const diffSec = Math.round((d.getTime() - now) / 1000);

  const units: [Intl.RelativeTimeFormatUnit, number][] = [
    ["year", 60 * 60 * 24 * 365],
    ["month", 60 * 60 * 24 * 30],
    ["week", 60 * 60 * 24 * 7],
    ["day", 60 * 60 * 24],
    ["hour", 60 * 60],
    ["minute", 60],
    ["second", 1],
  ];

  for (const [unit, sec] of units) {
    const amt = Math.trunc(diffSec / sec);
    if (Math.abs(amt) >= 1) return rtf.format(amt, unit);
  }
  return rtf.format(0, "second");
}

const PostedAtMark: React.FC<PostedAtMarkProps> = ({ timestamp, className }) => {
  const date = toDate(timestamp);
  if (Number.isNaN(date.getTime())) return null;

  const label = timeAgo(date);
  const exact = date.toLocaleString("fr-FR");

  return (
    <span
      className={["w-fit block text-xs bg-primary/10 text-primary px-2 py-1 rounded-md", className]
        .filter(Boolean)
        .join(" ")}
      title={exact}
      aria-label={exact}
    >
      {label}
    </span>
  );
};

export default PostedAtMark;