import React from 'react';
import { Mic, Video, FileText, ClipboardCheck, HelpCircle } from 'lucide-react';
import WizardCard from '../ui/WizardCard';
import SelectionButton from '../ui/SelectionButton';

const Step2_TypeSelection = ({ newItemConfig, onSelectType, onNext, onCancel }) => {
  const selectedTypes = newItemConfig.type || [];
  
  const allTypes = [
    { id: 'audio', icon: Mic, label: 'Audio' },
    { id: 'video', icon: Video, label: 'Video' },
    { id: 'text', icon: FileText, label: 'Text' }
  ];

  const availableTypes = newItemConfig.repType === 'Practice'
    ? allTypes.filter(t => ['audio', 'video', 'text'].includes(t.id))
    : allTypes;

  return (
    <WizardCard title="Step 2: Select Type(s)" onCancel={onCancel}>
      <div className="flex items-center mb-6 bg-blue-50 text-blue-800 p-3 rounded-lg">
        <span className="font-semibold">Rep Type Selected:</span>
        <span className="ml-2 bg-blue-200 text-blue-900 px-3 py-1 rounded-full text-sm font-medium">{newItemConfig.repType}</span>
      </div>
      <p className="text-gray-600 mb-6 text-center">Now, choose one or more content types for this new item.</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {availableTypes.map(type => (
          <SelectionButton
            key={type.id}
            icon={type.icon}
            label={type.label}
            onClick={() => onSelectType(type.id)}
            isSelected={selectedTypes.includes(type.id)}
          />
        ))}
      </div>
      <div className="text-right pt-8">
        <button
          onClick={onNext}
          disabled={selectedTypes.length === 0}
          className="inline-flex justify-center items-center py-2 px-6 border border-transparent
                     shadow-lg text-base font-medium rounded-lg text-white
                     bg-blue-600 hover:bg-blue-700
                     disabled:bg-gray-400 disabled:cursor-not-allowed
                     focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
                     transition-all"
        >
          Next
        </button>
      </div>
    </WizardCard>
  );
};

export default Step2_TypeSelection;