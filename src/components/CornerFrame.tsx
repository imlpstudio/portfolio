// CornerFrame.tsx
export default function CornerFrame({
  children,
  corner = 40,      // px length of the L
  stroke = 2,       // px border thickness
  color = "#0E7C66",
  radius = 12,      // px corner radius
  offset = 6,       // px how far outside the image
  className = "",
}: {
  children: React.ReactNode;
  corner?: number; stroke?: number; color?: string;
  radius?: number; offset?: number; className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      {children}

      {/* top-left corner */}
      <span
        aria-hidden
        className="pointer-events-none absolute"
        style={{
          top: -offset, left: -offset, width: corner, height: corner,
          borderTop: `${stroke}px solid ${color}`,
          borderLeft: `${stroke}px solid ${color}`,
          borderTopLeftRadius: radius,
        }}
      />

      {/* top-right corner */}
      <span
        aria-hidden
        className="pointer-events-none absolute"
        style={{
          top: -offset, right: -offset, width: corner, height: corner,
          borderTop: `${stroke}px solid ${color}`,
          borderRight: `${stroke}px solid ${color}`,
          borderTopRightRadius: radius,
        }}
      />
    </div>
  );
}
