import { cn } from "@/lib/utils";
import Link from "next/link";

interface Prpos {
  className?: string;
  title: string;
  subtitle: string;
}
const Logo = ({ className, title, subtitle }: Prpos) => {
  return (
    <div className="text-2xl group">
      <Link href={"/"}>
        <h2
          className={cn(
            "font-semibold hover:text-hoverColor tracking-wide hoverEffect",
            className
          )}
        >
          {title}
          <span className="text-lightSky group-hover:text-white hoverEffect">
            {" "}
            {subtitle}
          </span>
        </h2>
      </Link>
    </div>
  );
};

export default Logo;
