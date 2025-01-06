import { Story } from "../../types/story";
import Button from "../Button/Button";
import StatusBadge from "../StatusBadge/StatusBadge";
import StoryRowItem from "../StoryRowItem/StoryRowItem";
import { Trash, Edit } from "lucide-react";

const StoryRow: React.FC<{ story: Story }> = ({ story }) => (
  <div className="flex px-2.5 odd:bg-white">
    <StoryRowItem className="min-w-[606px]">
      <div className="font-medium text-base leading-5">
        <div className="text-blue-primary text-nowrap -tracking-[.01em]">
          {story.title}
        </div>
        {story.subtitle && (
          <div className="text-gray text-nowrap -tracking-[.01em]">
            {story.subtitle}
          </div>
        )}
      </div>
    </StoryRowItem>
    <StoryRowItem className="min-w-[273px]">
      <div className="flex gap-[5px]">
        {story.pages.slice(0, 6).map((page, index) => (
          <img
            key={index}
            src={page}
            alt={`Page ${index + 1}`}
            className="w-[29px] h-[52px] rounded-sm object-cover"
          />
        ))}
        {story.pages.length > 5 && (
          <div className="w-[29px] h-[52px] rounded-sm bg-gray-100 flex items-center justify-center text-sm">
            +{story.pages.length - 6}
          </div>
        )}
      </div>
    </StoryRowItem>
    <StoryRowItem className="min-w-[165px]">
      <span className="text-sm text-dark-primary opacity-75 -tracking-[.01em]">
        {story.lastModified}
      </span>
    </StoryRowItem>
    <StoryRowItem className="w-[111px] justify-center">
      <StatusBadge variant={story.status} />
    </StoryRowItem>
    <StoryRowItem className="text-sm">
      <span className="text-sm text-dark-primary opacity-75 -tracking-[.01em]">
        {story.liveFrom || "-"}
      </span>
    </StoryRowItem>
    <StoryRowItem className="text-sm">
      <span className="text-sm text-dark-primary opacity-75 -tracking-[.01em]">
        {story.ends || "-"}
      </span>
    </StoryRowItem>
    <StoryRowItem>
      <Button variant="red" icon={<Trash size={11} />} />
    </StoryRowItem>
    <StoryRowItem>
      <Button
        text="Edit"
        className="text-xs leading-[14px] "
        variant="green"
        icon={<Edit size={12} />}
      />
    </StoryRowItem>
  </div>
);

export default StoryRow;
