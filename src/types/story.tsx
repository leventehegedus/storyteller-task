export enum Status {
  Draft = "draft",
  Scheduled = "scheduled",
  Live = "live",
  Past = "past",
}
// Types
export interface Story {
  id: string;
  title: string;
  subtitle?: string;
  pages: string[];
  lastModified: string;
  status: Status;
  liveFrom?: string;
  ends?: string;
}

export interface StoryFilters {
  search: string;
  status: string;
}
