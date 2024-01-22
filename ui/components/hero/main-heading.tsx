export default function MainHeading() {
  return (
    <>
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
    </>
  );
}
