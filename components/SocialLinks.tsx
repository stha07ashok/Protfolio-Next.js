import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";

const socialData = [
  {
    title: "Facebook",
    icon: <Facebook />,
    href: "https://www.facebook.com/ashokshrestha2003",
  },
  { title: "Github", icon: <Github />, href: "https://github.com/stha07ashok" },
  {
    title: "LinkedIn",
    icon: <Linkedin />,
    href: "https://www.linkedin.com/in/ashok-shrestha-a295b3235/",
  },
  {
    title: "Instagram",
    icon: <Instagram />,
    href: "https://www.instagram.com/_stha07ashok_/",
  },
];

const SocialLinks = () => {
  return (
    <TooltipProvider>
      {" "}
      <div className="flex items-center gap-4 my-4">
        {socialData.map((item) => (
          <Tooltip key={item?.title}>
            <TooltipTrigger asChild>
              <div className="text-lightSky/80 border border-lightSky/30 p-2.5 rounded-full hover:bg-lightSky/10 hover:border-lightSky hoverEffect">
                <Link href={item?.href} target="_blank">
                  <span>{item?.icon}</span>
                </Link>
              </div>
            </TooltipTrigger>
            <TooltipContent className="bg-hoverColor text-black font-semibold rounded-lg">
              {item?.title}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default SocialLinks;
