import React from 'react';

interface DesktopIconProps {
  label: string;
  icon: React.ReactNode;
  colorClass: string;
  onClick: () => void;
}

const DesktopIcon: React.FC<DesktopIconProps> = ({ label, icon, colorClass, onClick }) => {
  return (
    <div 
      className={`group relative w-20 h-20 bg-gray-900/90 border-2 rounded-xl flex items-center justify-center cursor-pointer transition-all duration-300 hover:-translate-y-4 hover:scale-110 hover:bg-gray-800 z-10 ${colorClass}`}
      onClick={onClick}
    >
      <div className="text-4xl filter drop-shadow-lg transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>
      <div className={`absolute -bottom-8 opacity-0 group-hover:opacity-100 group-hover:bottom-[-45px] transition-all duration-300 bg-black px-3 py-1 border text-xs font-mono whitespace-nowrap pointer-events-none z-50 ${colorClass.replace('border-', 'border-').replace('shadow-', 'shadow-')}`}>
        {label}
      </div>
    </div>
  );
};

export default DesktopIcon;