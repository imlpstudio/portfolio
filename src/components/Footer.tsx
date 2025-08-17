import Container from "./Container";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="border-t py-10">
      <Container className="flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-sm text-neutral-600">© {new Date().getFullYear()} IMLP Studio</p>
        <SocialLinks />
      </Container>
    </footer>
  );
}
