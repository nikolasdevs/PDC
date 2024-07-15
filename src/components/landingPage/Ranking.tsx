import { Button } from "@mui/material";
import rankingImg from "../../assets/images/ranking-img.png";
import { Link } from "react-router-dom";

export default function Ranking() {
  return (
    <div className="w-full flex md:flex-row flex-col gap-12 md:gap-8 md:justify-between items-start mt-32">
      <div className="md:hidden flex flex-col gap-2 ">
        <div className="w-full text-6xl leading-tight font-bold">
          <p className=" text-accent text-sm">Ranking</p>
        </div>
        <div className="w-full text-4xl font-bold">
          <p>Our Leaderboard</p>
        </div>
      </div>

      <div className="w-full md:w-1/2">
        <img src={rankingImg} alt="A tech image" />
      </div>
      <div className="md:w-1/2 flex flex-col gap-4">
        <div className="hidden md:flex md:flex-col md:gap-4">
          <div className="w-full text-6xl leading-tight font-bold">
            <p className=" text-accent text-sm">Ranking</p>
          </div>
          <div className="w-full text-4xl font-bold">
            <p>Our Leaderboard</p>
          </div>
        </div>
        <div className="w-full ">
          <p>
            Our Leaderboard showcases the prowess and dedication of our
            community members. It's not just a list of names; it's a testament
            to the hard work, creativity, and passion that drives each
            participant towards their goals. Whether you're vying for the top
            spot in our Daily, Monthly, or Yearly Challenges, the Leaderboard is
            where your efforts are acknowledged and celebrated. It's a stage
            where your achievements shine bright and inspire others to push
            their boundaries.
          </p>
        </div>
        <div className="mt-4">
          <Link to="/register">
            <Button
              type="button"
              className=" py-4 px-8 rounded-xl font-semibold"
            >
              Join Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
