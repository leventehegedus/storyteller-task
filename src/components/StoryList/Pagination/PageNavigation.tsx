import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface PageNavigationProps {
  currentPage: number;
  totalPages: number;
  handleNextPage: () => void;
  handlePreviousPage: () => void;
}

const buttonClasses =
  "p-0 rounded-none border border-gray-light h-9 w-9 flex items-center justify-center bg-white disabled:opacity-25 disabled:cursor-not-allowed";

const PageNavigation: React.FC<PageNavigationProps> = ({
  currentPage,
  totalPages,
  handleNextPage,
  handlePreviousPage,
}) => (
  <div className="flex text-dark-primary text-sm leading-5 items-center -tracking-[.01em] opacity-50">
    <button
      className={`${buttonClasses} rounded-l-md -mr-px`}
      onClick={handlePreviousPage}
      disabled={currentPage === 1}
    >
      <ArrowLeft size={11} />
    </button>
    <button
      className={`${buttonClasses} rounded-r-md`}
      onClick={handleNextPage}
      disabled={currentPage === totalPages}
    >
      <ArrowRight size={11} />
    </button>
  </div>
);

export default PageNavigation;
