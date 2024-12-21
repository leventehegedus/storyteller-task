import { useState } from "react";
import NavbarItem from "../NavbarItem/NavbarItem";

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
      { name: "Apps", icon: "< />" },
    ],
    [{ name: "User guide", icon: "?" }],
  ];

  return (
    <nav className="bg-gray-900 text-gray-300 w-64">
      {menuItems.map((items, index) => (
        <NavbarItem
          key={index}
          items={items}
          activeItem={activeItem}
          setActiveItem={setActiveItem}
        />
      ))}
    </nav>
  );
};

export default Navbar;
