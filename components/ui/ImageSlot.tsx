interface ImageSlotProps {
  width?: number;
  height?: number;
  className?: string;
  label?: string;
}

export default function ImageSlot({
  width = 400,
  height = 300,
  className = "",
  label = "Image",
}: ImageSlotProps) {
  return (
    <div
      role="img"
      aria-label={label}
      style={{ width: "100%", aspectRatio: `${width} / ${height}` }}
      className={`flex items-center justify-center rounded-lg bg-gray-100 text-gray-400 text-sm ${className}`}
    >
      <span>{label}</span>
    </div>
  );
}
