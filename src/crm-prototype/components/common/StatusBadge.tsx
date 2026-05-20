type StatusBadgeProps = {
  tone: "danger" | "neutral" | "success" | "warning";
  value: string;
};

const toneMap = {
  danger: { bg: "#FEF2F2", color: "#EF4444" },
  neutral: { bg: "#EFEFEF", color: "#464646" },
  success: { bg: "#F0FDF4", color: "#22C554" },
  warning: { bg: "#FFF3E8", color: "#D4640F" },
};

export function StatusBadge({ tone, value }: StatusBadgeProps) {
  const style = toneMap[tone];

  return (
    <span
      style={{ backgroundColor: style.bg, color: style.color }}
      className="inline-flex rounded-full px-[8px] py-[2px] text-[12px] font-medium tracking-[-0.24px]"
    >
      {value}
    </span>
  );
}
