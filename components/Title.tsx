import { cn } from "@/lib/utils";
import React from "react";
interface Props {
  children: React.ReactNode;
  className?: string;
}
const Title = ({ children }: Props) => {
  return (
    <h2 className={cn("text-xl text-lightSky font-bold mb-4")}>{children}</h2>
  );
};

export default Title;
