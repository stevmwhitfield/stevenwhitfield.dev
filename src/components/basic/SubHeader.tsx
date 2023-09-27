import { IHeader } from "@/types";

const SubHeader = ({ text }: IHeader) => {
  return <h3 className="text-2xl xl:text-3xl mb-6">{text}</h3>;
};

export default SubHeader;
