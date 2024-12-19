import { imgPath } from "@/components/helpers/functions-general";
import {
  ChartBarStacked,
  Clapperboard,
  HandPlatter,
  LayoutDashboard,
  Megaphone,
  Star,
  UtensilsCrossed,
} from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";

const SideNavigation = ({ menu }) => {
  const links = [
    {
      title: "Dashboard",
      slug: "/admin/dashboard",
      icon: <LayoutDashboard size={16} />,
    },
    {
      title: "Food",
      slug: "/admin/food",
      icon: <UtensilsCrossed size={16} />,
    },
    {
      title: "Category",
      slug: "/admin/category",
      icon: <UtensilsCrossed size={16} />,
    },
    {
      title: "Level",
      slug: "/admin/level",
      icon: <UtensilsCrossed size={16} />,
    },
  ];

  return (
    <>
      <aside className="p-4 border-r border-line">
        <img
          src={`${imgPath}/recipe-logo.png`}
          alt=""
          className="w-[80%] h-[90px] mx-auto mt-2"
        />

        <nav>
          <ul className="mt-10">
            {links.map((item, key) => (
              <li
                className={`${
                  menu === item.slug.replaceAll("/admin/", "")
                    ? "border-accent bg-accent opacity-100 text-center text-white"
                    : ""
                } p-2 mb-2 rounded-md border border-transparent opacity-70 hover:opacity-100`}
                key={key}
              >
                <NavLink
                  to={`${item.slug}`}
                  className="flex gap-2 text-base items-center"
                >
                  {item.icon} {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default SideNavigation;
