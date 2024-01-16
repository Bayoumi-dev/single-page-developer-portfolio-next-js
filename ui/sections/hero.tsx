import ProfilePicture from "@/ui/components/profile-picture";

export default function HeroSection() {
  return (
    <section className="hero relative">
      <div className="decor absolute top-0 left-1/2 -translate-x-1/2 -z-1 w-full max-w-[1920px] h-full" />
      <div className="container xl:relative">
        <div
          className="relative flex items-center justify-center md:block md:absolute md:top-0 md:right-0 -z-1 
          after:absolute after:bottom-0 after:right-[-165px] after:w-[129px] after:h-[129px] 
          after:border after:border-white after:rounded-full md:after:right-0 md:after:translate-x-1/2 
          xl:after:bottom-[70px] xl:after:left-0 xl:after:-translate-x-1/2"
        >
          <ProfilePicture />
        </div>
        <div className="pt-10 pb-22 text-center md:text-start md:pt-[9.375rem] md:pb-18 xl:pt-198 xl:pb-218">
          <h1 className="max-w-[360px] mx-auto md:mx-0 md:max-w-[27.8125rem] xl:max-w-[50rem]">
            Nice to <span className="md:block xl:!inline-block" />
            meet you! I’m{" "}
            <span
              className="relative after:absolute after:bottom-[0.125rem] after:left-0 after:-z-1 after:w-full after:h-1 after:bg-green 
              xl:after:h-[0.375rem] xl:after:bottom-[0.375rem]"
            >
              Adam Keyes
            </span>
            .
          </h1>
          <p className="py-6 md:max-w-[27.8125rem] md:pt-15 md:pb-7 xl:pt-11 xl:pb-15">
            Based in the UK, I’m a front-end developer passionate about building
            accessible web apps that users love.
          </p>
          <a href="#contact" role="button" className="btn">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
