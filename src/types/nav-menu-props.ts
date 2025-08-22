import { LucideIcon } from "lucide-react"; 

type NavMenuItem = {
  href: string;
  label: string;
  icon: LucideIcon; // any Lucide icon
  color?: string;
  onClick?: () => void;
};

export interface NavMenuProps {
  items: NavMenuItem[];
}