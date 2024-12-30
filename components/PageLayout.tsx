"use client";
import Container from "./Container";
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import Footer from "./Footer";
interface Props {
  children: React.ReactNode;
  className?: string;
}
const PageLayout = ({ children, className }: Props) => {
  return (
    <Container className={cn("w-full", className)}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0, duration: 0.2, ease: "easeIn" },
        }}
      >
        {children}
      </motion.div>
    </Container>
  );
};

export default PageLayout;
