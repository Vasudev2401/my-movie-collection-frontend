import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@heroui/react";
import { Clapperboard } from "lucide-react";

export function MovieIcon() {
  return (
    <div className="p-4">
      <Clapperboard size={40} color="cyan" />
    </div>
  );
}


export const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default function AppNavbar() {
  return (
    <Navbar>
      <NavbarBrand>
        <MovieIcon />
        <p className="font-bold text-inherit">MyMoviesCollection</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem className="mr-6">
          <Link color="foreground" href="#">
            Movie Suggestion
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link aria-current="page" href="#">
            My Movies
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign In
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
