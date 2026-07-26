import { NavItem } from "@/types";

export const NAV_ITEMS: NavItem[] = [
  {
    label: "Home",
    href: "/",
    iconName: "Home",
  },
  {
    label: "Create Content",
    href: "/create",
    iconName: "PenTool",
    badge: "New",
  },
  {
    label: "Editor",
    href: "/editor",
    iconName: "FileEdit",
  },
  {
    label: "Draft History",
    href: "/history",
    iconName: "History",
  },
  {
    label: "Settings",
    href: "/settings",
    iconName: "Settings",
  },
];

export const BRAND_CONFIG = {
  name: "BrandForge AI",
  subtitle: "Turn ideas into authentic professional content.",
  version: "v0.1.0-alpha",
  githubUrl: "https://github.com",
};
