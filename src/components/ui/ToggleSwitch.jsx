import React from 'react';

const ToggleSwitch = ({ label, enabled, setEnabled }) => (
  <div className="flex items-center justify-between">
    <span className="font-medium text-gray-700">{label}</span>
    <button
      type="button"
      onClick={() => setEnabled(!enabled)}
      className={`${
        enabled ? 'bg-blue-600' : 'bg-gray-200'
      } relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent 
         transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
      role="switch"
      aria-checked={enabled}
    >
      <span
        aria-hidden="true"
        className={`${
          enabled ? 'translate-x-5' : 'translate-x-0'
        } inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 
           transition duration-200 ease-in-out`}
      />
    </button>
  </div>
);

export default ToggleSwitch;