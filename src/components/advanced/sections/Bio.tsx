import Paragraph from "@/components/basic/Paragraph";
import Section from "@/components/basic/Section";
import SectionHeader from "@/components/basic/SectionHeader";

import Link from "next/link";

const Bio = () => {
  return (
    <Section id={"bio"}>
      <SectionHeader text={"Hi, I'm Steven."} />
      <Paragraph
        text={
          "A recent computer science graduate from Florida Polytechnic University - currently seeking opportunities to join a team and contribute my technical expertise to innovative projects that solve real-world problems."
        }
      />
      <div className="flex gap-x-4">
        <Link
          href={"https://www.linkedin.com/in/stevenmwhitfield/"}
          className="flex items-center gap-2 hover:no-underline hover:text-primary [&>span]:hover:underline"
        >
          <i className="devicon-linkedin-plain text-2xl" />
          <span>LinkedIn</span>
        </Link>
        <div>&middot;</div>
        <Link
          href={"https://github.com/stevmwhitfield"}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 hover:no-underline hover:text-primary [&>span]:hover:underline"
        >
          <i className="devicon-github-plain text-2xl" />
          <span>GitHub</span>
        </Link>
      </div>
    </Section>
  );
};

export default Bio;
