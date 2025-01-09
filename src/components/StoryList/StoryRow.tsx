import { cn } from "../../lib/utils";
import { Story } from "../../types/story";
import Button from "../Button/Button";
import StatusBadge from "../StatusBadge/StatusBadge";
import StoryPages from "./StoryPages";
import StoryRowItem from "./StoryRowItem";
import { Trash, Edit } from "lucide-react";
import StoryTitle from "./StoryTitle";

const textStyles = "text-sm text-dark-primary opacity-75 -tracking-[.01em]";
const StoryRow: React.FC<{ story: Story }> = ({ story }) => {
  console.log(story);
  return (
    <div className="flex px-2.5 odd:bg-white">
      <div className="flex items-center justify-between w-full">
        <StoryRowItem className="min-w-[202px] lg:min-w-[400px]">
          <StoryTitle title={story.title} subtitle={story.subtitle} />
        </StoryRowItem>
        <div className="flex">
          <StoryRowItem className="w-[273px]">
            <StoryPages pages={story.pages} />
          </StoryRowItem>
          <StoryRowItem className="w-[165px]">
            <span className={textStyles}>{story.lastModified}</span>
          </StoryRowItem>
          <StoryRowItem className="w-[111px] justify-center">
            <StatusBadge variant={story.status} />
          </StoryRowItem>
          <StoryRowItem className="text-sm w-[165px]">
            <span
              className={cn(textStyles, {
                "w-[14px] h-0 border-b border-gray": !story.liveFrom,
              })}
            >
              {story.liveFrom}
            </span>
          </StoryRowItem>
          <StoryRowItem className="text-sm w-[165px]">
            <span
              className={cn(textStyles, {
                "w-[14px] h-0 border-b border-gray": !story.ends,
              })}
            >
              {story.ends}
            </span>
          </StoryRowItem>
          <StoryRowItem className="w-[157px] pl-1 justify-between">
            <Button variant="red" icon={<Trash size={11} />} />
            <Button
              text="Edit"
              className="text-xs leading-[14px] "
              variant="green"
              icon={<Edit size={12} />}
            />
          </StoryRowItem>
        </div>
      </div>
    </div>
  );
};

export default StoryRow;
