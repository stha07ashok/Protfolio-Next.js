"use client";
import { navbarData } from "@/constants";
import Container from "./Container";
import Logo from "./Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import Sidebar from "./Sidebar";
import { useState } from "react";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();
  console.log(pathname);
  return (
    <header className="border-b border-b-hoverColor bg-bodyColor text-white sticky top-0 z-50">
      <Container className="py-5 flex items-center justify-between">
        <Logo title="Ashok" subtitle="." />
        <div className="hidden md:flex items-center gap-7 text-sm uppercase tracking-wide font-medium">
          {navbarData.map((item) => (
            <Link
              key={item?.title}
              href={item?.href}
              className={`hover:text-hoverColor hoverEffect relative group overflow-x-hidden ${
                pathname == item?.href && "text-hoverColor"
              }`}
            >
              {item?.title}
              <span
                className={`w-full h-px bg-hoverColor inline-block absolute left-0 bottom-0 group-hover:translate-x-0 hoverEffect ${
                  pathname === item?.href
                    ? "translate-x-0"
                    : "-translate-x-[150%]"
                }`}
              />
            </Link>
          ))}
          <Link
            href="./resume.pdf"
            target="_blank"
            rel="noopener noreferer "
            className="text-sm bg-lightSkt/10 rounded-md border px-4 py-2 hover:bg-hoverColor hover:border-hoverColor border-hoverColor hover:text-black hoverEffect "
          >
            Hire Me
          </Link>
        </div>
        <button
          aria-label="Toggle-menu"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="inline-flex md:hidden relative hover:text-hoverColor hoverEffect"
        >
          <Menu />
        </button>
      </Container>
      <div className="md-hidden">
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          pathname={pathname}
        />
      </div>
    </header>
  );
};

export default Header;
