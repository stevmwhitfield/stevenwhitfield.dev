import { IButtonLink } from "@/types";

import Link from "next/link";

const ButtonLink = ({ variant = "solid", href, text, icon }: IButtonLink) => {
  const baseStyles = "flex gap-2 items-center py-3 px-6 rounded-full hover:no-underline";

  const solidStyles = "bg-primary text-text-alt";

  const outlineStyles = "border-2 border-primary text-text";

  let buttonStyles = "";

  if (variant === "solid") {
    buttonStyles = `${baseStyles} ${solidStyles}`;
  } else if (variant === "outline") {
    buttonStyles = `${baseStyles} ${outlineStyles}`;
  }

  return (
    <Link href={href} className={buttonStyles}>
      <span>{text}</span>
      {icon}
    </Link>
  );
};

export default ButtonLink;
