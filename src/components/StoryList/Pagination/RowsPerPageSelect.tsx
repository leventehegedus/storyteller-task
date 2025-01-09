import { ChevronDown } from "lucide-react";
import { rowsPerPageOptions } from "../../../mockdata/stories";

interface RowsPerPageSelectProps {
  rowsPerPage: number;
  handleRowsPerPageChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const RowsPerPageSelect: React.FC<RowsPerPageSelectProps> = ({
  rowsPerPage,
  handleRowsPerPageChange,
}) => (
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
    </select>
    <ChevronDown
      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-dark-primary -tracking-[.01em]"
      size={20}
    />
  </div>
);

export default RowsPerPageSelect;
