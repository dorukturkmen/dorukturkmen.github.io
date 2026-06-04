import React, { useState } from 'react';
import CourseSlot from './CourseSlot';
import { CoursePool, SemesterRequirements } from '../data/mockData';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function SemesterView({ semester, slots, userSelections, onSlotClick }) {
  const [isExpanded, setIsExpanded] = useState(true);

  const requiredEcts = SemesterRequirements[semester] || 30;

  // Calculate total ECTS for this semester
  const totalEcts = slots.reduce((total, slot) => {
    const courseId = slot.slotType === 'Mandatory' ? slot.fixedCourseId : userSelections[slot.slotId];
    if (courseId) {
      const course = CoursePool.find(c => c.id === courseId);
      if (course) {
        return total + course.ects;
      }
    }
    return total;
  }, 0);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mb-6 transition-all duration-300">
      <div 
        className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex justify-between items-center cursor-pointer hover:bg-slate-100 transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded-full bg-slate-800 text-white flex items-center justify-center font-bold text-sm">
            {semester}
          </div>
          <h3 className="text-lg font-bold text-slate-800">Semester {semester}</h3>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-end">
            <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Total ECTS</span>
            <span className={`text-lg font-bold ${totalEcts >= requiredEcts ? 'text-primary-600' : 'text-slate-700'}`}>
              {totalEcts} / {requiredEcts}
            </span>
          </div>
          <div className="text-slate-400">
            {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </div>
        </div>
      </div>
      
      {isExpanded && (
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {slots.map(slot => (
              <CourseSlot 
                key={slot.slotId}
                slot={slot}
                selectedCourseId={userSelections[slot.slotId]}
                onElectiveClick={() => onSlotClick(slot, 'elective')}
                onLegacyClick={() => onSlotClick(slot, 'legacy')}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
