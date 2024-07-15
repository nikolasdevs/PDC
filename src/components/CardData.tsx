import Services from "./landingPage/Services";
import cardIcon from "../assets/images/cardIcon.png";

function CardData() {
  return (
    <div className=" w-full ">
      <div className="flex flex-col gap-4 justify-center items-center text-center  w-full mt-32">
        <div className="w-full leading-tight font-bold">
          <p className=" text-accent text-sm">Our Services</p>
        </div>
        <div className="md:w-1/2 text-4xl font-bold">
          <p>We Provides best Feature for customers</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row flex-wrap gap-4 w-full items-center justify-center mt-16 mx-auto">
        <div className=" flex flex-col gap-4 ">
          <Services
            title="Clean Code"
            description="Unlock the Power of Precision, Delve into the Art of Crafting Clean Code for Optimal Efficiency and Seamless Development Experiences on Our Code Website."
            image={cardIcon}
          />
          <Services
            title="Challenges"
            description="Whether you're a beginner eager to take your first steps in programming or a seasoned developer seeking to refine your expertise, our curated collection of challenges offers something for everyone. "
            image={cardIcon}
          />
        </div>
        <div className=" flex flex-col gap-4 md:items-center">
          <Services
            title="Mentorship"
            description="Join Our Community of Experienced Mentors and Passionate Learners, Where Expert Guidance, Personalized Feedback, and Ongoing Support Fuel Your Growth Journey."
            image={cardIcon}
          />
          <Services
            title="24/7 Support"
            description="Lorem ipsum dolor sit amet ecte adipiscing elitIpsum.ghjknlm,;knjbhbkl; Lorem ipsum dolor sit amet ecte adipiscing elitIpsum."
            image={cardIcon}
          />
        </div>
      </div>
    </div>
  );
}

export default CardData;
