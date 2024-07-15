import { Link } from "react-router-dom";
import heroImg from "../../assets/images/hero-img.png";

export default function Hero() {
  return (
    <div className=" flex md:flex-row flex-col items-center gap-8 md:justify-between w-full mt-16">
      <div className="md:w-1/2 w-full flex flex-col gap-8 md:gap-4 items-start text-start">
        <div className="w-full text-5xl lg:text-6xl font-bold ">
          <p className="leading-tight">
            Unleash your Coding Potential with{" "}
            <span className=" text-accent lg:text-6xl">ProDeveloperClub.</span>
          </p>
        </div>
        <div className="md:hidden block">
          <img src={heroImg} alt="A tech image" />
        </div>
        <div className="w-full text-base">
          <p>
            We're more than just a platform. We're your gateway to endless
            coding challenges, vibrant community engagement, and unparalleled
            growth opportunities.
          </p>
        </div>
        <div className="w-full flex flex-col lg:flex-row gap-4 mt-4  md:gap-10 font-semibold">
          <button className="py-4 px-8 rounded-xl font-semibold ">
            {" "}
            <Link to="/register" type="button">
              Get Started
            </Link>
          </button>
          <button type="button" className="py-4 px-8 rounded-xl border">
            Learn More
          </button>
        </div>
      </div>
      <div className="md:block hidden">
        <img src={heroImg} alt="A tech image" />
      </div>
    </div>
  );
}