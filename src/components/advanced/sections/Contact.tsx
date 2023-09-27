import ButtonLink from "@/components/advanced/ButtonLink";
import Paragraph from "@/components/basic/Paragraph";
import Section from "@/components/basic/Section";
import SectionHeader from "@/components/basic/SectionHeader";

import ChatBubbleLeftEllipsisIcon from "@heroicons/react/24/solid/ChatBubbleLeftEllipsisIcon";

const Contact = () => {
  return (
    <Section id={"contact"}>
      <SectionHeader text={"Get In Touch"} />
      <Paragraph text={"I'll do my best to reply within 24 hours."} />
      <ButtonLink
        variant={"outline"}
        href={"mailto:stevmwhitfield@gmail.com"}
        text={"Say Hello"}
        icon={<ChatBubbleLeftEllipsisIcon className="w-6 h-6" />}
      />
    </Section>
  );
};

export default Contact;
