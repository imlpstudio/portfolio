import { ImageResponse } from "next/og";
import { CASE_STUDIES } from "@/data/caseStudies";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG({ params }: { params: { slug: string } }) {
  const cs = CASE_STUDIES.find(c => c.slug === params.slug)!;
  return new ImageResponse(
    (
      <div style={{ display:"flex", width:"100%", height:"100%", background:"#0a0a0a", color:"#fff", padding:80 }}>
        <div style={{ fontSize:56, fontWeight:800 }}>{cs.title}</div>
      </div>
    ), size
  );
}
