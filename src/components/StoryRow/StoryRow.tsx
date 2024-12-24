import { Story } from "../../types/story";
import Button from "../Button/Button";
import StatusBadge from "../StatusBadge/StatusBadge";

const StoryRow: React.FC<{ story: Story }> = ({ story }) => {
  return (
    <tr className="px-2.5 odd:bg-white">
      <td className="py-4 px-5">
        <div className="font-medium">
          <div className="text-blue-primary text-nowrap tracking-tighter">
            {story.title}
          </div>
          {story.subtitle && (
            <div className="text-gray text-nowrap tracking-tighter">
              {story.subtitle}
            </div>
          )}
        </div>
      </td>
      <td className="py-4 px-5">
        <div className="flex gap-1">
          {/* todo colors for +n stories */}
          {story.pages.slice(0, 6).map((page, index) => (
            <img
              key={index}
              src={page}
              alt={`Page ${index + 1}`}
              className="w-[29px] h-[52px] rounded-sm object-cover rounded"
            />
          ))}
          {story.pages.length > 5 && (
            <div className="w-[29px] h-[52px] rouned-sm bg-gray-100 rounded flex items-center justify-center text-sm">
              +{story.pages.length - 6}
            </div>
          )}
        </div>
      </td>
      <td className="py-4 px-5 text-sm">{story.lastModified}</td>
      <td className="py-4 px-5">
        <StatusBadge variant={story.status} />
      </td>
      <td className="py-4 px-5 text-sm">{story.liveFrom || "-"}</td>
      <td className="py-4 px-5 text-sm">{story.ends || "-"}</td>
      <td className="py-4 px-5">
        <Button text="Edit" variant="green" />
      </td>
    </tr>
  );
};

export default StoryRow;
