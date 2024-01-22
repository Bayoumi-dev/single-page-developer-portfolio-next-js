import Logo from "../components/logo";
import SocialMedia from "../components/social-media";

export default function Header() {
  return (
    <header className="header absolute top-0 w-full z-1000">
      <div className="container flex flex-col md:flex-row items-center md:justify-between pt-6 gap-6 md:!pt-10 md:pr-8">
        <Logo />
        <SocialMedia />
      </div>
    </header>
  );
}
