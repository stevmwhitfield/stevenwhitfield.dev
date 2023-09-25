import PaperAirplaneIcon from "@heroicons/react/24/solid/PaperAirplaneIcon";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section id="hero" className="container mx-auto flex flex-col items-center text-center">
      <div className="my-6">
        <Image src={"/StevenWhitfield.jpg"} alt={"Potrait photo"} width={128} height={128} className="rounded-full" />
      </div>
      <h1 className="font-medium text-4xl text-greenAlt dark:text-green xl:text-5xl">Steven Whitfield</h1>
      <h3 className="text-2xl mt-1 xl:text-3xl">Full Stack Software Engineer</h3>
      <p className="mt-6 mb-8">I design digital experiences and develop functional web apps.</p>
      <Link
        href={"mailto:stevmwhitfield@gmail.com"}
        className="flex gap-2 items-center py-3 px-6 bg-greenAlt dark:bg-green rounded-full text-text dark:text-background hover:no-underline"
      >
        <span>{"Let's Talk"}</span>
        <PaperAirplaneIcon className="w-6 h-6" />
      </Link>
    </section>
  );
};

export default Hero;
