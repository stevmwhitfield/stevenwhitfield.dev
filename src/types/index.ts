export interface INavLink {
  href: string;
  label: string;
  children?: React.ReactNode;
}

export interface IIconLink {
  href: string;
  text: string;
  icon?: React.ReactNode;
}

export interface ISkill {
  icon: string;
  label: string;
}

export interface IProjectLink {
  title: string;
  tags: string[];
  href?: string;
}

export interface ISection {
  id: string;
  children?: React.ReactNode;
}

export interface IHeader {
  text: string;
}

export interface IButtonLink extends IIconLink {
  variant?: "solid" | "outline";
}

export interface IParagraph {
  text: string;
}
