import React from 'react';
import { ChevronRight } from 'lucide-react';

const Breadcrumb = ({ steps, currentStep, highestStepReached, onNavigate }) => {
  const currentStepIndex = steps.findIndex(step => step.id === currentStep);

  return (
    <nav className="flex justify-center mb-8" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        {steps.map((step, index) => (
          <li key={step.id} className="inline-flex items-center">
            {index > 0 && (
              <ChevronRight className="w-6 h-6 text-gray-400" />
            )}
            <button
              onClick={() => onNavigate(step.id, index)}
              disabled={index > highestStepReached}
              className={`ml-1 text-sm font-medium md:ml-2 ${
                index === currentStepIndex
                  ? 'text-blue-600'
                  : 'text-gray-700 hover:text-blue-600 disabled:text-gray-400 disabled:hover:text-gray-400'
              }`}
              aria-current={index === currentStepIndex ? 'page' : undefined}
            >
              {step.name}
            </button>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;