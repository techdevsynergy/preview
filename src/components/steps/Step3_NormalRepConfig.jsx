import React from 'react';
import { ChevronRight } from 'lucide-react';
import WizardCard from '../ui/WizardCard';
import ToggleSwitch from '../ui/ToggleSwitch';

const Step3_NormalRepConfig = ({ newItemConfig, onConfigChange, onSave, onCancel }) => (
  <WizardCard title={newItemConfig.repType === 'Practice' ? "Step 3: Select" : "Step 3: Configure Normal Rep"} onCancel={onCancel}>
    <div className="flex flex-wrap items-center mb-6 bg-gray-50 text-gray-800 p-3 rounded-lg gap-x-4 gap-y-2">
      <span className="font-semibold">Type:</span>
      <span className="bg-gray-200 text-gray-900 px-3 py-1 rounded-full text-sm font-medium">{newItemConfig.type}</span>
      <ChevronRight size={20} className="text-gray-400 hidden sm:inline-block" />
      <span className="font-semibold">Rep Type:</span>
      <span className="bg-gray-200 text-gray-900 px-3 py-1 rounded-full text-sm font-medium">{newItemConfig.repType}</span>
    </div>
    <form onSubmit={onSave} className="space-y-6">
      <ToggleSwitch 
        label="Coached"
        enabled={newItemConfig.coached}
        setEnabled={(val) => onConfigChange('coached', val)}
      />
      
      <div>
        <label htmlFor="keywords" className="block text-sm font-medium text-gray-700 mb-1">
          Keyword Configuration
        </label>
        <input
          type="text"
          id="keywords"
          value={newItemConfig.keywords}
          onChange={(e) => onConfigChange('keywords', e.target.value)}
          placeholder="e.g., 'empathy', 'pricing', 'next steps'"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="autoCoach" className="block text-sm font-medium text-gray-700 mb-1">
          Auto Coach Configuration
        </label>
        <textarea
          id="autoCoach"
          rows="4"
          value={newItemConfig.autoCoachConfig}
          onChange={(e) => onConfigChange('autoCoachConfig', e.target.value)}
          placeholder="Enter auto-coach logic or text..."
          className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      
      <div className="text-right pt-4">
        <button 
          type="submit"
          className="inline-flex justify-center items-center py-2 px-6 border border-transparent
                     shadow-lg text-base font-medium rounded-lg text-white bg-green-600 
                     hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500
                     transition-all"
        >
          Save Item
        </button>
      </div>
    </form>
  </WizardCard>
);

export default Step3_NormalRepConfig;