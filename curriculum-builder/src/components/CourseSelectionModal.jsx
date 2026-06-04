import React from 'react';
import { X } from 'lucide-react';
import { CoursePool, EquivalencyRules } from '../data/mockData';

export default function CourseSelectionModal({ isOpen, onClose, activeSlot, onSelectCourse }) {
  if (!isOpen || !activeSlot) return null;

  let availableCourses = [];
  let modalTitle = '';

  if (activeSlot.mode === 'legacy') {
    // Find all legacy courses that map to this fixed course
    const legacyRules = EquivalencyRules.filter(r => r.newCourseId === activeSlot.fixedCourseId);
    const legacyCourseIds = legacyRules.map(r => r.oldCourseId);
    availableCourses = CoursePool.filter(c => legacyCourseIds.includes(c.id));
    modalTitle = `Select Legacy Course for ${activeSlot.fixedCourseId}`;
  } else {
    // Normal elective selection
    availableCourses = CoursePool.filter(course => course.category === activeSlot.slotType);
    modalTitle = `Select ${activeSlot.slotType}`;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col max-h-[80vh]">
        <div className="flex justify-between items-center p-4 border-b border-slate-200">
          <h2 className="text-xl font-bold text-slate-800">{modalTitle}</h2>
          <button 
            onClick={onClose}
            className="text-slate-500 hover:text-slate-700 hover:bg-slate-100 p-2 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="overflow-y-auto p-4 flex-1">
          {availableCourses.length === 0 ? (
            <p className="text-slate-500 text-center py-8">No courses available for this category.</p>
          ) : (
            <div className="space-y-3">
              {activeSlot.mode === 'legacy' && (
                <button
                  onClick={() => onSelectCourse(null)}
                  className="w-full text-left p-4 rounded-lg border border-slate-200 hover:border-slate-400 hover:bg-slate-50 transition-all flex justify-between items-center group"
                >
                  <div className="font-semibold text-slate-700">
                    Standard Curriculum (Remove Legacy)
                  </div>
                </button>
              )}
              
              {availableCourses.map(course => (
                <button
                  key={course.id}
                  onClick={() => onSelectCourse(course.id)}
                  className="w-full text-left p-4 rounded-lg border border-slate-200 hover:border-primary-500 hover:bg-primary-50 transition-all flex justify-between items-center group"
                >
                  <div>
                    <div className="font-semibold text-slate-800 group-hover:text-primary-700 transition-colors">
                      {course.id}
                    </div>
                    <div className="text-sm text-slate-600 mt-1">
                      {course.title}
                    </div>
                  </div>
                  <div className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium group-hover:bg-primary-100 group-hover:text-primary-800 transition-colors">
                    {course.ects} ECTS
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
