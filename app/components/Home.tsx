import Typewriter from "./Typewriter";
export default function Home() {
  return (
    <section id="home" className="section-1 min-h-20">
      <div className="container mx-auto px-4 md:py-80 py-20">
        <div className="">
          <div className="flex flex-col-reverse md:flex-row items-center">

            <div className="w-full md:w-1/2 text-center md:text-left mb-12 md:mb-0 order-1 md:order-1">
              <h2 className="mid-font font-light text-4xl pt-2">HI, I&apos;M A FREELANCER</h2>
              <h1 className="fw-bold text-5xl main-font font-bold">
                <Typewriter />
                <span className="typing-cursor">|</span>
              </h1>
              <p className="co-font text-xl mt-3">based in Islamabad, Pakistan</p>

              <div className="mt-4 flex flex-col md:flex-row gap-3 justify-center md:justify-start items-center">
                <a href="#portfolio">
                  <button className="bg-white text-black py-2  px-4 rounded-md shadow-xl cursor-pointer">View My Works</button>
                </a>
                <a href="#contact" className="text-white font-semibold underline">
                  Contact Me <i className="fa-regular fa-circle-down ms-1"></i>
                </a>
              </div>
            </div>

            {/* Right Side Image */}
            <div className="w-full md:w-1/2 text-center order-2 md:order-2">
              <img
                src="/dp.jpg"
                alt="Callum"
                className="img-fluid rounded-full border-white border-[5px] shadow mx-auto"
                style={{ maxWidth: "300px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
