import React from 'react';
import WizardCard from '../ui/WizardCard';

const Step2b_Details = ({ newItemConfig, onConfigChange, onSave, onCancel }) => (
  <WizardCard title="Step 2b: Add Details" onCancel={onCancel}>
    <div className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
        <input type="text" id="name" value={newItemConfig.name} onChange={(e) => onConfigChange('name', e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>
      <div>
        <label htmlFor="displayName" className="block text-sm font-medium text-gray-700 mb-1">Display Name</label>
        <input type="text" id="displayName" value={newItemConfig.displayName} onChange={(e) => onConfigChange('displayName', e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>
      <div>
        <label htmlFor="externalId" className="block text-sm font-medium text-gray-700 mb-1">External ID</label>
        <input type="text" id="externalId" value={newItemConfig.externalId} onChange={(e) => onConfigChange('externalId', e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>
      <div>
        <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">Image Upload</label>
        <input type="file" id="image" onChange={(e) => onConfigChange('image', e.target.files[0])} className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
      </div>
    </div>
    <div className="text-right pt-8">
      <button
        onClick={onSave}
        className="inline-flex justify-center items-center py-2 px-6 border border-transparent shadow-lg text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all"
      >
        Next
      </button>
    </div>
  </WizardCard>
);

export default Step2b_Details;