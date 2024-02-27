"use client";
import { NavbarItem } from "@nextui-org/navbar";

import { Link } from "@nextui-org/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  children: React.ReactNode; // Explicitly typing children prop
  href: string;
}

export default function NavLink({ children, href }: NavLinkProps) {
  const path = usePathname();
  return (
    <NavbarItem isActive={path.startsWith(href) ? true : false}>
      <Link href={href} color="foreground">
        {children}
      </Link>
    </NavbarItem>
  );
}
