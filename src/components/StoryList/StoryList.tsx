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

  return (
    <div className="bg-off-white rounded-b-lg pb-[30px] w-full">
      <header className="flex justify-between items-center flex-wrap py-4 px-[30px] gap-4">
        <h1 className="text-3xl font-semibold w-full tracking-[.01em] text-dark-primary">
          Stories
        </h1>

        <div className="flex gap-4 w-full">
          <div className="relative flex-1">
            <input
              type="search"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 border rounded-md h-9"
              value={filters.search}
              onChange={(e) =>
                setFilters({ ...filters, search: e.target.value })
              }
            />
            <Search
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
          </div>
          <div className="relative w-48">
            <select
              className="w-full appearance-none bg-white border rounded-md px-4 py-2 pr-10 h-9"
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
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
          </div>
          <Button
            text="New Story"
            size="medium"
            variant="green"
            icon={<Plus size={12} />}
          />
        </div>
      </header>

      <div className="w-full -mt-0.5 max-w-full overflow-auto">
        <div className="border-b flex">
          <div className="text-left py-3 px-4 flex-1">Title</div>
          <div className="text-left py-3 px-4 flex-1">Pages</div>
          <div className="text-left py-3 px-4 flex-1">Last Modified</div>
          <div className="text-left py-3 px-4 flex-1">Status</div>
          <div className="text-left py-3 px-4 flex-1">Live From</div>
          <div className="text-left py-3 px-4 flex-1">Ends</div>
          <div className="text-left py-3 px-4 flex-1">Actions</div>
        </div>
        <div>
          {stories.map((story) => (
            <StoryRow key={story.id} story={story} />
          ))}
        </div>
      </div>
      <footer className="flex justify-between items-center mt-6">
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
  );
};

export default StoryList;
