import * as React from "react";
import { Link, useLocation } from "react-router";
import { DynamicIcon, type IconName } from "lucide-react/dynamic";

type DashboardNavItemProps = {
  src: string;
  name: string;
  icon: IconName;
};

const lastSegment = (path: string) =>
  path.split("/").filter(Boolean).pop() ?? "";

const DashboardNavItem = ({ src, name, icon }: DashboardNavItemProps) => {
  const tooltipId = React.useId();
  const { pathname } = useLocation();

  const current = lastSegment(pathname);
  const target = lastSegment(src);
  const isActive = current === target;

  return (
    <li
      className={[
        "relative group rounded-2xl w-14 overflow-visible transition-colors duration-200 shrink-0",
        isActive ? "bg-primary/80 text-white" : "bg-white hover:bg-primary/80 hover:text-white",
      ].join(" ")}
    >
      <Link
        to={src}
        aria-describedby={tooltipId}
        className="flex items-center justify-center w-full h-full p-4 "
      >
        {/* inherits currentColor, so it turns white when active */}
        <DynamicIcon name={icon} size={24} className="shrink-0" />
      </Link>

      {/* Tooltip */}
      <span
        id={tooltipId}
        role="tooltip"
        className="pointer-events-none select-none absolute left-1/2 -translate-x-1/2 -bottom-13 -translate-y-full px-2 py-1 rounded-md text-xs text-white bg-gray-900 shadow opacity-0 scale-95 transition-all duration-200 group-hover:opacity-100 group-hover:scale-100 group-focus-within:opacity-100 group-focus-within:scale-100 whitespace-nowrap">
        {name}
      </span>
    </li>
  );
};

export default DashboardNavItem;
