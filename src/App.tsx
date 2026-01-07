import React, { useState, useEffect } from 'react';
import { Terminal as TerminalIcon, Cpu, Globe, MessageSquare, Play } from 'lucide-react';

import Window from './modules/Ballerina/Window';
import DesktopIcon from './modules/Ballerina/DesktopIcon';
import MatrixAnalyzer from './modules/Malandra/MatrixAnalyzer';
import Terminal from './modules/Chola/Terminal';
import DeploymentAnalyzer from './modules/Malandra/DeploymentAnalyzer';
import MediaStudio from './modules/Fresa/MediaStudio';
import LiveConversation from './modules/Folklorico/LiveConversation';

import { WindowState, MatrixStats } from './types';
import { playWindowOpen, playWindowClose, playWindowMinimize } from './services/soundService';

const App: React.FC = () => {
  const [windows, setWindows] = useState<WindowState[]>([
    { id: 'terminal', title: 'SYSTEM_ROOT // TERMINAL', isOpen: true, isMinimized: false, zIndex: 1, type: 'terminal' },
    { id: 'matrix', title: 'MATRIX_ANALYZER // V2.0', isOpen: false, isMinimized: false, zIndex: 2, type: 'matrix' },
    { id: 'deploy', title: 'DEPLOYMENT_OPS // GLOBAL', isOpen: false, isMinimized: false, zIndex: 3, type: 'deploy' },
    { id: 'media', title: 'MEDIA_STUDIO // FLUX', isOpen: false, isMinimized: false, zIndex: 4, type: 'media' },
    { id: 'chat', title: 'LIVE_UPLINK // SECURE', isOpen: false, isMinimized: false, zIndex: 5, type: 'chat' },
  ]);

  const [activeWindow, setActiveWindow] = useState<string | null>('terminal');

  // Stats state for passing between components
  const [stats, setStats] = useState<MatrixStats>({
    activeNodes: 0,
    threatLevel: 'LOW',
    systemIntegrity: 100,
    networkLoad: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        activeNodes: Math.floor(Math.random() * 1000) + 500,
        threatLevel: Math.random() > 0.9 ? 'HIGH' : Math.random() > 0.7 ? 'MED' : 'LOW',
        systemIntegrity: Math.max(0, Math.min(100, prev.systemIntegrity + (Math.random() * 2 - 1))),
        networkLoad: Math.floor(Math.random() * 100)
      }));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const toggleWindow = (id: string) => {
    setWindows(prev => {
      const window = prev.find(w => w.id === id);
      if (window?.isOpen) {
        if (window.id === activeWindow) {
          playWindowMinimize();
          return prev.map(w => w.id === id ? { ...w, isMinimized: !w.isMinimized } : w);
        } else {
          setActiveWindow(id);
          return prev.map(w => ({ ...w, zIndex: w.id === id ? 100 : 1 }));
        }
      } else {
        playWindowOpen();
        setActiveWindow(id);
        return prev.map(w => w.id === id ? { ...w, isOpen: true, isMinimized: false, zIndex: 100 } : { ...w, zIndex: 1 });
      }
    });
  };

  const closeWindow = (id: string) => {
    playWindowClose();
    setWindows(prev => prev.map(w => w.id === id ? { ...w, isOpen: false } : w));
    if (activeWindow === id) setActiveWindow(null);
  };

  const bringToFront = (id: string) => {
    setActiveWindow(id);
    setWindows(prev => prev.map(w => ({ ...w, zIndex: w.id === id ? 100 : 1 })));
  };

  return (
    <div className="min-h-screen bg-bg-dark text-white font-rajdhani overflow-hidden relative selection:bg-neon-gold selection:text-black">
      {/* Background Grid Animation */}
      <div className="absolute inset-0 pointer-events-none opacity-20"
           style={{
             backgroundImage: 'linear-gradient(rgba(0, 255, 0, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 0, 0.1) 1px, transparent 1px)',
             backgroundSize: '30px 30px'
           }}>
      </div>

      {/* Scanline Effect */}
      <div className="absolute inset-0 pointer-events-none bg-[url('https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3Z5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7TKSjRrfIPjeiVyM/giphy.gif')] opacity-[0.03] bg-repeat"></div>

      {/* Desktop Icons */}
      <div className="absolute top-10 left-10 flex flex-col gap-6 z-0">
        <DesktopIcon icon={<TerminalIcon />} label="TERMINAL" onClick={() => toggleWindow('terminal')} />
        <DesktopIcon icon={<Cpu />} label="MATRIX" onClick={() => toggleWindow('matrix')} />
        <DesktopIcon icon={<Globe />} label="DEPLOY" onClick={() => toggleWindow('deploy')} />
        <DesktopIcon icon={<Play />} label="MEDIA" onClick={() => toggleWindow('media')} />
        <DesktopIcon icon={<MessageSquare />} label="UPLINK" onClick={() => toggleWindow('chat')} />
      </div>

      {/* Windows */}
      {windows.map(window => (
        window.isOpen && !window.isMinimized && (
          <Window
            key={window.id}
            title={window.title}
            isActive={activeWindow === window.id}
            onClose={() => closeWindow(window.id)}
            onClick={() => bringToFront(window.id)}
            zIndex={window.zIndex}
          >
            {window.type === 'terminal' && <Terminal />}
            {window.type === 'matrix' && <MatrixAnalyzer stats={stats} />}
            {window.type === 'deploy' && <DeploymentAnalyzer />}
            {window.type === 'media' && <MediaStudio />}
            {window.type === 'chat' && <LiveConversation />}
          </Window>
        )
      ))}

      {/* Taskbar */}
      <div className="fixed bottom-0 left-0 right-0 h-12 bg-glass-bg border-t border-neon-gold flex items-center px-4 gap-2 z-[1000] backdrop-blur-sm">
        <div className="font-mono text-neon-gold mr-4 text-xl tracking-widest font-bold">DECO_X //</div>
        {windows.map(window => (
          window.isOpen && (
            <button
              key={window.id}
              onClick={() => toggleWindow(window.id)}
              className={`px-4 py-1 border ${activeWindow === window.id ? 'bg-neon-gold text-black border-neon-gold shadow-glow-gold' : 'border-gray-600 text-gray-400 hover:border-neon-gold hover:text-neon-gold'} font-mono text-sm transition-all duration-300 uppercase`}
            >
              {window.id}
            </button>
          )
        ))}
        <div className="ml-auto font-mono text-neon-cyan animate-pulse">
          {stats.threatLevel} :: {new Date().toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
};

export default App;
