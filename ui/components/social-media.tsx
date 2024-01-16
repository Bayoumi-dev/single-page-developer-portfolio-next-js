import {
  GithubIcSvg,
  FrontendMentorIcSvg,
  LinkedinIcSvg,
  XIcSvg,
} from "@/ui/utils/svg";

const links: { name: String; href: String; icon: JSX.Element }[] = [
  {
    name: "github",
    href: "https://github.com/",
    icon: <GithubIcSvg />,
  },
  {
    name: "frontend mentor",
    href: "https://www.frontendmentor.io/",
    icon: <FrontendMentorIcSvg />,
  },
  {
    name: "linkedin",
    href: "https://linkedin.com/",
    icon: <LinkedinIcSvg />,
  },
  {
    name: "x",
    href: "https://x.com/",
    icon: <XIcSvg />,
  },
];

export default function SocialMedia() {
  return (
    <ul className="social-list flex items-center gap-6">
      {links.map((link, i) => (
        <li key={i}>
          <a
            href={`${link.href}`}
            target="_blank"
            aria-label={`${link.name} profile`}
            className="social-link"
          >
            {link.icon}
          </a>
        </li>
      ))}
    </ul>
  );
}
