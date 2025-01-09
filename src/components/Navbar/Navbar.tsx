import { useState } from "react";
import NavbarItem from "./NavbarItem";
import NavbarItemDivider from "./NavbarItemDivider";

export interface MenuItem {
  name: string;
  icon: string;
  activeItem?: string;
}

const Navbar: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>("Stories");

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
      { name: "Apps", icon: "📱" },
    ],
    [{ name: "User guide", icon: "❔" }],
  ];

  return (
    <nav className="w-[228px] min-w-[228px] bg-dark-primary h-[calc(100vh-60px)] z-50 absolute lg:relative">
      {menuItems.map((items, index) => (
        <div key={index}>
          <NavbarItemDivider />
          <NavbarItem
            items={items}
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
        </div>
      ))}
    </nav>
  );
};

export default Navbar;
