import { NavLink } from "react-router";

const LINKS = [
  { to: "/admin/user", label: "Users" },
  { to: "/admin/category", label: "Categories" },
  { to: "/admin/company", label: "Companies" },
];

const base =
  "relative rounded-2xl px-4 py-2 transition-colors duration-200 whitespace-nowrap";
const active =
  "bg-primary text-white shadow after:absolute after:left-3 after:right-3 after:-bottom-1 after:h-0.5 after:rounded after:bg-primary-foreground";
const inactive =
  "text-foreground hover:bg-primary/10";

export default function DashboardNavbar() {
  return (
    <ul className="flex items-center gap-5">
      {LINKS.map(({ to, label }) => (
        <li key={to} className="shrink-0">
          <NavLink
            to={to}
            end
            className={({ isActive }) =>
              [base, isActive ? active : inactive].join(" ")
            }
          >
            {label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

