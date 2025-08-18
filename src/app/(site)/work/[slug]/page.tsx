import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = { params: { slug: string } };

const PROJECTS: Record<
  string,
  () => Promise<{ default: React.ComponentType; meta?: Metadata }>
> = {
  "tape-master": () => import("../_projects/tape-master"),
  "ergonomic-brush": () => import("../_projects/brush"),
  "tibetan-smacker": () => import("../_projects/tibetan-smacker"),
  // Add these back only when their pages exist:
  // "ergonomic-fixture": () => import("../_projects/ergonomic-fixture"),
  // "esp32-logger": () => import("../_projects/esp32-logger"),
};

export function generateStaticParams() {
  return Object.keys(PROJECTS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const load = PROJECTS[params.slug];
  if (!load) return {};
  const mod = await load();
  return mod.meta ?? {};
}

export default async function Page({ params }: Props) {
  const load = PROJECTS[params.slug];
  if (!load) notFound();
  const mod = await load();
  const Project = mod.default;
  return <Project />;
}
