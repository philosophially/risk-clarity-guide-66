
import React from 'react';

interface RiskLevelProps {
  level: 'high' | 'medium' | 'low';
}

const RiskLevel: React.FC<RiskLevelProps> = ({ level }) => {
  return (
    <span className={`risk-badge-${level}`}>
      {level === 'high' ? 'High Risk' : level === 'medium' ? 'Medium Risk' : 'Low Risk'}
    </span>
  );
};

export default RiskLevel;
