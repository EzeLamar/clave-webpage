import { CompanyProps, ImageProps, LinkProps } from "./base";

export interface GlobalProps {
  header: HeaderProps;
  footer: FooterProps;
  company: CompanyProps;
}

export interface HeaderProps {
  id: number;
  logo: LogoProps;
  navItems: LinkProps[];
}

export interface LogoProps {
  id: number;
  href: string;
  isExternal: boolean;
  label: string;
  image: ImageProps;
}

export interface FooterProps {
  id: number;
  logo: LogoProps;
  text: string;
  navItems: LinkProps[];
  socialLinks: LogoProps[];
  copyright: string;
  company: CompanyProps;
}

export interface FloatingWhatsAppButtonProps {
  phoneNumber: string;
}

