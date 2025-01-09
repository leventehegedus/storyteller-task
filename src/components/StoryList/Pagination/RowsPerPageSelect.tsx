import { ChevronDown } from "lucide-react";

const RowsPerPageSelect: React.FC<{
  rowsPerPage: number;
  handleRowsPerPageChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}> = ({ rowsPerPage, handleRowsPerPageChange }) => (
  <div className="relative w-[110px]">
    <select
      className="w-full appearance-none bg-white border border-gray-light text-dark-primary rounded-md px-3 pr-10 h-9 text-sm leading-5"
      value={rowsPerPage}
      onChange={handleRowsPerPageChange}
    >
      <option value={5}>5 Rows</option>
      <option value={10}>10 Rows</option>
      <option value={20}>20 Rows</option>
    </select>
    <ChevronDown
      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-dark-primary -tracking-[.01em]"
      size={20}
    />
  </div>
);

export default RowsPerPageSelect;
