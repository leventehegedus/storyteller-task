const PageInput: React.FC<{
  currentPage: number;
  totalPages: number;
  handlePageChange: (page: number) => void;
}> = ({ currentPage, totalPages, handlePageChange }) => (
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
);

export default PageInput;
