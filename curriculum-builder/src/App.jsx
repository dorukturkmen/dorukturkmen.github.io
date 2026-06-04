import React, { useState, useEffect } from 'react';
import { CurriculumTemplate } from './data/mockData';
import SemesterView from './components/SemesterView';
import CourseSelectionModal from './components/CourseSelectionModal';
import { GraduationCap } from 'lucide-react';

function App() {
  // Group slots by semester
  const slotsBySemester = CurriculumTemplate.reduce((acc, slot) => {
    if (!acc[slot.semester]) {
      acc[slot.semester] = [];
    }
    acc[slot.semester].push(slot);
    return acc;
  }, {});

  // Initialize state from localStorage or empty object
  const [userSelections, setUserSelections] = useState(() => {
    const saved = localStorage.getItem('curriculumSelections');
    return saved ? JSON.parse(saved) : {};
  });

  // Modal state
  const [activeSlot, setActiveSlot] = useState(null);

  // Save to localStorage whenever selections change
  useEffect(() => {
    localStorage.setItem('curriculumSelections', JSON.stringify(userSelections));
  }, [userSelections]);

  const handleSlotClick = (slot, mode = 'elective') => {
    setActiveSlot({ ...slot, mode });
  };

  const handleSelectCourse = (courseId) => {
    if (activeSlot) {
      setUserSelections(prev => {
        const next = { ...prev };
        if (courseId === null) {
          delete next[activeSlot.slotId];
        } else {
          next[activeSlot.slotId] = courseId;
        }
        return next;
      });
      setActiveSlot(null);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 font-sans">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="bg-primary-600 text-white p-2 rounded-lg">
                <GraduationCap size={24} />
              </div>
              <h1 className="text-xl font-bold text-slate-800 tracking-tight">Curriculum Builder</h1>
            </div>
            <div className="text-sm font-medium text-slate-500">
              Interactive Equivalency Simulator
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-900">Plan Your Studies</h2>
          <p className="mt-2 text-slate-600 max-w-2xl">
            Select your electives to complete your curriculum. Pay attention to equivalency warnings if you select legacy courses. Your progress is saved automatically.
          </p>
        </div>

        <div className="space-y-2">
          {Object.entries(slotsBySemester).map(([semester, slots]) => (
            <SemesterView
              key={semester}
              semester={parseInt(semester)}
              slots={slots}
              userSelections={userSelections}
              onSlotClick={handleSlotClick}
            />
          ))}
        </div>
      </main>

      <CourseSelectionModal
        isOpen={!!activeSlot}
        onClose={() => setActiveSlot(null)}
        activeSlot={activeSlot}
        onSelectCourse={handleSelectCourse}
      />
    </div>
  );
}

export default App;
