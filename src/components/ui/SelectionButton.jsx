import React from 'react';

const SelectionButton = ({ icon, label, onClick, isSelected }) => {
  const Icon = icon;
  return (
    <button
      onClick={onClick}
      className={`group flex flex-col items-center justify-center p-6 border-2 rounded-xl text-center font-semibold
                 transition-all duration-300 ease-in-out
                 ${isSelected
                   ? 'bg-blue-100 border-blue-500 shadow-lg -translate-y-1'
                   : 'bg-gray-50 border-gray-200 text-gray-700 hover:border-blue-500 hover:bg-blue-50 hover:shadow-lg hover:-translate-y-1'
                 }`}
    >
      <Icon size={40} className={`mb-3 transition-colors ${isSelected ? 'text-blue-600' : 'text-gray-500 group-hover:text-blue-600'}`} />
      <span>{label}</span>
    </button>
  );
};

export default SelectionButton;