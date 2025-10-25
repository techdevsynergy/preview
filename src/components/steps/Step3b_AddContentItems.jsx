import React from 'react';
import { ClipboardCheck, HelpCircle, Video, FileText } from 'lucide-react';
import WizardCard from '../ui/WizardCard';
import SelectionButton from '../ui/SelectionButton';

const Step3b_AddContentItems = ({ newItemConfig, onAddItem, onFinish, onCancel }) => {
  const ContentItemTypes = [
    { id: 'linkout', icon: ClipboardCheck, label: 'Link Out' },
    { id: 'flashcard', icon: HelpCircle, label: 'Flash Card' },
    { id: 'video', icon: Video, label: 'Video' },
    { id: 'pdf', icon: FileText, label: 'Pdf' },
    { id: 'form', icon: FileText, label: 'Form' },
  ];

  return (
    <WizardCard title={`Add Items to '${newItemConfig.name}'`} onCancel={onCancel}>
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Add Content</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {ContentItemTypes.map(item => (
            <SelectionButton
              key={item.id}
              icon={item.icon}
              label={item.label}
              onClick={() => onAddItem(item.id)}
            />
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Added Items</h3>
        <div className="bg-gray-50 p-4 rounded-lg min-h-[100px]">
          {newItemConfig.items && newItemConfig.items.length > 0 ? (
            <ul className="space-y-2">
              {newItemConfig.items.map((item) => (
                <li key={item.id} className="flex items-center justify-between bg-white p-2 rounded shadow-sm">
                  <span className="text-gray-700 capitalize">{item.type}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 text-center">No items added yet.</p>
          )}
        </div>
      </div>

      <div className="text-right pt-4">
        <button
          onClick={onFinish}
          className="inline-flex justify-center items-center py-2 px-6 border border-transparent
                     shadow-lg text-base font-medium rounded-lg text-white bg-green-600 
                     hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500
                     transition-all"
        >
          Finish & Save
        </button>
      </div>
    </WizardCard>
  );
};

export default Step3b_AddContentItems;