import { icons } from "lucide-react";

export type ResponsibilityProps = {
  title?: string;
  highlights: string[];
};

export type JobDescriptionProps = {
  overview?: string;
  responsibilities: ResponsibilityProps[];
};

export type JobProps = {
  company: string;
  website?: string;
  role: string;
  linkHoverColor?: string;
  duration: string;
  description: JobDescriptionProps;
};

export type ProjectProps = {
  name: string;
  preview?: string;
  github: string;
  highlights: string[];
  techStack: string[];
};

export type ContactProps = {
  iconName: keyof typeof icons;
  title: string;
  hoverColor: string;
  href: string;
};
