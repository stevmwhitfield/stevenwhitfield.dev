export type TNavLink = {
  href: string;
  label: string;
  children?: React.ReactNode;
};

export type TSkill = {
  icon: string;
  label: string;
};

export type TProjectLink = {
  title: string;
  tags: string[];
  href?: string;
};
