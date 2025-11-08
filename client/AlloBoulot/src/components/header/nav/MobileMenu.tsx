import React, { useEffect } from "react";
import { useLocation } from "react-router";
import { useMobileMenu } from "@/store/useMobileMenu";
import NavbarLink from "./NavbarLink";
import { useAuth } from "@/hooks/useAuth";
import { TopBar } from "@/components/dashboard/molecules/TopBar";

export type NavItem = {
  linkName: string;
  linkPath: string;
  id?: string | number;
};

const MobileMenu: React.FC = () => {
  const { isAuth } = useAuth()
  const { isOpen, toggle, close } = useMobileMenu();

  // Close when route changes
  const { pathname } = useLocation();
  useEffect(() => {
    close();
  }, [pathname, close]);

  // Close on Escape
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    if (isOpen) document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, close]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={toggle}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        className="w-10 h-10 grid place-items-center"
      >
        <span
          className={`absolute block h-1 w-8 bg-white rounded-full transition-transform duration-300 ease-in-out ${isOpen ? "rotate-45" : "-translate-y-2"
            }`}
        />
        <span
          className={`absolute block h-1 w-8 bg-white rounded-full transition-opacity duration-300 ease-in-out ${isOpen ? "opacity-0" : "opacity-100"
            }`}
        />
        <span
          className={`absolute block h-1 w-8 bg-white rounded-full transition-transform duration-300 ease-in-out ${isOpen ? "-rotate-45" : "translate-y-2"
            }`}
        />
      </button>

      <ul
        id="mobile-menu"
        className={`absolute top-20 right-0 bg-black/90 h-[100vh] z-20 w-full flex flex-col gap-10 ${isOpen ? "" : "hidden"
          }`}
        role="menu"
      >
        <li className="h-10 text-center w-full text-lg flex justify-center items-center">
          <NavbarLink src="/" name="Accueil" />
        </li>
        <li className="h-10 text-center w-full text-lg flex justify-center items-center">
          <NavbarLink src="/about" name="À propos" />
        </li>
        <li className="h-10 text-center w-full text-lg flex justify-center items-center">
          <NavbarLink src="/contact" name="Contact" />
        </li>
        {isAuth && (
          <li className="h-10 text-center w-full text-lg flex justify-center items-center">
            <TopBar
              activeTab="profile"
              onTabChange={() => { }}
              userName="Flora Dolorece"
              userInitials="FD"
              userRole="Candidat"
            />
          </li>
        )}
        {!isAuth && (
          <>
            <li className="h-10 text-center w-full text-lg flex justify-center items-center">
              <NavbarLink src="/login" name="Se connecter" />
            </li>
            <li className="h-10 text-center w-full text-lg flex justify-center items-center">
              <NavbarLink src="/signup" name="S'enregistrer" />
            </li>
          </>
        )}

      </ul>
    </div>
  );
};

export default MobileMenu;
