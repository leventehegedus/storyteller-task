import React from "react";
import { Menu, X } from "lucide-react";

interface MenuToggleProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const MenuToggle: React.FC<MenuToggleProps> = ({ open, setOpen }) => (
  <div className="lg:hidden">
    {!open ? (
      <Menu
        size={20}
        className="display-block md:display-none cursor-pointer"
        onClick={() => setOpen(true)}
      />
    ) : (
      <X
        size={20}
        className="display-block md:display-none cursor-pointer"
        onClick={() => setOpen(false)}
      />
    )}
  </div>
);

export default MenuToggle;
