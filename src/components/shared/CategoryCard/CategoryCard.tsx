import type { IconType } from "react-icons";

interface CategoryCardProps {
  icon: IconType;
  title: string;
  hasViewButton?: boolean;
  className?: string;
}

const CategoryCard = ({
  icon: Icon,
  title,
  hasViewButton = false,
  className = "",
}: CategoryCardProps) => {
  return (
    <div
      className={`bg-blue-100 rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden ${className}`}
    >
      <div className="flex justify-between items-start">
        <Icon className="text-3xl text-blue-600" />
        {hasViewButton && (
          <button className="bg-white text-gray-600 px-3 py-1.5 rounded-full text-xs font-medium hover:bg-gray-50 transition-colors">
            View
          </button>
        )}
      </div>
      <div className="mt-auto">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>
    </div>
  );
};

export default CategoryCard;
