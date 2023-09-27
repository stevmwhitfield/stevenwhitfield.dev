import ButtonLink from "@/components/advanced/ButtonLink";
import PageHeader from "@/components/basic/PageHeader";
import Paragraph from "@/components/basic/Paragraph";
import Section from "@/components/basic/Section";
import SubHeader from "@/components/basic/SubHeader";

import PaperAirplaneIcon from "@heroicons/react/24/solid/PaperAirplaneIcon";
import Image from "next/image";

const Hero = () => {
  return (
    <Section id={"hero"}>
      <div className="my-6">
        <Image src={"/Steven_Whitfield.jpg"} alt={"Potrait photo"} width={128} height={128} className="rounded-full" />
      </div>
      <PageHeader text={"Steven Whitfield"} />
      <SubHeader text={"Full Stack Software Engineer"} />
      <Paragraph text={"I design digital experiences and develop functional web apps."} />
      <ButtonLink
        href={"mailto:stevmwhitfield@gmail.com"}
        text={"Let's Talk"}
        icon={<PaperAirplaneIcon className="w-6 h-6" />}
      />
    </Section>
  );
};

export default Hero;
