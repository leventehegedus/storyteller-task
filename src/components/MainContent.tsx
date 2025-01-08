// MainContent.tsx
import React from "react";
import { cn } from "../lib/utils";
import Navbar from "./Navbar/Navbar";
import StoryList from "./StoryList/StoryList";

interface MainContentProps {
  isMenuOpen: boolean;
}

const MainContent: React.FC<MainContentProps> = ({ isMenuOpen }) => (
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
  </div>
);

export default MainContent;
