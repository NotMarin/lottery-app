import Link from "next/link";
import { MenuIcon, Ticket } from "lucide-react";
import { buttonVariants } from "@/src/components/atoms/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/src/components/molecules/dropdown-menu";

const navigationData = [
  {
    title: "Inicio",
    href: "/",
  },
  {
    title: "Historial",
    href: "/history",
  },
  {
    title: "Analíticas",
    href: "/analytics",
  },
  {
    title: "Contratas",
    href: "/contracts",
  },
];

export function NavBar() {
  return (
    <header className="bg-background/90 supports-[backdrop-filter]:bg-background/70 sticky top-0 z-50 w-full border-b backdrop-blur">
      <nav className="flex h-16 items-center justify-between px-6">
        <Link
          href="/"
          className="flex items-center justify-center gap-2 text-xl font-bold tracking-tight"
        >
          <Ticket />
          <h1>El Chancerito</h1>
        </Link>
        <div className="flex gap-2 max-md:hidden">
          {navigationData.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="text-muted-foreground hover:bg-muted rounded-lg px-3 py-2 text-sm font-medium"
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className="flex gap-2">
          <Link
            className={buttonVariants({
              variant: "secondary",
              className: "h-9 px-3 py-2",
            })}
            href="/login"
          >
            Iniciar sesión
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="border-border flex size-9 items-center justify-center rounded-lg border md:hidden">
              <MenuIcon size={16} />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuGroup>
                {navigationData.map((item, index) => (
                  <DropdownMenuItem key={index}>
                    <Link className="h-full w-full" href={item.href}>
                      {item.title}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </header>
  );
}
