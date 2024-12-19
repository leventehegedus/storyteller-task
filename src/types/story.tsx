// Types
export interface Story {
  id: string;
  title: string;
  subtitle?: string;
  pages: string[];
  lastModified: string;
  status: "draft" | "scheduled" | "live" | "past";
  liveFrom?: string;
  ends?: string;
}

export interface StoryFilters {
  search: string;
  status: string;
}
