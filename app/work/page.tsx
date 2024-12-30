"use client";
import PageLayout from "@/components/PageLayout";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import bookstore from "@/images/bookstore.png";
import simpleecommerce from "@/images/simple-ecommerce.png";
import appointment from "@/images/appointment.png";
import carshowcase from "@/images/car.png";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Separator } from "@radix-ui/react-separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: "01",
    title: "The Book Hub System",
    category: "Full Stack Development",
    description:
      "A modern e-commerce platform built with Next.js to provide a seamless shopping experience of new and pre-owned books to customers. User can aslo sell their used books on this platform.",
    stack: ["Next.js", "Tailwind Css", "MongoDB", "Node.js", "Express.js"],
    image: bookstore,
    liveUrl: "/",
    githubUrl: "https://github.com/stha07ashok/BookStore",
  },
  {
    id: "02",
    title: "The Appointment System",
    category: "Full Stack Development",
    description:
      "The Appointment System is a full stack application built with React.js, MongoDb and Express.js. It allows user to book an appointment with the doctor and also allows admin to manage the appointments and doctors. User can also send message to the admin using message option.",
    stack: ["Next.js", "Tailwind Css", "MongoDB", "Node.js", "Express.js"],
    image: appointment,
    liveUrl: "/",
    githubUrl: "https://github.com/stha07ashok/Appointment-Project",
  },
  {
    id: "03",
    title: "Simple E-commerce",
    category: "Full Stack Development",
    description:
      "A simple interactive e-commerce platform built with React.js, Node.js, Express.js and MongoDb which user can simple add, remove and edit the products. This project is built to understand the basic concept of e-commerce platform and how full stack application is built",
    stack: ["Next.js", "Tailwind Css", "MongoDB", "Node.js", "Express.js"],
    image: simpleecommerce,
    liveUrl: "https://mern-simple-e-commerce-project.onrender.com/",
    githubUrl: "https://github.com/stha07ashok/MERN-simple-E-commerce-project",
  },
  {
    id: "04",
    title: "Car Showcase",
    category: "Frontend Development",
    description:
      "A sleek and responsive web application that allows users to explore and showcase a variety of cars. The platform features a dynamic search functionality, user-friendly design, and efficient database integration to manage car details.",
    stack: ["Next.js", "Tailwind Css", "Typescript"],
    image: carshowcase,
    liveUrl:
      "https://nextjs-car-showcase-git-main-ashok-shresthas-projects-d61f8c93.vercel.app/",
    githubUrl: "https://github.com/stha07ashok/Nextjs_Car_Showcase",
  },
];

const WorkPage = () => {
  return (
    <div className="py-6 md:py-12">
      <PageLayout>
        <Carousel opts={{ align: "start", loop: true }} className="w-full ">
          <CarouselContent>
            {projects?.map((project) => (
              <CarouselItem key={project.id}>
                <Card className="bg-bodyColor border-lightSky/20">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:space-x-8 group">
                      {/* description */}
                      <div className="w-full md:w-1/2 order-2 md:order-1 mb-8 md:mb-0 ">
                        <div className="space-y-3 md:space-y-6 ,t-4 md:mt-0">
                          <h2 className="text-4xl md:text-8xl leading-none font-extrabold text-transparent text-outline">
                            {project?.id}
                          </h2>
                          <h3 className="text-xl md:text-3xl font-bold leading-none text-white group-hover:text-lightSky hoverEffect">
                            {project?.category}
                          </h3>
                          <p className="text-white/60 text-sm md:text-base leading-6 md:leading-normal">
                            {project?.description}
                          </p>
                          <ul className="flex flex-wrap md:flex-mowrap gap-2 md:gap-4 items-center">
                            {project?.stack?.map((item, index) => (
                              <li
                                key={index}
                                className="text-xs md:text-base text-lightSky/80"
                              >
                                {item}
                                {index !== project.stack.length - 1 && ","}
                              </li>
                            ))}
                          </ul>
                          <Separator className="bg-grey-700" />
                          <div className="flex items-center space-x-4">
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger>
                                  <Button
                                    variant="outline"
                                    size="icon"
                                    className="bg-lightSky/5 text-white/80 border-lightSky/20 border  hover:bg-lightSky/20 hover:border-lightSky hover:text-hoverColor hoverEffect"
                                  >
                                    <Link
                                      href={project?.liveUrl}
                                      target="_blank"
                                    >
                                      <ArrowUpRight />{" "}
                                      <span className="sr-only">
                                        View Live Project
                                      </span>
                                    </Link>
                                  </Button>
                                </TooltipTrigger>
                                <TooltipContent className="bg-white text-black font-semibold p-1 rounded-md">
                                  <p>View Live Project</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger>
                                  <Button
                                    variant="outline"
                                    size="icon"
                                    className="bg-lightSky/5 text-white/80 border-lightSky/20 border  hover:bg-lightSky/20 hover:border-lightSky hover:text-hoverColor hoverEffect"
                                  >
                                    <Link
                                      href={project?.githubUrl}
                                      target="_blank"
                                    >
                                      <Github />{" "}
                                      <span className="sr-only">
                                        View Github Repository
                                      </span>
                                    </Link>
                                  </Button>
                                </TooltipTrigger>
                                <TooltipContent className="bg-white text-black font-semibold p-1 rounded-md">
                                  <p>View Github Repository</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </div>
                        </div>
                      </div>
                      {/* image */}
                      <div className="w-full h-full md:w-1/2 order-1 md:order-2">
                        <div className="relative h-72 sm:h-96  bg-gray-700 rounded-lg overflow-hidden">
                          <Image
                            src={project?.image}
                            alt={project?.title}
                            fill
                            className="object-fill"
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute right-10 -bottom-8">
            <CarouselPrevious className="rounded-md bg-transparent border border-lightSky/20 hover:bg-hoverColor/20 hover:text-white hover:border-hoverColor p-5 hoverEffect " />
            <CarouselNext className="rounded-md bg-transparent border border-lightSky/20 hover:bg-hoverColor/20 hover:text-white hover:border-hoverColor p-5 hoverEffect " />
          </div>
        </Carousel>
      </PageLayout>
    </div>
  );
};

export default WorkPage;
