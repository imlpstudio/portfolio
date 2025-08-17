import type { Metadata } from "next";
import { notFound } from "next/navigation";

const PROJECTS: Record<
  string,
  () => Promise<{ default: React.ComponentType; meta?: Metadata }>
> = {
  "tape-master": () => import("../_projects/tape-master"),
  "frequency-emitter": () => import("../_projects/frequency-emitter"),
  "ergonomic-fixture": () => import("../_projects/ergonomic-fixture"),
  "esp32-logger": () => import("../_projects/esp32-logger"),
};

export function generateStaticParams() {
  return Object.keys(PROJECTS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const loader = PROJECTS[params.slug];
  if (!loader) return {};
  const mod = await loader();
  return mod.meta ?? {};
}

export default async function WorkDetailPage({ params }: { params: { slug: string } }) {
  const loader = PROJECTS[params.slug];
  if (!loader) return notFound();
  const mod = await loader();
  const Project = mod.default;
  return <Project />;
}
