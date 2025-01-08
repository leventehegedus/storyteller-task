import { cn } from "../../lib/utils";
import { Story } from "../../types/story";
import Button from "../Button/Button";
import StatusBadge from "../StatusBadge/StatusBadge";
import StoryRowItem from "../StoryRowItem/StoryRowItem";
import { Trash, Edit } from "lucide-react";

const StoryRow: React.FC<{ story: Story }> = ({ story }) => (
  <div className="flex px-2.5 odd:bg-white">
    <div className="flex items-center justify-between">
      <StoryRowItem className="min-w-[400px]">
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
      <div className="flex">
        <StoryRowItem className="w-[273px]">
          <div className="flex gap-[5px]">
            {story.pages.slice(0, 6).map((page, index) => (
              <img
                key={index}
                src={page}
                alt={`Page ${index + 1}`}
                className="w-[29px] h-[52px] rounded-sm object-cover"
              />
            ))}
            {story.pages.length > 6 && (
              <div className="w-[29px] h-[52px] rounded-sm bg-gray-lighter flex items-center justify-center text-sm">
                <span className="text-dark-primary opacity-75">
                  +{story.pages.length - 6}
                </span>
              </div>
            )}
          </div>
        </StoryRowItem>
        <StoryRowItem className="w-[165px]">
          <span className="text-sm  text-dark-primary opacity-75 -tracking-[.01em]">
            {story.lastModified}
          </span>
        </StoryRowItem>
        <StoryRowItem className="w-[111px] justify-center">
          <StatusBadge variant={story.status} />
        </StoryRowItem>
        <StoryRowItem className="text-sm w-[165px]">
          <span
            className={cn({
              "text-sm text-dark-primary opacity-75 -tracking-[.01em]":
                story.liveFrom,
              "w-[14px] h-0 border-b border-gray": !story.liveFrom,
            })}
          >
            {story.liveFrom}
          </span>
        </StoryRowItem>
        <StoryRowItem className="text-sm w-[165px]">
          <span
            className={cn({
              "text-sm text-dark-primary opacity-75 -tracking-[.01em]":
                story.ends,
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

export default StoryRow;
