import React from "react";
import StoryList from "./StoryList/StoryList";
import { cn } from "../lib/utils";
import Navbar from "./Navbar/Navbar";

interface MainContentProps {
  isMenuOpen: boolean;
}

const MainContent: React.FC<MainContentProps> = ({ isMenuOpen }) => (
  <div className="grid grid-cols-1 lg:grid-cols-[228px_1fr] h-[calc(100vh-60px)] pr-0 lg:pr-[30px]">
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
    <div className="w-full h-full pb-0 lg:pb-[30px] overflow-auto">
      <StoryList />
    </div>
  </div>
);

export default MainContent;
