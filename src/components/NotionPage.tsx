export default function NotionPage({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8 py-14 sm:py-20">
      {/* Inner wrapper so the gutter spans this whole section */}
      <div className="relative bg-white pl-6 sm:pl-8">
        {/* left “notebook” border */}
        <span
          aria-hidden
          className="pointer-events-none absolute left-0 top-0 bottom-0 w-[3px] bg-neutral-200"
        />

        <header className="space-y-3">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-black">
            {title}
          </h1>
          {subtitle ? (
            <p className="text-lg text-neutral-700">{subtitle}</p>
          ) : null}
        </header>

        <div className="my-8 h-px bg-neutral-200" />

        <div className="prose prose-neutral max-w-none">{children}</div>
      </div>
    </div>
  );
}
