import { CompanyProps, ImageProps, LinkProps } from "./base";

export interface GlobalProps {
  header: HeaderProps;
  footer: FooterProps;
  company: CompanyProps;
  isVisibleContactButton: boolean;
  banner?: BannerProps;
}

export interface BannerProps {
  enabled: boolean;
  title: string;
  description: string;
  link: LinkProps;
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
}
