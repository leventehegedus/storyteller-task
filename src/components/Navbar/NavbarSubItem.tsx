import { MenuItem } from "./Navbar";
import { cn } from "../../lib/utils";

const NavbarSubItem: React.FC<MenuItem & { onClick: () => void }> = ({
  name,
  icon,
  onClick,
  activeItem,
}) => {
  return (
    <li
      className={cn(
        "h-14 px-5 cursor-pointer text-white flex items-center text-sm -tracking-[.01em]",
        {
          "bg-blue-dark-active border-l-4 pl-4 border-blue-light":
            name === activeItem,
        }
      )}
      onClick={onClick}
    >
      <span className="mr-2 w-5">{icon}</span> {name}
    </li>
  );
};

export default NavbarSubItem;
