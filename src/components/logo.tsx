import Link from "next/link";
import SvgLogo from "./ui/svg/SvgLogo";

export default function Logo({ title }: { title: string }) {
  return (
    <Link
      href="/"
      className="hover:text-accent-500 transition-colors duration-200"
      aria-label="Forside"
    >
      <SvgLogo
        role="img"
        aria-hidden
        focusable={false}
        className="lg:h-[4.6875rem] lg:w-[5.125rem]"
        title={title}
      />
    </Link>
  );
}
