import Logo from "../components/logo";
import SocialMedia from "../components/social-media";
import Divider from "./divider";

export default function Footer() {
  return (
    <footer className="bg-grey-dark">
      <div className="container relative pt-10 pb-15 md:pt-[1.875rem] md:pb-10 xl:pt-12 xl:pb-23 flex flex-col md:flex-row items-center md:justify-between gap-4">
        <Divider />
        <Logo />
        <SocialMedia />
      </div>
    </footer>
  );
}
