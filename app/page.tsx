import Container from "@/components/Container";
import HomeDescription from "@/components/HomeDescription";
import PageLayout from "@/components/PageLayout";
import Photo from "@/components/Photo";
import SocialLinks from "@/components/SocialLinks";
// import Statistics from "@/components/Statistics";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function Home() {
  return (
    <PageLayout>
      <div className="bg-bodyColor text-white/80 max-h-screen ">
        <Container className="py-11  mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col items-center md:items-start gap-5 md:gap-7 text-center md:text-start">
            <div>
              <h3 className="font-semibold tracking-wider mb-2 my-6">
                Full Stack Developer
              </h3>
              <h2 className="text-3xl md:text-5xl mb-2 text-white my-4">
                Hello I&apos;m
              </h2>
              <h1 className="text-hoverColor text-5xl md:text-7xl tracking-normal my-6">
                Ashok Shrestha
              </h1>
            </div>
            <div className="w-full h-[170px] md:h-[140PX] relative">
              <div className="absolute top-0 left-0 w-full h-full">
                <HomeDescription />
              </div>
            </div>

            <a
              href="./resume.pdf" // Link to your CV PDF
              download="resume.pdf" // This prompts the browser to download the file
            >
              <Button className="bg-transparent rounded-full border border-lightSky/50 text-lightSky hover:bg-hoverColor hover:text-black hoverEffect h-11 my-6">
                Download CV <Download />
              </Button>
            </a>
            <SocialLinks />
            {/* <Statistics /> */}
          </div>

          {/* Photo section */}
          <Photo />
        </Container>
      </div>
    </PageLayout>
  );
}
