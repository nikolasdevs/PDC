import ArrowRightCircleIcon from "@heroicons/react/24/outline/ArrowRightCircleIcon";

interface CardProps {
  image: string;
  title: string;
  description: string;
}

export default function Services(props: CardProps) {
  return (
    <div className="h-auto w-96 flex flex-col items-start justify-start text-start gap-4 md:h-96 p-6 rounded-xl">
      <img src={props.image} alt="service picture" />
      <h4 className="text-2xl font-bold"> {props.title}</h4>
      <div className="flex w-full items-end justify-between gap-4">
        <h4 className="w-5/6"> {props.description}</h4>{" "}
        <ArrowRightCircleIcon className="h-6 w-6 text-accent " />
      </div>
    </div>
  );
}
