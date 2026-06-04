import React from 'react';
import { CoursePool, EquivalencyRules } from '../data/mockData';
import { AlertTriangle, BookOpen, CheckCircle2, ChevronRight } from 'lucide-react';

export default function CourseSlot({ slot, selectedCourseId, onElectiveClick, onLegacyClick }) {
  const isMandatory = slot.slotType === 'Mandatory';
  
  // The course currently occupying this slot
  const courseId = isMandatory ? (selectedCourseId || slot.fixedCourseId) : selectedCourseId;
  const course = CoursePool.find(c => c.id === courseId);
  const isLegacySelected = isMandatory && selectedCourseId;
  
  // Find if there are any legacy options for this mandatory course
  const legacyOptions = EquivalencyRules.filter(r => r.newCourseId === slot.fixedCourseId);
  const hasLegacyOptions = isMandatory && legacyOptions.length > 0;

  // Check equivalency rules
  const equivalencyRule = course ? EquivalencyRules.find(r => r.oldCourseId === course.id) : null;

  if (isMandatory) {
    return (
      <div className={`rounded-xl p-4 flex flex-col h-full relative overflow-hidden transition-all duration-200
        ${isLegacySelected ? 'bg-orange-50 border-2 border-orange-300 shadow-sm' : 'bg-slate-50 border-2 border-slate-200 opacity-90'}
      `}>
        <div className="absolute top-0 right-0 bg-slate-200 text-slate-600 text-[10px] font-bold px-2 py-1 rounded-bl-lg">
          MANDATORY
        </div>
        <div className="flex items-start gap-3 mt-1">
          <div className="bg-slate-200 p-2 rounded-lg text-slate-500 mt-1">
            <BookOpen size={18} />
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-slate-700">{course?.id || slot.fixedCourseId}</h4>
            <p className="text-sm text-slate-500 mt-1 line-clamp-2">{course?.title || 'Unknown Course'}</p>
          </div>
        </div>
        
        {isLegacySelected && equivalencyRule && (
          <div className="mt-3 bg-orange-100 border border-orange-200 rounded-md p-2 flex items-start gap-2">
            <AlertTriangle size={14} className="text-orange-500 mt-0.5 shrink-0" />
            <p className="text-xs text-orange-800 font-medium">
              You selected the legacy course <b>{course.id}</b> which is equivalent to <b>{equivalencyRule.newCourseId}</b>.
            </p>
          </div>
        )}

        <div className="mt-auto pt-4 flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <span className="text-xs font-semibold text-slate-500 bg-slate-200/50 px-2 py-1 rounded-md">
              {course?.ects || 0} ECTS
            </span>
          </div>
          
          {hasLegacyOptions && !isLegacySelected && (
            <button 
              onClick={onLegacyClick} 
              className="text-xs bg-slate-200 hover:bg-slate-300 text-slate-700 py-1.5 px-2 rounded font-medium transition-colors cursor-pointer"
            >
              Took a legacy equivalent?
            </button>
          )}
          
          {isLegacySelected && (
            <button 
              onClick={onLegacyClick} 
              className="text-xs bg-orange-200 hover:bg-orange-300 text-orange-800 py-1.5 px-2 rounded font-medium transition-colors cursor-pointer"
            >
              Change Legacy Course
            </button>
          )}
        </div>
      </div>
    );
  }

  // Elective slot logic
  const isFilled = !!course;

  return (
    <div 
      onClick={onElectiveClick}
      className={`rounded-xl p-4 flex flex-col h-full cursor-pointer transition-all duration-200 relative group
        ${isFilled 
          ? 'bg-white border-2 border-primary-400 shadow-sm hover:shadow-md hover:border-primary-500' 
          : 'bg-white border-2 border-dashed border-slate-300 hover:border-primary-400 hover:bg-slate-50'
        }
      `}
    >
      <div className={`absolute top-0 right-0 text-[10px] font-bold px-2 py-1 rounded-bl-lg z-10 transition-colors
        ${isFilled ? 'bg-primary-100 text-primary-700' : 'bg-slate-100 text-slate-500 group-hover:bg-primary-50 group-hover:text-primary-600'}
      `}>
        {slot.slotType.toUpperCase()}
      </div>

      {!isFilled ? (
        <div className="flex flex-col items-center justify-center h-full text-slate-400 group-hover:text-primary-500 min-h-[100px] mt-2">
          <div className="bg-slate-100 p-3 rounded-full mb-2 group-hover:bg-primary-50 transition-colors">
            <ChevronRight size={24} />
          </div>
          <span className="text-sm font-medium">Select Course</span>
        </div>
      ) : (
        <>
          <div className="flex items-start gap-3 mt-1">
            <div className="bg-primary-100 p-2 rounded-lg text-primary-600 mt-1">
              <CheckCircle2 size={18} />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-slate-800">{course.id}</h4>
              <p className="text-sm text-slate-600 mt-1 line-clamp-2">{course.title}</p>
            </div>
          </div>
          
          {equivalencyRule && (
            <div className="mt-3 bg-orange-50 border border-orange-200 rounded-md p-2 flex items-start gap-2">
              <AlertTriangle size={14} className="text-orange-500 mt-0.5 shrink-0" />
              <p className="text-xs text-orange-700 font-medium">
                Attention: The updated equivalency for this course is {equivalencyRule.newCourseTitle} ({equivalencyRule.newCourseId}).
              </p>
            </div>
          )}

          <div className="mt-auto pt-4 flex justify-between items-center">
            <span className="text-xs font-semibold text-primary-700 bg-primary-50 px-2 py-1 rounded-md">
              {course.ects} ECTS
            </span>
          </div>
        </>
      )}
    </div>
  );
}
