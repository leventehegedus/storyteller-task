const Header = () => {
  return (
    <header className="text-white h-[60px] pl-5 pr-[30px] flex items-center justify-between w-full">
      <div className="flex items-center">
        <span className="text-lg font-medium">storyteller</span>
      </div>
      <div className="flex items-center gap-5">
        <div className="w-5 h-5 bg-white rounded-full text-dark-primary flex items-center justify-center">
          {/* TODO image icon   */}?
        </div>
        <div className="bg-blue-dark w-9 h-9 text-xl uppercase flex items-center justify-center rounded-full">
          LH
        </div>
      </div>
    </header>
  );
};

export default Header;
