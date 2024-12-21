import { MenuItem } from "../Navbar/Navbar";
import NavbarItemDivider from "../NavbarItemDivider/NavbarItemDivider";
import NavbarSubItem from "../NavbarSubItem/NavbarSubItem";

interface MenuItemsProps {
  items: MenuItem[];
  activeItem: string;
  setActiveItem: React.Dispatch<React.SetStateAction<string>>;
}

const NavbarItem: React.FC<MenuItemsProps> = ({
  items,
  activeItem,
  setActiveItem,
}) => (
  <ul className="py-5">
    {items.map((item) => (
      <>
        <NavbarItemDivider />
        <NavbarSubItem
          key={item.name}
          {...item}
          onClick={() => setActiveItem(item.name)}
          activeItem={activeItem}
        />
      </>
    ))}
  </ul>
);

export default NavbarItem;
