import { IButtonLink } from "@/types";

import Link from "next/link";

const ButtonLink = ({ variant = "solid", href, text, icon }: IButtonLink) => {
  const baseStyles =
    "flex gap-2 items-center py-3 px-6  rounded-full text-text dark:text-background hover:no-underline";

  const solidStyles = "bg-greenAlt dark:bg-green";

  const outlineStyles = "border-2 border-greenAlt text-background dark:border-green dark:text-foreground";

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
