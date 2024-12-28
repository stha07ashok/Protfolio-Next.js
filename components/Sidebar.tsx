import { useOutsideClick } from "@/hooks/use-outside-clicl";
import { X } from "lucide-react";
import React from "react";
import Logo from "./Logo";
import { navbarData } from "@/constants";
import Link from "next/link";
import SocialLinks from "./SocialLinks";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  pathname: string;
}

const Sidebar: React.FC<Props> = ({ isOpen, onClose, pathname }) => {
  const sidebarRef = useOutsideClick<HTMLDivElement>(onClose);

  return (
    <div
      ref={sidebarRef}
      className={`fixed inset-y-0 right-0 z-50 min-w-72 max-w-96 bg-bodyColor border-l border-l-hoverColor/50 shadow-xl transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out`}
    >
      <div className="flex justify-end p-4">
        <button
          onClick={onClose}
          className="hover:text-red-600 hoverEffect"
          aria-label="Close sidebar"
        >
          <X />
        </button>
      </div>
      <nav className="flex flex-col px-5 gap-7 text-sm uppercase tracking-wide font-medium mt-2">
        <Logo title="Ashok" subtitle="." />
        {navbarData.map((item) => (
          <Link
            key={item?.title}
            href={item?.href}
            className={`hover:text-hoverColor hoverEffect ${
              pathname === item?.href && "text-hoverColor"
            }`}
            onClick={onClose}
          >
            {item?.title}
          </Link>
        ))}
        <Link
          href={"/resume.pdf"}
          target="_blank"
          rel="noopener noreferer"
          className="text-sm bg-lightSkt/10 rounded-md border px-4 py-2 hover:bg-hoverColor hover:border-hoverColor border-hoverColor hover:text-black hoverEffect"
          onClick={onClose}
        >
          Hire Me
        </Link>
        <SocialLinks />
      </nav>
    </div>
  );
};

export default Sidebar;
