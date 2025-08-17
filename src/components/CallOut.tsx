import { Info } from "lucide-react";

export default function Callout({
  children,
  icon = <Info className="h-5 w-5" />,
}: {
  children: React.ReactNode;
  icon?: React.ReactNode;
}) {
  return (
    <div className="not-prose flex items-start gap-3 rounded-xl border bg-neutral-50 p-4">
      <div className="mt-0.5 text-neutral-600">{icon}</div>
      <div className="text-[15px] leading-6 text-neutral-800">{children}</div>
    </div>
  );
}
