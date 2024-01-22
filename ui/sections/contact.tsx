import ContactForm from "../components/contact-form";

export default function ContactSection() {
  return (
    <section id="contact" className="contact relative z-1 bg-grey-dark">
      <div className="decor absolute top-0 left-1/2 -translate-x-1/2 -z-1 w-full max-w-[1920px] h-full" />
      <div className="container pt-15 pb-22 md:pt-21 md:pb-23 md:flex flex-col xl:flex-row items-center xl:items-start xl:justify-between">
        <div className="max-w-[27.8125rem] text-center xl:text-start">
          <h2 className="">Contact</h2>
          <p className="mt-5 mb-12 xl:mt-9 xl:mb-0">
            I would love to hear about your project and how I could help. Please
            fill in the form, and I’ll get back to you as soon as possible.
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
