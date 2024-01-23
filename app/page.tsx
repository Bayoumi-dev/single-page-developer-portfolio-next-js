import { ButtonLink } from "@/ui/components/buttons";
import ContactForm from "@/ui/components/contact-form";
import MainHeading from "@/ui/components/hero/main-heading";
import ProfilePicture from "@/ui/components/hero/profile-picture";
import ProjectsList from "@/ui/components/projects/projects-list";
import SkillsList from "@/ui/components/skills/skills-list";
import Divider from "@/ui/layout/divider";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero relative">
        <div className="decor absolute top-0 left-1/2 -translate-x-1/2 -z-1 w-full max-w-480 h-full" />
        <div className="container xl:relative">
          <div
            className="relative flex items-center justify-center md:block md:absolute md:top-0 md:right-0 -z-1 
          after:absolute after:bottom-0 after:right-[-10.3125rem] after:w-[8.0625rem] after:h-[8.0625rem] 
          after:border after:border-white after:rounded-full md:after:right-0 md:after:translate-x-1/2 
          xl:after:bottom-[4.375rem] xl:after:left-0 xl:after:-translate-x-1/2"
          >
            <ProfilePicture />
          </div>
          <div className="pt-10 pb-22 text-center md:text-start md:pt-[9.375rem] md:pb-18 xl:pt-[12.375rem] xl:pb-[13.625rem]">
            <MainHeading />
            <ButtonLink to="#contact">Contact Me</ButtonLink>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills relative">
        <div className="decor absolute top-0 left-1/2 -translate-x-1/2 -z-1 w-full max-480 h-full" />
        <div className="container relative py-10 md:pt-13 md:pb-0 xl:pt-18">
          <Divider />
          <h2 className="absolute opacity-0 -z-10">Skills</h2>
          <SkillsList />
        </div>
      </section>

      {/* Projects Section */}
      <section className="">
        <div className="container relative py-20 md:py-25 xl:py-35">
          <Divider className={"md: hidden"} />
          <div className="flex flex-wrap justify-between items-center gap-2">
            <h2>Projects</h2>
            <ButtonLink to="#contact" className="flex-shrink-0 pt-0">
              Contact Me
            </ButtonLink>
          </div>
          <ProjectsList />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact relative z-1 bg-grey-dark">
        <div className="decor absolute top-0 left-1/2 -translate-x-1/2 -z-1 w-full max-w-480 h-full" />
        <div className="container pt-15 pb-22 md:pt-21 md:pb-23 md:flex flex-col xl:flex-row items-center xl:items-start xl:justify-between">
          <div className="max-w-[27.8125rem] text-center xl:text-start">
            <h2 className="">Contact</h2>
            <p className="mt-5 mb-12 xl:mt-9 xl:mb-0">
              I would love to hear about your project and how I could help.
              Please fill in the form, and I’ll get back to you as soon as
              possible.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
