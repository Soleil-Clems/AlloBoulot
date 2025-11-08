import NavbarLogo from "./NavbarLogo";
import NavbarButton from "./NavbarButton";
import NavbarLink from "./NavbarLink";
import MobileMenu from "./MobileMenu";
import { useAuth } from "@/hooks/useAuth";
import { TopBar } from "@/components/dashboard/molecules/TopBar";

const Navbar = () => {
  const { isAuth, isAdmin } = useAuth()
  return (
    <nav className="relative flex justify-between py-5 px-5 md:px-10">
      <NavbarLogo />
      <ul className="hidden lg:flex items-center gap-10">
        <li>
          <NavbarLink src="/" name="Accueil" />
        </li>
        <li>
          <NavbarLink src="/about" name="À propos" />
        </li>
        <li>
          <NavbarLink src="/contact" name="Contact" />
        </li>
        <li>
        </li>
        {isAuth && (
          <li>
            <TopBar
            />
          </li>
        )}

      </ul>
      {!isAuth && (
        <ul className="hidden lg:flex items-center gap-10">
          <li>
            <NavbarLink src="/login" name="Se connecter" />
          </li>
          <li>
            <NavbarButton src="/signup" name="S'enregistrer" />
          </li>
        </ul>
      )}


      <MobileMenu />
    </nav>
  );
};

export default Navbar;
