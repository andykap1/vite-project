    interface TagsSelectorProps {
  selected: Category;
  onChange: (category: Category) => void;
}
                                                                                                                                                                                                                                                                                                                                                                                                                        import type { Category } from '../../types/index';

const categories: Category[] = ['Urgent', 'Important', 'Work', 'Personal', 'Other'];

const TaskSelect = ({ selected, onChange }: TagsSelectorProps) => {
  return (
    <div className="border border-gray-300 rounded p-4">
      <label className="text-gray-500 text-sm mb-3 block">Tags</label>
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => onChange(cat)}
            className={`px-4 py-1 rounded text-sm font-medium transition-colors
              ${selected === cat
                ? 'bg-gray-800 text-white'
                : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TaskSelect;