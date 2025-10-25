import React from 'react';
import { X } from 'lucide-react';

const WizardCard = ({ title, onCancel, children }) => (
  <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl max-w-3xl mx-auto animate-fadeIn">
    <div className="flex justify-between items-center border-b border-gray-200 pb-4 mb-6">
      <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
      <button 
        onClick={onCancel}
        className="text-gray-400 hover:text-gray-600 transition-colors rounded-full p-1"
        aria-label="Cancel and return to main screen"
      >
        <X size={24} />
      </button>
    </div>
    <div className="mt-6">
      {children}
    </div>
  </div>
);

export default WizardCard;