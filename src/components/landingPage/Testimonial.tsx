import TestimonialImg from "../../assets/images/testimonial-img.png";

export default function Testimonial() {
  return (
    <div className="flex flex-col gap-16">
      <div className=" flex flex-col gap-4 items-center justify-between w-full mt-32 text-center">
        <div className="w-full text-6xl leading-tight font-bold">
          <p className=" text-accent text-sm">Developers Testimonial</p>
        </div>
        <div className="w-full md:w-1/2 text-4xl font-bold">
          <p>What developers say about us</p>
        </div>
      </div>

      <div>
        <img src={TestimonialImg} alt="" />
      </div>
    </div>
  );
}
