import { MenuItem } from "../Navbar/Navbar";

const NavbarSubItem: React.FC<MenuItem & { onClick: () => void }> = (
  { name, icon, onClick },
  activeItem
) => (
  <li
    className={`py-2 px-4 cursor-pointer text-white flex items-center ${
      name === activeItem ? "bg-blue-dark-active" : ""
    }`}
    onClick={onClick}
  >
    {/* use cn, activeItem should be just a boolean */}
    <span className="mr-2">{icon}</span> {name}
  </li>
);

export default NavbarSubItem;
