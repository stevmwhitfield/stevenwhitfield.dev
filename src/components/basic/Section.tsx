import { ISection } from "@/types";

const Section = ({ id, children }: ISection) => {
  return (
    <section id={id} className="container mx-auto flex flex-col items-center text-center">
      {children}
    </section>
  );
};

export default Section;
