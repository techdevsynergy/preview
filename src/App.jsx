import React, { useState } from 'react';
import MainScreen from './components/MainScreen';
import Step1_RepTypeSelection from './components/steps/Step1_RepTypeSelection';
import Step2_TypeSelection from './components/steps/Step2_TypeSelection';
import Step2b_Details from './components/steps/Step2b_Details';
import Step3_NormalRepConfig from './components/steps/Step3_NormalRepConfig';
import Step3b_AddContentItems from './components/steps/Step3b_AddContentItems';
import Breadcrumb from './components/ui/Breadcrumb';

export default function App() {
  const [currentStep, setCurrentStep] = useState('main');
  const [highestStepReached, setHighestStepReached] = useState(0);
  const [flowItems, setFlowItems] = useState([]);
  const [newItemConfig, setNewItemConfig] = useState(null);
  const [editingIndex, setEditingIndex] = useState(null);

  const updateStep = (step, stepIndex) => {
    setCurrentStep(step);
    setHighestStepReached(prev => Math.max(prev, stepIndex));
  };

  const handleSelectRepType = (repType) => {
    if (repType === 'Content') {
      setNewItemConfig({
        repType: 'Content',
        name: '',
        displayName: '',
        externalId: '',
        image: null,
      });
      updateStep('step2_details', 2);
    } else {
      setNewItemConfig(prev => ({ ...prev, repType, type: [] }));
      updateStep('step2_type', 1);
    }
  };

  const handleSelectType = (type) => {
    setNewItemConfig(prev => {
      const currentTypes = prev.type || [];
      const newTypes = currentTypes.includes(type)
        ? currentTypes.filter(t => t !== type)
        : [...currentTypes, type];
      return { ...prev, type: newTypes };
    });
  };

  const handleNextFromTypeSelection = () => {
    const { type } = newItemConfig;
    if (!type || type.length === 0) return;
    setNewItemConfig(prev => ({
      ...prev,
      name: '',
      displayName: '',
      externalId: '',
      image: null,
    }));
    updateStep('step2_details', 2);
  };

  const handleConfigChange = (field, value) => {
    setNewItemConfig(prev => ({ ...prev, [field]: value }));
  };

  const handleSaveNormalRep = (e) => {
    e.preventDefault();
    if (editingIndex !== null) {
      const updatedFlowItems = [...flowItems];
      updatedFlowItems[editingIndex] = newItemConfig;
      setFlowItems(updatedFlowItems);
    } else {
      setFlowItems(prev => [...prev, newItemConfig]);
    }
    setNewItemConfig(null);
    setEditingIndex(null);
    setCurrentStep('main');
  };

  const handleSaveDetails = () => {
    const { repType } = newItemConfig;
    if (repType === 'Practice') {
      setNewItemConfig(prev => ({
        ...prev,
        coached: false,
        keywords: '',
        autoCoachConfig: ''
      }));
      updateStep('step3_normalRep', 3);
    } else if (repType === 'Content') {
      setNewItemConfig(prev => ({ ...prev, items: [] }));
      updateStep('step3_addContentItems', 3);
    } else {
      const newItems = newItemConfig.type.map(t => ({
        repType: newItemConfig.repType,
        type: t,
        name: newItemConfig.name,
        displayName: newItemConfig.displayName,
        externalId: newItemConfig.externalId,
        image: newItemConfig.image,
      }));
      if (editingIndex !== null) {
        const updatedFlowItems = [...flowItems];
        updatedFlowItems.splice(editingIndex, 1, ...newItems);
        setFlowItems(updatedFlowItems);
      } else {
        setFlowItems(prev => [...prev, ...newItems]);
      }
      setNewItemConfig(null);
      setEditingIndex(null);
      setCurrentStep('main');
    }
  };

  const handleAddContentItem = (itemType) => {
    const newItem = { type: itemType, id: Date.now() };
    setNewItemConfig(prev => ({
      ...prev,
      items: [...prev.items, newItem]
    }));
  };

  const handleFinishContentItems = () => {
    if (editingIndex !== null) {
      const updatedFlowItems = [...flowItems];
      updatedFlowItems[editingIndex] = newItemConfig;
      setFlowItems(updatedFlowItems);
    } else {
      setFlowItems(prev => [...prev, newItemConfig]);
    }
    setNewItemConfig(null);
    setEditingIndex(null);
    setCurrentStep('main');
  };

  const handleStartAdd = () => {
    setNewItemConfig({});
    setHighestStepReached(0);
    setEditingIndex(null);
    updateStep('step1_repType', 0);
  };

  const handleCancelAdd = () => {
    setNewItemConfig(null);
    setEditingIndex(null);
    setCurrentStep('main');
  };

  const handleNavigate = (stepId, index) => {
    if (index <= highestStepReached) {
      setCurrentStep(stepId);
    }
  };

  const handleEditItem = (index) => {
    const itemToEdit = flowItems[index];
    setNewItemConfig(itemToEdit);
    setEditingIndex(index);
    // Determine the correct starting step based on the item type
    if (itemToEdit.repType === 'Practice') {
      updateStep('step3_normalRep', 3);
    } else if (itemToEdit.repType === 'Content') {
      updateStep('step3_addContentItems', 3);
    } else {
      updateStep('step2_details', 2);
    }
  };
  const handleRemoveItem = (index) => {
    setFlowItems(prev => prev.filter((_, i) => i !== index));
  };


  const renderItemDetails = (item) => {
    const details = [];
    if (item.displayName) details.push(`Display Name: ${item.displayName}`);
    if (item.externalId) details.push(`External ID: ${item.externalId}`);
    if (item.repType === 'Practice') {
      details.push(item.coached ? 'Coached' : 'Not Coached');
      if (item.keywords) details.push(`Keywords: ${item.keywords}`);
      if (item.autoCoachConfig) details.push(`Auto-Coach: ${item.autoCoachConfig.substring(0, 30)}...`);
    } else if (item.repType === 'Content' && item.items) {
      details.push(`Contains: ${item.items.map(i => i.type).join(', ')}`);
    } else {
      details.push(`Rep Type: ${item.repType}`);
    }
    if (details.length === 0) return 'No additional configuration';
    return details.join(' | ');
  };

  const renderCurrentStep = () => {
    const repType = newItemConfig ? newItemConfig.repType : null;

    const steps = [
      { id: 'step1_repType', name: 'Rep Type' },
      ...(repType !== 'Content' ? [{ id: 'step2_type', name: 'Content Type' }] : []),
      { id: 'step2_details', name: 'Details' },
      ...(repType === 'Practice' ? [{ id: 'step3_normalRep', name: 'Configuration' }] : []),
      ...(repType === 'Content' ? [{ id: 'step3_addContentItems', name: 'Add Items' }] : []),
    ];

    const wizardLayout = (stepContent) => (
      <div>
        <Breadcrumb steps={steps} currentStep={currentStep} highestStepReached={highestStepReached} onNavigate={handleNavigate} />
        {stepContent}
      </div>
    );

    switch (currentStep) {
      case 'step1_repType':
        return wizardLayout(<Step1_RepTypeSelection onSelectRepType={handleSelectRepType} onCancel={handleCancelAdd} />);
      case 'step2_type':
        return wizardLayout(<Step2_TypeSelection newItemConfig={newItemConfig} onSelectType={handleSelectType} onNext={handleNextFromTypeSelection} onCancel={handleCancelAdd} />);
      case 'step2_details':
        return wizardLayout(<Step2b_Details newItemConfig={newItemConfig} onConfigChange={handleConfigChange} onSave={handleSaveDetails} onCancel={handleCancelAdd} />);
      case 'step3_normalRep':
        return wizardLayout(<Step3_NormalRepConfig newItemConfig={newItemConfig} onConfigChange={handleConfigChange} onSave={handleSaveNormalRep} onCancel={handleCancelAdd} />);
      case 'step3_addContentItems':
        return wizardLayout(<Step3b_AddContentItems newItemConfig={newItemConfig} onAddItem={handleAddContentItem} onFinish={handleFinishContentItems} onCancel={handleCancelAdd} />);
      case 'main':
      default:
        return <MainScreen flowItems={flowItems} onStartAdd={handleStartAdd} onEditItem={handleEditItem} onRemoveItem={handleRemoveItem} renderItemDetails={renderItemDetails} />;
    }
  };

  return (
    <>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
      <div className="bg-gray-100 min-h-screen p-4 sm:p-8 font-sans text-gray-900">
        {renderCurrentStep()}
      </div>
    </>
  );
}
