import { useEffect, useState } from "react";
import NavbarItem from "../NavbarItem/NavbarItem";
import NavbarItemDivider from "../NavbarItemDivider/NavbarItemDivider";

export interface MenuItem {
  name: string;
  icon: string;
  activeItem?: string;
}

const Navbar: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>("Stories");

  // todo: change icons to match design
  const menuItems: MenuItem[][] = [
    [
      { name: "Schedule", icon: "🗓️" },
      { name: "Analytics", icon: "📈" },
      { name: "Stories", icon: "📖" },
      { name: "Engagement Units", icon: "📍" },
      { name: "Ads", icon: "📢" },
    ],
    [
      { name: "CMS Users", icon: "👥" },
      { name: "Roles", icon: "🗃️" },
      { name: "Apps", icon: "< />" },
    ],
    [{ name: "User guide", icon: "?" }],
  ];

  return (
    <nav className="w-[228px] min-w-[228px]">
      {/* TODO: fix width of the navbar with grid */}
      {menuItems.map((items, index) => (
        <>
          <NavbarItemDivider />
          <NavbarItem
            key={index}
            items={items}
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
        </>
      ))}
    </nav>
  );
};

export default Navbar;
