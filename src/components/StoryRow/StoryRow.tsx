import { Story } from "../../types/story";
import Button from "../Button/Button";
import StatusBadge from "../StatusBadge/StatusBadge";

const StoryRow: React.FC<{ story: Story }> = ({ story }) => {
  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="py-4 px-4">
        <div>
          <div className="font-medium">{story.title}</div>
          {story.subtitle && (
            <div className="text-sm text-gray-500">{story.subtitle}</div>
          )}
        </div>
      </td>
      <td className="py-4 px-4">
        <div className="flex gap-1">
          {story.pages.slice(0, 5).map((page, index) => (
            <img
              key={index}
              src={page}
              alt={`Page ${index + 1}`}
              className="w-10 h-10 object-cover rounded"
            />
          ))}
          {story.pages.length > 5 && (
            <div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center text-sm">
              +{story.pages.length - 5}
            </div>
          )}
        </div>
      </td>
      <td className="py-4 px-4 text-sm">{story.lastModified}</td>
      <td className="py-4 px-4">
        <StatusBadge variant={story.status} />
      </td>
      <td className="py-4 px-4 text-sm">{story.liveFrom || "-"}</td>
      <td className="py-4 px-4 text-sm">{story.ends || "-"}</td>
      <td className="py-4 px-4">
        <Button text="Edit" variant="green" />
      </td>
    </tr>
  );
};

export default StoryRow;
