import { IParagraph } from "@/types";

const Paragraph = ({ text }: IParagraph) => {
  return <p className="mb-9">{text}</p>;
};

export default Paragraph;
