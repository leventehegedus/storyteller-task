// Components/StoryList/StoryList.tsx
import React, { useEffect, useState } from "react";
import { Search, ChevronDown, Plus } from "lucide-react";
import { Story, StoryFilters } from "../../types/story";
import StoryRow from "../StoryRow/StoryRow";
import { fetchStories } from "../../api/stories";

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
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Stories</h1>
        <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md flex items-center gap-2">
          <Plus size={16} />
          New Story
        </button>
      </header>

      <div className="flex gap-4 mb-6">
        <div className="relative flex-1">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="search"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 border rounded-md"
            value={filters.search}
            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
          />
        </div>
        <div className="relative w-48">
          <select
            className="w-full appearance-none bg-white border rounded-md px-4 py-2 pr-10"
            value={filters.status}
            onChange={(e) => setFilters({ ...filters, status: e.target.value })}
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
      </div>

      <table className="w-full" role="grid">
        <thead>
          <tr className="border-b">
            <th className="text-left py-3 px-4">Title</th>
            <th className="text-left py-3 px-4">Pages</th>
            <th className="text-left py-3 px-4">Last Modified</th>
            <th className="text-left py-3 px-4">Status</th>
            <th className="text-left py-3 px-4">Live From</th>
            <th className="text-left py-3 px-4">Ends</th>
            <th className="text-left py-3 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {stories.map((story) => (
            <StoryRow key={story.id} story={story} />
          ))}
        </tbody>
      </table>

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
