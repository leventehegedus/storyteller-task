import { mockStories } from "../mockdata/stories";
import { Story } from "../types/story";

// Mock API function for fetching stories with filtering and pagination
export const fetchStories = async (
  page: number = 1,
  limit: number = 20,
  filters: { search: string; status: string }
): Promise<{ stories: Story[]; total: number }> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  let filteredStories = [...mockStories];

  // Apply search filter
  if (filters.search) {
    const searchLower = filters.search.toLowerCase();
    filteredStories = filteredStories.filter(
      (story) =>
        story.title.toLowerCase().includes(searchLower) ||
        story.subtitle?.toLowerCase().includes(searchLower)
    );
  }

  // Apply status filter
  if (filters.status && filters.status !== "All Statuses") {
    filteredStories = filteredStories.filter(
      (story) => story.status.toLowerCase() === filters.status.toLowerCase()
    );
  }

  // Calculate pagination
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedStories = filteredStories.slice(startIndex, endIndex);

  return {
    stories: paginatedStories,
    total: filteredStories.length,
  };
};
