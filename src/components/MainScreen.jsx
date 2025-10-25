import React from 'react';
import { Plus, ClipboardCheck, X } from 'lucide-react';

const MainScreen = ({ flowItems, onStartAdd, onEditItem, onRemoveItem, renderItemDetails }) => (
  <div className="max-w-4xl mx-auto">
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-3xl font-bold text-gray-900">Enterprise Dashboard </h1>
      <button
        onClick={onStartAdd}
        className="inline-flex items-center gap-2 py-2 px-5 bg-blue-600 text-white font-semibold
                   rounded-lg shadow-md hover:bg-blue-700 transition-all focus:outline-none
                   focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        <Plus size={20} />
        Create Rep
      </button>
    </div>

    <div className="bg-white p-6 rounded-2xl shadow-lg min-h-[300px]">
      {flowItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-[300px] text-gray-500">
          <ClipboardCheck size={48} className="mb-4 text-gray-400" />
          <p className="text-lg font-medium">No items added yet.</p>
          <p className="text-sm">Click "Add New Item" to get started.</p>
        </div>
      ) : (
        <ul className="divide-y divide-gray-200">
          {flowItems.map((item, index) => (
            <li key={index} className="py-4 px-2 flex justify-between items-center">
              <div className="cursor-pointer flex-grow" onClick={() => onEditItem(index)}>
                <h3 className="text-lg font-semibold text-gray-900 capitalize">
                  {item.name || (Array.isArray(item.type) ? item.type.join(', ') : item.type)} / <span className="text-blue-600">{item.repType}</span>
                </h3>
                <p className="text-sm text-gray-600 mt-1 truncate">
                  {renderItemDetails(item)}
                </p>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onRemoveItem(index);
                }}
                className="ml-4 p-2 text-gray-400 hover:text-red-500 hover:bg-red-100 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
                aria-label="Remove item"
              >
                <X size={18} />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  </div>
);

export default MainScreen;