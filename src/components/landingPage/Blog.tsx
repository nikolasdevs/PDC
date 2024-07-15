import ArrowRightCircleIcon from "@heroicons/react/24/outline/ArrowRightCircleIcon";
import BlogImg1 from "../../assets/blog-post/BlogImg1.png";
import BlogImg2 from "../../assets/blog-post/BlogImg2.png";

export default function Blog() {
  return (
    <div className=" text-center">
      <div className=" flex flex-col gap-4 items-center w-full mt-16 md:mt-32">
        <div className="w-full text-6xl leading-tight font-bold">
          <p className=" text-accent text-sm">Blog</p>
        </div>
        <div className="w-full md:w-1/2 text-4xl font-bold">
          <p>Read our latest story</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center mt-10 justify-center gap-6 w-full">
        <div className="flex flex-col items-center gap-8 p-6 h-auto w-full  md:w-1/2">
          <div>
            <img src={BlogImg1} />
          </div>
          <div className=" flex flex-col items-start text-start gap-3">
            <p className=" text-accent text-sm font-semibold">Development</p>
            <p className="font-semibold">
              The algorithm that drives the world crazy
            </p>
            <div className=" flex w-full items-end justify-between gap-2">
              <h4 className=" w-full text-grey-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Placerat fermentum, enim vel adipiscing non. Lacus, nunc, at et
                vel hggus dignissim quis.
              </h4>
              <ArrowRightCircleIcon className="h-6 w-6 text-accent " />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-8 p-6 h-auto  w-full  md:w-1/2">
          <div>
            <img src={BlogImg2} />
          </div>
          <div className=" flex flex-col items-start text-start gap-3">
            <p className=" text-accent text-sm font-semibold">Career</p>
            <p className="font-semibold">Developers and the world of AI</p>
            <div className="flex w-full items-end justify-between gap-2">
              <h4 className="w-full text-grey-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Placerat fermentum, enim vel adipiscing non. Lacus, nunc, at et
                vel hggus dignissim quis.
              </h4>
              <ArrowRightCircleIcon className="h-6 w-6 text-accent" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
