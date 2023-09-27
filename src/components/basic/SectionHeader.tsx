import { IHeader } from "@/types";

const SectionHeader = ({ text }: IHeader) => {
  return <h2 className="font-medium text-3xl mb-6 xl:text-4xl">{text}</h2>;
};

export default SectionHeader;
