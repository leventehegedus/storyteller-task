// Components/StoryList/StoryList.tsx
import React, { useEffect, useState } from "react";
import { Search, ChevronDown, Plus } from "lucide-react";
import { Story, StoryFilters } from "../../types/story";
import StoryRow from "../StoryRow/StoryRow";
import { fetchStories } from "../../api/stories";
import Button from "../Button/Button";

const StoryList: React.FC = () => {
  const [filters, setFilters] = useState<StoryFilters>({
    search: "",
    status: "All Statuses",
  });

  const [stories, setStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: "asc" | "desc";
  } | null>(null);

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
  }, [page, filters]);

  const sortedStories = React.useMemo(() => {
    const sortableStories = [...stories];
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
      <div className="-mt-0.5 flex flex-col h-full h-[calc(100%-156px)] overflow-x-auto w-fit">
        <div className="border-b text-dark-primary flex items-center justify-between font-semibold text-dark-primary opacity-75 text-sm leading-5 pb-2">
          <div
            className="pl-[30px] min-w-[410px]"
            onClick={() => requestSort("title")}
          >
            Title
          </div>
          <div className="flex">
            <div className="px-5 w-[273px]">Pages</div>
            <div
              className="px-5 w-[165px]"
              onClick={() => requestSort("lastModified")}
            >
              Last Modified
            </div>
            <div
              className="px-5 w-[111px]"
              onClick={() => requestSort("status")}
            >
              Status
            </div>
            <div
              className="px-5 w-[165px]"
              onClick={() => requestSort("liveFrom")}
            >
              Live From
            </div>
            <div className="px-5 w-[165px]" onClick={() => requestSort("ends")}>
              Ends
            </div>
            <div className="px-5 w-[157px]"></div>
          </div>
        </div>
        <div className="flex flex-col">
          {sortedStories.map((story) => (
            <StoryRow key={story.id} story={story} />
          ))}
          <footer className="flex justify-between items-center h-9">
            <div className="flex items-center gap-4">
              <span>Page 1 of 1</span>
              <select className="border rounded-md px-2 py-1">
                <option>20 Rows</option>
                <option>50 Rows</option>
                <option>100 Rows</option>
              </select>
            </div>
            <div className="flex gap-2">
              <button
                className="px-3 py-1 border rounded-md disabled:opacity-50"
                disabled
              >
                Previous
              </button>
              <button
                className="px-3 py-1 border rounded-md disabled:opacity-50"
                disabled
              >
                Next
              </button>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default StoryList;
