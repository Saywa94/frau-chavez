"use client";

import Link from "next/link";
import styles from "./Navbar.module.css";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

function ListItem({
  title,
  href,
}: {
  title: string;
  href: string;
}): React.ReactElement {
  return (
    <NavigationMenuLink asChild>
      <Link
        href={href}
        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
      >
        {title}
      </Link>
    </NavigationMenuLink>
  );
}

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <span className={styles.mainLogo}>Kulturwelt.</span>
      <div className={styles.navigation}>
        <div className={styles.navigationMenuContainer}>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Cursos</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-1 p-2 md:w-[250px] md:grid-cols-1 lg:w-[300px] ">
                    <ListItem title="Aleman" href="/courses/1" />
                    <ListItem title="Frances" href="/courses/1" />
                    <ListItem title="Ingles" href="/courses/1" />
                    <ListItem title="Español" href="/courses/1" />
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem className="hidden sm:block">
                <NavigationMenuTrigger>Preparaciones</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-1 p-2 md:w-[250px] md:grid-cols-1 lg:w-[300px] ">
                    <ListItem title="Examenes oficiales" href="/courses/1" />
                    <ListItem
                      title="Programa de enfermeros a Alemania"
                      href="/courses/1"
                    />
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem className="hidden md:block">
                <Link href="/docs">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Quienes somos
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className={styles.main_button_container}>
          <Button>Inscribiete</Button>
        </div>
      </div>
    </nav>
  );
}
