import { MenuItem } from "../Navbar/Navbar";
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
        <NavbarSubItem
          key={item.name}
          {...item}
          onClick={() => {
            setActiveItem(item.name);
            console.log(`Active item: ${item.name}`);
          }}
          activeItem={activeItem}
        />
      </>
    ))}
  </ul>
);

export default NavbarItem;
