import React from 'react';
import { PlayCircle, User, Users, Lightbulb, Link } from 'lucide-react';
import WizardCard from '../ui/WizardCard';
import SelectionButton from '../ui/SelectionButton';

const Step1_RepTypeSelection = ({ onSelectRepType, onCancel }) => (
  <WizardCard title="Step 1: Select Rep Type" onCancel={onCancel}>
    <p className="text-gray-600 mb-6 text-center">Choose the representation or interaction model.</p>
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      <SelectionButton icon={PlayCircle} label="Skill" onClick={() => onSelectRepType('watch')} />
      <SelectionButton icon={User} label="Practice" onClick={() => onSelectRepType('Practice')} />
      <SelectionButton icon={Users} label="Roleplay" onClick={() => onSelectRepType('roleplay')} />
      <SelectionButton icon={Lightbulb} label="Insights" onClick={() => onSelectRepType('insights')} />
      <SelectionButton icon={Link} label="Connect" onClick={() => onSelectRepType('connect')} />
    </div>
  </WizardCard>
);

export default Step1_RepTypeSelection;