import { Story } from "../../types/story";

const colors = {
  draft: "bg-gray-100 text-gray-800",
  scheduled: "bg-blue-100 text-blue-800",
  live: "bg-green-100 text-green-800",
  past: "bg-gray-100 text-gray-800",
};

const StatusBadge: React.FC<{ status: Story["status"] }> = ({ status }) => {
  return (
    <span className={`px-2 py-1 rounded-full text-sm ${colors[status]}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
};

export default StatusBadge;
