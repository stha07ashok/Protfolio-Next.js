"use client";
import PageLayout from "@/components/PageLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Code2, GraduationCap, User } from "lucide-react";
import React from "react";
import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";

const tabMenu = [
  // { title: "Experience", value: "experience", icon: Briefcase },
  { title: "Education", value: "education", icon: GraduationCap },
  { title: "Skills", value: "skills", icon: Code2 },
  { title: "About me", value: "about", icon: User },
];

const tabContent = {
  // experience: {
  //   title: "Professional Experience",
  //   items: [
  //     {
  //       role: "Senior Frontend Developer",
  //       company: "ABC Company",
  //       period: "2023-Present",
  //       description:
  //         "Led the development of multiple React-based web applications, improving performance by 40%. Mentored junior developers and implemented best practices for code quality.",
  //       highlights: ["React", "Next.js", "TypeScript", "Team Leadership"],
  //     },
  //     {
  //       role: "Full Stack Developer",
  //       company: "XYZ Company",
  //       period: "2023-Present",
  //       description:
  //         "Developed and maintained full-stack applications using modern Javascript frameworks. Collaborated with cross-functional teams to deliver high-quality solutions.",
  //       highlights: ["Node.js", "Next.js", "MongoDB", "AWS"],
  //     },
  //   ],
  // },
  education: {
    title: "Educational Background",
    items: [
      {
        degree: "Bachelor in Computer Engineering",
        institution: "IOE Paschimanchal Campus",
        period: "2021-Present",
        description:
          "Studing computer engineering with a focus on software development and computer systems. ",
        achievements: [
          "Average percentage of 70% till now",
          "Website development",
        ],
      },
      {
        degree: "Completed +2 in Science",
        institution: "The Times International College",
        period: "2018-2020",
        description:
          "Completed +2 in Science with a focus on Physics, Chemistry and Mathematics. Specially focused on Compouter Science. ",
        achievements: [
          "3.71 GPA in NEB Examination",
          "Participated in national-level Science Olympiad",
        ],
      },
      {
        degree: "SEE(Secondary Education Examination)",
        institution: "Shree Gyan Prakash Secondary School",
        period: "2007-2018",
        description:
          "Completed SEE(Secondary Education Examination) taken by NEB(National Examination Board). I participated in extra curricular activities and sports. ",
        achievements: [
          "3.70 GPA in NEB Examination",
          "1st place in the inter-school Science Quiz",
        ],
      },
    ],
  },
  skills: {
    title: "Technical Skills",
    categories: [
      {
        name: "Frontend Development",
        description:
          "developing web applications using modern Javascript frameworks",
        skills: [
          "React",
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Framer Motion",
        ],
      },
      {
        name: "Backend Development",
        description: "developing web server and creating api for the frontend",
        skills: ["Node.js", "Express", "MongoDB"],
      },
      // {
      //   name: "Tools and Others",
      //   description:
      //     "Using tools and technologies to improve the development process and deployment of applicatino to the cloud server.  ",
      //   skills: ["Git", "AWS", "Docker"],
      // },
    ],
  },
  about: {
    title: "About me",
    bio: "Passionate Full-Stack Developer with over 1 years of experience in building modern web applications. Commited to writing clean, maintainable code an staying current with emerging technologies. Strong advocate for user-centric design and accessibility.",
    interests: [
      "Open Source Contributing",
      "AI/ML",
      "Web Development",
      "Listening Musics and Watching Movies",
    ],
    languages: ["Nepali (Native)", "English", "Hindi"],
  },
};

const ResumePage = () => {
  return (
    <div className="flex flex-col justify-center py-10">
      <PageLayout>
        <Tabs
          defaultValue="education"
          className="w-full flex flex-col md:flex-row gap-6 md:gap-10"
        >
          <TabsList className="flex md:flex-col md:gap-2 h-full bg-transparent md:w-64 gap-5 ">
            {tabMenu?.map((item) => (
              <TabsTrigger
                key={item?.value}
                value={item?.value}
                className="bg-white/50 w-full py-2.5 text-white data-[state=active]:bg-hoverColor hover:bg-lightSky/50 rounded-md text-xs sm:text-sm"
              >
                <div className="flex items-center gap-1.5 md:w-[50%]">
                  <item.icon className="w-4 h-4 md:h-5 md:w-5" />
                  {item?.title}
                </div>
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="flex-1 min-h-[400px]">
            {/* <TabsContent value="experience">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-2xl font-bold mb-6 text-lightSky"
              >
                {tabContent.experience.title}
              </motion.h2>
              <div className="space-y-6">
                {tabContent?.experience?.items?.map((item, index) => (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.3 }}
                    key={index}
                    className="border rounded-lg border-lightSky/20 p-6"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lf font-semibold">{item?.role}</h3>
                        <p className="text-muted-foregroundß">
                          {item?.company}
                        </p>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="" />
                        {item?.period}
                      </div>
                    </div>
                    <p className="mb-4 text-white">{item?.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.highlights.map((highlight, i) => (
                        <Badge key={i} variant="secondary">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent> */}
            <TabsContent value="education">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-2xl font-bold mb-6 text-lightSky"
              >
                {tabContent.education.title}
              </motion.h2>
              <div className="space-y-6">
                {tabContent?.education?.items?.map((item, index) => (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.3 }}
                    key={index}
                    className="border rounded-lg border-lightSky/20 p-6"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lf font-semibold">
                          {item?.degree}
                        </h3>
                        <p className="text-muted-foregroundß">
                          {item?.institution}
                        </p>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="" />
                        {item?.period}
                      </div>
                    </div>
                    <p className="mb-4 text-white">{item?.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.achievements.map((achievement, i) => (
                        <Badge key={i} variant="secondary">
                          {achievement}
                        </Badge>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="skills">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-2xl font-bold mb-6 text-lightSky"
              >
                {tabContent.skills.title}
              </motion.h2>
              <div className="space-y-6">
                {tabContent?.skills?.categories?.map((item, index) => (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.3 }}
                    key={index}
                    className="border rounded-lg border-lightSky/20 p-6"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lf font-semibold">{item?.name}</h3>
                        <p className="text-muted-foregroundß">
                          {item?.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skills, i) => (
                        <Badge key={i} variant="secondary">
                          {skills}
                        </Badge>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="about">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-2xl font-bold mb-6 text-lightSky"
              >
                {tabContent.about.title}
              </motion.h2>
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="border rounded-lg border-lightSky/20 p-6"
                >
                  <p className="text-white/90 mb-6 text-lg">
                    {tabContent.about.bio}
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Interests</h3>
                      <div className="flex flex-wrap gap-2">
                        {tabContent.about.interests.map((interest, i) => (
                          <Badge key={i} variant="secondary">
                            {interest}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Languages</h3>
                      <div className="flex flex-wrap gap-2">
                        {tabContent.about.languages.map((language, i) => (
                          <Badge key={i} variant="secondary">
                            {language}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </PageLayout>
    </div>
  );
};

export default ResumePage;
