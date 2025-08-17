import Container from "./Container";
import SocialLinks from "./SocialLinks";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t py-10 mt-16">
      <Container>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-sm text-neutral-600">© {new Date().getFullYear()} {site.name}</p>
          <SocialLinks />
        </div>
      </Container>
    </footer>
  );
}
