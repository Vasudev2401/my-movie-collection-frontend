"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/react";
import { Clapperboard, Search, Facebook, Instagram, Youtube } from "lucide-react";

export function MovieIcon() {
  return (
    <div className="p-4">
      <Clapperboard size={40} color="cyan" />
    </div>
  );
}

export default function AppNavbar() {
  return (
    <Navbar className="bg-black text-white">
      <NavbarBrand>
        <MovieIcon />
        <p className="font-bold text-inherit">MyMoviesCollection</p>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        <NavbarItem>
          <Link href="#" className="text-white">
            Movie Picker
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <Button variant="ghost" className="text-white">
                Top Genres ▾
              </Button>
            </DropdownTrigger>
            <DropdownMenu>
              <DropdownItem key={"11"}>Action</DropdownItem>
              <DropdownItem key={"12"}>Comedy</DropdownItem>
              <DropdownItem key={"13"}>Drama</DropdownItem>
              <DropdownItem key={"14"}>Horror</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>

        <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <Button variant="ghost" className="text-white">
                Top Actors ▾
              </Button>
            </DropdownTrigger>
            <DropdownMenu>
              <DropdownItem key={"1"}>Leonardo DiCaprio</DropdownItem>
              <DropdownItem key={"2"}>Scarlett Johansson</DropdownItem>
              <DropdownItem key={"3"}>Robert Downey Jr.</DropdownItem>
              <DropdownItem key={"4"}>Chris Hemsworth</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>

        <NavbarItem>
          <Link href="#" className="text-white">
            Blog
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end" className="gap-4">
        <NavbarItem>
          <Search className="text-white cursor-pointer" size={24} />
        </NavbarItem>
        <NavbarItem>
          <Facebook className="text-white cursor-pointer" size={24} />
        </NavbarItem>
        <NavbarItem>
          <Instagram className="text-white cursor-pointer" size={24} />
        </NavbarItem>
        <NavbarItem>
          <Youtube className="text-white cursor-pointer" size={24} />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
