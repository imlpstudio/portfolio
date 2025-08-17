export type CaseStudy = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  cover?: string; // /public path
  date: string;   // ISO
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "tape-master",
    title: "Tape Master — Magnetic Tape Holder & Dispenser",
    summary:
      "Ergonomic, waist-holsterable tape system with magnetic retention and quick indexing.",
    tags: ["Ergonomics", "Prototyping", "Manufacturing"],
    cover: "/covers/tape-master.jpg",
    date: "2025-07-20"
  },
  {
    slug: "frequency-emitter",
    title: "Bedside Frequency Emitter",
    summary:
      "Bone-conduction device for sleep with ESP32 control and safe power system.",
    tags: ["Electronics", "ESP32", "DFM"],
    cover: "/covers/frequency.jpg",
    date: "2025-06-26"
  },
];
