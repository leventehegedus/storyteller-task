import React from "react";
import { ArrowDownUp, ArrowDown, ArrowUp } from "lucide-react";
import { cn } from "../../lib/utils";
import { Story } from "../../types/story";

type StoryKey = keyof Story;

interface SortableHeaderProps {
  label: string;
  sortKey: StoryKey;
  sortConfig: { key: string; direction: "asc" | "desc" } | null;
  className?: string;
  requestSort: (key: StoryKey) => void;
}

const SortableHeader: React.FC<SortableHeaderProps> = ({
  label,
  sortKey,
  sortConfig,
  className,
  requestSort,
}) => {
  const renderSortIcon = () => {
    if (sortConfig && sortConfig.key === sortKey) {
      return sortConfig.direction === "asc" ? (
        <ArrowDown size={12} className="text-dark-primary" />
      ) : (
        <ArrowUp size={12} className="text-dark-primary" />
      );
    } else {
      return <ArrowDownUp size={12} className="text-gray" />;
    }
  };

  return (
    <div
      className={cn(
        "px-2.5 flex items-center gap-1.5 cursor-pointer text-sm leading-5 text-dark-primary font-semibold",
        className
      )}
      onClick={() => requestSort(sortKey)}
    >
      <span>{label}</span>
      {renderSortIcon()}
    </div>
  );
};

export default SortableHeader;
