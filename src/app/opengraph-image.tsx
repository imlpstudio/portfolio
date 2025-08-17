import { ImageResponse } from "next/og";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div style={{ display:"flex", width:"100%", height:"100%", background:"#0a0a0a", color:"#fff", alignItems:"center", justifyContent:"center" }}>
        <div style={{ fontSize:64, fontWeight:800 }}>IMLP Studio</div>
      </div>
    ), size
  );
}
