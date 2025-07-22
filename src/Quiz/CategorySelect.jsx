import QuestionData from './QuestionData.jsx'
import categoryIcons from './CategoryIcons.jsx'
import '../index.css'

export default function CategorySelect({ categories, onSelect }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br py-6 from-indigo-100 via-white to-pink-100">
      <h2 className="text-3xl font-extrabold mb-10 text-indigo-700">Catégories</h2>
        <categoryIcons />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {categories.map(cat => (
          <button
            key={cat}
            className="flex flex-col items-center px-8 py-6 bg-white rounded-2xl shadow-lg hover:scale-105 hover:bg-indigo-50 transition-all duration-200 border border-indigo-100"
            onClick={() => onSelect(cat)}
          >
            {categoryIcons[cat] || (
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v4l3 2" />
              </svg>
            )}
            <i className="mt-4 text-lg font-semibold text-indigo-700">{cat}</i>
          </button>
        ))}
      </div>
    </div>
  );
}