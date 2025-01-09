// Pagination.tsx
import React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "../../../lib/utils";
import PageNavigation from "./PageNavigation";
import { rowsPerPageOptions } from "../../../mockdata/stories";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  rowsPerPage: number;
  handlePageChange: (page: number) => void;
  handleRowsPerPageChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleNextPage: () => void;
  handlePreviousPage: () => void;
  className?: string;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  rowsPerPage,
  handlePageChange,
  handleRowsPerPageChange,
  handleNextPage,
  handlePreviousPage,
  className,
}) => (
  <footer
    className={cn(
      "justify-end gap-[30px] items-center h-9 px-4 lg:px-[30px] pt-3.5 lg:pt-6 pb-4 lg:pb-[30px] h-auto",
      className
    )}
  >
    <div className="flex items-center gap-1.5 text-dark-primary text-sm leading-5 flex items-center -tracking-[.01em]">
      <span>Page</span>
      <div className="relative flex h-9 border-gray-light border rounded-md bg-white overflow-hidden">
        <input
          type="number"
          min="1"
          max={totalPages}
          value={currentPage}
          onChange={(e) => handlePageChange(Number(e.target.value))}
          className="w-[60px] pl-3 pr-4 py-2 bg-white text-dark-primary text-sm leading-5 -tracking-[.01em]"
        />
      </div>
      <span>of {totalPages}</span>
    </div>
    <div className="relative w-[110px]">
      <select
        className="w-full appearance-none bg-white border border-gray-light text-dark-primary rounded-md px-3 pr-10 h-9 text-sm leading-5"
        value={rowsPerPage}
        onChange={handleRowsPerPageChange}
      >
        {rowsPerPageOptions.map((option) => (
          <option key={option} value={option}>
            {option} Rows
          </option>
        ))}
      </select>{" "}
      <ChevronDown
        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-dark-primary -tracking-[.01em]"
        size={20}
      />
    </div>
    <PageNavigation
      currentPage={currentPage}
      totalPages={totalPages}
      handleNextPage={handleNextPage}
      handlePreviousPage={handlePreviousPage}
    />
  </footer>
);

export default Pagination;
