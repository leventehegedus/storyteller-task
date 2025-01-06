import { Story } from "../../types/story";
import Button from "../Button/Button";
import StatusBadge from "../StatusBadge/StatusBadge";
import StoryRowItem from "../StoryRowItem/StoryRowItem";

const StoryRow: React.FC<{ story: Story }> = ({ story }) => (
  <div className="flex px-2.5 odd:bg-white">
    <StoryRowItem>
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
    <StoryRowItem>
      <div className="flex gap-1">
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
    <StoryRowItem className="text-sm">{story.lastModified}</StoryRowItem>
    <StoryRowItem>
      <StatusBadge variant={story.status} />
    </StoryRowItem>
    <StoryRowItem className="text-sm">{story.liveFrom || "-"}</StoryRowItem>
    <StoryRowItem className="text-sm">{story.ends || "-"}</StoryRowItem>
    <StoryRowItem>
      <Button text="Edit" variant="green" />
    </StoryRowItem>
  </div>
);

export default StoryRow;
