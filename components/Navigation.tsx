import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
} from "@nextui-org/navbar";
import NavLink from "./NavLink";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";
import { ThemeSwitch } from "@/components/theme-switch";
import { siteConfig } from "@/config/site";
{
  /* TODO ADICIONAR NO SITE.TS OS LINKS E VINCULAR */
}

export default function Navigation() {
  return (
    <Navbar isBordered shouldHideOnScroll maxWidth="xl">
      <NavbarBrand>
        {/*<AcmeLogo /> */}
        <Link href={"/"}>
          <p className="font-bold text-inherit">DIRIGENTE FC</p>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        <NavLink href="/termos">Termos de Uso</NavLink>
        <NavLink href="/regulamento">Regulamento</NavLink>
        <NavLink href="/faq">FAQ</NavLink>
        <NavLink href="/contato">Contato</NavLink>
      </NavbarContent>
      <NavbarContent justify="end">
        {/* <NavbarMenuToggle /> */}
        <NavbarItem className="hidden lg:flex">
          <Link href="/login">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="/cadastro" variant="flat">
            Cadastro
          </Button>
        </NavbarItem>
        <ThemeSwitch />
      </NavbarContent>
    </Navbar>
  );
}
