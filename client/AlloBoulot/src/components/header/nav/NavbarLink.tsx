import { NavLink } from 'react-router';

type NavbarLinkProps = {
  src: string;
  name: string;
  end?: boolean;
};

const NavbarLink = ({ src, name, end }: NavbarLinkProps) => {
  return (
    <NavLink
      to={src}
      end={end}
      className={({ isActive }) =>
        (isActive
          ? 'text-white'
          : 'text-white/70 hover:text-white') + ' duration-300'
      }
    >
      {name}
    </NavLink>
  );
};

export default NavbarLink;

