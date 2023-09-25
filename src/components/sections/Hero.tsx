import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section id="hero" className="mt-20 md:mt-0 flex flex-col items-center text-center">
      <div className="my-6">
        <Image src={"128.svg"} alt={"Potrait photo"} width={128} height={128} className="rounded-full" />
      </div>
      <h1 className="font-medium text-4xl text-green">Steven Whitfield</h1>
      <h2 className="text-2xl mt-1">Full Stack Software Engineer</h2>
      <p className="mt-6 mb-8">I design digital experiences and develop functional web apps.</p>
      <Link
        href={""}
        className="flex gap-1 items-center py-3 px-6 bg-green rounded-full text-background hover:no-underline"
      >
        <span>{"Let's Talk"}</span>
        <PaperAirplaneIcon className="w-6 h-6" />
      </Link>
    </section>
  );
};

export default Hero;
