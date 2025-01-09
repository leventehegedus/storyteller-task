import { ArrowLeft, ArrowRight } from "lucide-react";

const PageNavigation: React.FC<{
  currentPage: number;
  totalPages: number;
  handleNextPage: () => void;
  handlePreviousPage: () => void;
}> = ({ currentPage, totalPages, handleNextPage, handlePreviousPage }) => (
  <div className="flex text-dark-primary text-sm leading-5 flex items-center -tracking-[.01em] opacity-50">
    <button
      className="p-0 rounded-none rounded-l-md border border-gray-light h-9 w-9 flex items-center justify-center -mr-px"
      onClick={handlePreviousPage}
      disabled={currentPage === 1}
    >
      <ArrowLeft size={11} />
    </button>
    <button
      className="p-0 rounded-none rounded-r-md border border-gray-light h-9 w-9 flex items-center justify-center"
      onClick={handleNextPage}
      disabled={currentPage === totalPages}
    >
      <ArrowRight size={11} />
    </button>
  </div>
);

export default PageNavigation;
