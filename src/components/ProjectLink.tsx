import { TProjectLink } from "@/types";

import Link from "next/link";

const Project = ({ title, tags, href }: TProjectLink) => {
  if (href === undefined) {
    return (
      <div className="flex flex-col text-start border-b-2 border-transparent">
        <p className="text-2xl mb-1 xl:text-3xl">{title}</p>
        <div className="flex gap-x-2 pb-1">
          <p className="text-sm overflow-hidden whitespace-nowrap overflow-ellipsis xl:text-base">{tags.join(" - ")}</p>
        </div>
      </div>
    );
  }

  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex flex-col text-start border-b-2 border-transparent hover:no-underline hover:border-b-2 hover:border-text"
    >
      <p className="text-2xl mb-1 xl:text-3xl">{title}</p>
      <div className="flex gap-x-2 pb-1">
        <p className="text-sm overflow-hidden whitespace-nowrap overflow-ellipsis xl:text-base">{tags.join(" - ")}</p>
      </div>
    </Link>
  );
};

export default Project;
