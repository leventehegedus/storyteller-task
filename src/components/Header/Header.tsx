import { Menu, X } from "lucide-react";

interface HeaderProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ open, setOpen }) => {
  return (
    <header className="text-white h-[60px] pl-5 pr-[30px] flex items-center justify-between w-full">
      <div className="flex items-center gap-[11px] h-[38px]">
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
        <img
          src="/assets/images/storytellerlogo.svg"
          alt="logo"
          className="w-[37px] h-[34px]"
        />
        <span className="text-[28px] font-bold -tracking-[.01em] leading-[28px] -mt-0.5">
          storyteller
        </span>
      </div>
      <div className="flex items-center gap-[19px] md:gap-8">
        <div className="w-5 h-5 bg-white rounded-full text-dark-primary flex items-center justify-center">
          {/* TODO image icon   */}?
        </div>
        <div className="bg-blue-dark w-9 h-9 text-xl uppercase flex items-center justify-center rounded-full">
          RJ
        </div>
      </div>
    </header>
  );
};

export default Header;
