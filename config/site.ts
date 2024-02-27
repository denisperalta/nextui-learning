export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Dirigente FC",
  description: "ADICIONAR DESCRIÇÃO",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Docs",
      href: "/docs",
    },

    {
      label: "About",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    // 	github: "https://github.com/nextui-org/nextui",
    // 	twitter: "https://twitter.com/getnextui",
    // 	docs: "https://nextui.org",
    // 	discord: "https://discord.gg/9b6yyZKmH4",
    // sponsor: "https://patreon.com/jrgarciadev"
  },
};
