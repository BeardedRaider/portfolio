interface HeroButtonProps {
  children: string;
  href: string;
  variant?: "primary" | "secondary";
}

export default function HeroButton({
  children,
  href,
  variant = "primary",
}: HeroButtonProps) {
  const base = "px-6 py-3 rounded-full font-medium transition-all duration-300";

  const styles =
    variant === "primary"
      ? "bg-purple-600 text-white hover:bg-purple-700 hover:shadow-lg hover:-translate-y-0.5"
      : "bg-white/20 backdrop-blur-md text-white border border-white/30 hover:bg-white/30 hover:shadow-lg hover:-translate-y-0.5";

  return (
    <a href={href} className={`${base} ${styles}`}>
      {children}
    </a>
  );
}
