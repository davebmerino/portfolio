import ButtonComp from "./ButtonComp";
import SubTitle from "./SubTitle";
import TitleText from "./TitleText";

function ContactForm() {
  return (
    <>
      <section className="flex flex-col max-w-4xl mx-auto items-center justify-center bg-[#f2f2f2] rounded-lg shadow-lg p-6 my-15">
        <SubTitle subTitle="Contact Me" />
        <TitleText title="Get in" span="Touch" />
        <div className="w-full md:w-1/2 text-center mt-6 p-5 ">
          <form
            action="https://formsubmit.co/daveb.merino@gmail.com"
            method="POST"
            className="space-y-4"
          >
            {/* <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="box" />
            <input type="hidden" name="_next" value="/" /> */}

            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-[#f5b754]"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="you@email.com"
                className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-[#f5b754]"
              />
            </div>
            <div>
              <textarea
                rows="4"
                name="message"
                placeholder="Your message"
                className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-[#f5b754]"
              ></textarea>
            </div>
            <ButtonComp text="Send Message" />
          </form>
        </div>
      </section>
    </>
  );
}

export default ContactForm;
