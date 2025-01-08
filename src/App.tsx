import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import StoryList from "./components/StoryList/StoryList";
import { cn } from "./lib/utils";

const App = () => {
  //TODO - check with pixelperfect chrome extension before submitting!!!

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Header open={isMenuOpen} setOpen={setIsMenuOpen} />
      <div className="flex pr-[30px]">
        <div
          className={cn(
            "invisible absolute lg:relative lg:visible transition-all",
            {
              "left-0 visible": isMenuOpen,
              "left-[-228px] lg:left-0": !isMenuOpen,
            }
          )}
        >
          <Navbar />
        </div>
        <div className="w-full lg:w-[calc(100%-228px)] h-[calc(100vh-60px)] pb-[30px]">
          <StoryList />
        </div>
        {isMenuOpen && (
          <div
            className="fixed top-[60px] w-full bottom-0 bg-black opacity-80 z-10"
            onClick={() => setIsMenuOpen(false)}
          ></div>
        )}
      </div>
    </>
  );
};

export default App;
