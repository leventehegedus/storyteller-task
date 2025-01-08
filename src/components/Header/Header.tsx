import React from "react";
import MenuToggle from "./MenuToggle";
import Logo from "./Logo";
import UserAvatar from "./UserAvatar";

interface HeaderProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ open, setOpen }) => (
  <header className="text-white h-[60px] pl-5 pr-[30px] flex items-center justify-between w-full">
    <div className="flex items-center gap-[11px] h-[38px]">
      <MenuToggle open={open} setOpen={setOpen} />
      <Logo />
    </div>
    <UserAvatar />
  </header>
);

export default Header;
