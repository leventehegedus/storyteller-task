// Components/StoryList/StoryList.tsx
import React, { useEffect, useMemo, useState } from "react";
import { Search, ChevronDown, Plus, ArrowLeft, ArrowRight } from "lucide-react";
import { Story, StoryFilters } from "../../types/story";
import StoryRow from "./StoryRow";
import { fetchStories } from "../../api/stories";
import Button from "../Button/Button";
import SortableHeader from "./SortableHeader";

const StoryList: React.FC = () => {
  const [filters, setFilters] = useState<StoryFilters>({
    search: "",
    status: "All Statuses",
  });

  const [stories, setStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: "asc" | "desc";
  } | null>(null);

  const totalPages = Math.ceil(total / rowsPerPage);

  useEffect(() => {
    const loadStories = async () => {
      setLoading(true);
      const { stories: newStories, total } = await fetchStories(
        page,
        20,
        filters
      );
      setStories(newStories);
      setTotal(total);
      setLoading(false);
    };

    loadStories();
  }, [page, filters, total]);

  const sortedStories = useMemo(() => {
    let sortableStories = [...stories];
    if (sortConfig !== null) {
      sortableStories.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "asc" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "asc" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableStories;
  }, [stories, sortConfig]);

  const paginatedStories = useMemo(() => {
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    return sortedStories.slice(startIndex, endIndex);
  }, [sortedStories, currentPage, rowsPerPage]);

  const requestSort = (key: string) => {
    let direction: "asc" | "desc" = "asc";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "asc"
    ) {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const handleRowsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRowsPerPage(Number(e.target.value));
    setCurrentPage(1); // Reset to first page when rows per page changes
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="bg-off-white rounded-b-lg w-full h-full flex flex-col gap-5">
      <header className="flex justify-between items-center flex-wrap py-4 px-[30px] gap-4 h-[120px]">
        <h1 className="text-3xl font-semibold w-full tracking-[.01em] text-dark-primary">
          Stories
        </h1>

        <div className="flex gap-4 w-full gap-[30px] justify-between">
          <div className="flex gap-[30px]">
            <div className="relative flex w-[376px] h-9 border-gray-light border rounded-md bg-white overflow-hidden">
              <input
                type="search"
                placeholder="Search"
                className="w-full pl-3 pr-4 py-2 bg-white text-dark-primary text-sm leading-5 -tracking-[.01em]"
                value={filters.search}
                onChange={(e) =>
                  setFilters({ ...filters, search: e.target.value })
                }
              />
              <div className="w-9 h-9 bg-gray-light-search flex items-center justify-center">
                <Search size={12} />
              </div>
            </div>
            <div className="relative w-[200px]">
              <select
                className="w-full appearance-none bg-white border border-gray-light text-dark-primary rounded-md px-3 pr-10 h-9 text-sm leading-5"
                value={filters.status}
                onChange={(e) =>
                  setFilters({ ...filters, status: e.target.value })
                }
              >
                <option>All Statuses</option>
                <option>Draft</option>
                <option>Scheduled</option>
                <option>Live</option>
                <option>Past</option>
              </select>
              <ChevronDown
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-dark-primary -tracking-[.01em]"
                size={20}
              />
            </div>
            <div className="text-dark-primary text-sm leading-5 flex items-center -tracking-[.01em]">
              Showing {1} to {20} of {176}
            </div>
          </div>
          <Button
            text="New Story"
            size="medium"
            variant="green"
            icon={<Plus size={12} />}
          />
        </div>
      </header>
      <div className="-mt-0.5 flex flex-col h-full h-[calc(100%-156px)] overflow-x-auto w-auto">
        <div className="border-b text-dark-primary flex items-center justify-between font-semibold text-dark-primary opacity-75 text-sm leading-5 pb-2 w-fit">
          <SortableHeader
            label="Title"
            sortKey="title"
            className="pl-[30px] min-w-[410px]"
            sortConfig={sortConfig}
            requestSort={requestSort}
          />
          <div className="flex">
            <div className="flex">
              <div className="px-5 w-[273px]">Pages</div>
              <SortableHeader
                label="Last Modified"
                sortKey="lastModified"
                className="w-[165px]"
                sortConfig={sortConfig}
                requestSort={requestSort}
              />
              <SortableHeader
                label="Status"
                sortKey="status"
                className="w-[111px]"
                sortConfig={sortConfig}
                requestSort={requestSort}
              />
              <SortableHeader
                label="Live From"
                sortKey="liveFrom"
                className="w-[165px]"
                sortConfig={sortConfig}
                requestSort={requestSort}
              />
              <SortableHeader
                label="Ends"
                sortKey="ends"
                className="w-[165px]"
                sortConfig={sortConfig}
                requestSort={requestSort}
              />
              <div className="px-5 w-[157px]"></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-fit">
          {paginatedStories.map((story) => (
            <StoryRow key={story.id} story={story} />
          ))}
          <footer className="flex justify-end gap-[30px] items-center h-9 px-[30px] pt-6 pb-[30px] h-auto">
            <div className="flex items-center gap-1.5 text-dark-primary text-sm leading-5 flex items-center -tracking-[.01em]">
              <span>Page</span>
              <div className="relative flex h-9 border-gray-light border rounded-md bg-white overflow-hidden">
                <input
                  type="number"
                  min="1"
                  max={totalPages}
                  value={currentPage}
                  onChange={(e) => setCurrentPage(Number(e.target.value))}
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
                <option value={5}>5 Rows</option>
                <option value={10}>10 Rows</option>
                <option value={20}>20 Rows</option>
              </select>
              <ChevronDown
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-dark-primary -tracking-[.01em]"
                size={20}
              />
            </div>
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
          </footer>
        </div>
      </div>
    </div>
  );
};

export default StoryList;
