import { IHeader } from "@/types";

const PageHeader = ({ text }: IHeader) => {
  return <h1 className="mb-1 font-medium text-4xl text-primary xl:text-5xl">{text}</h1>;
};

export default PageHeader;
