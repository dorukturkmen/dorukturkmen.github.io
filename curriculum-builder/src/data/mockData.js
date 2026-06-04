export const CoursePool = [
  // Mandatory Courses
  { id: "VCD101", title: "Introduction to Visual Communication Design", ects: 6, category: "Mandatory" },
  { id: "VCD102", title: "Visual Design Studio I", ects: 8, category: "Mandatory" },
  { id: "VCD111", title: "Drawing and Representation", ects: 4, category: "Mandatory" },
  { id: "VCD201", title: "Typography I", ects: 6, category: "Mandatory" },
  { id: "VCD202", title: "Typography II", ects: 6, category: "Mandatory" },
  { id: "VCD211", title: "Digital Imaging", ects: 5, category: "Mandatory" },
  { id: "VCD301", title: "Interactive Design", ects: 6, category: "Mandatory" },
  { id: "VCD302", title: "Motion Graphics", ects: 6, category: "Mandatory" },
  { id: "VCD401", title: "Graduation Project I", ects: 8, category: "Mandatory" },
  { id: "VCD402", title: "Graduation Project II", ects: 8, category: "Mandatory" },
  
  // Department Electives
  { id: "VCD321", title: "Advanced Typography", ects: 5, category: "Department Elective" },
  { id: "VCD322", title: "Information Design", ects: 5, category: "Department Elective" },
  { id: "VCD323", title: "Packaging Design", ects: 5, category: "Department Elective" },
  { id: "VCD421", title: "Game Design", ects: 5, category: "Department Elective" },
  { id: "VCD422", title: "Experimental Video", ects: 5, category: "Department Elective" },
  
  // Faculty Electives
  { id: "FA201", title: "History of Art and Design", ects: 4, category: "Faculty Elective" },
  { id: "FA202", title: "Contemporary Art", ects: 4, category: "Faculty Elective" },
  { id: "FA301", title: "Aesthetics", ects: 4, category: "Faculty Elective" },
  { id: "FA302", title: "Photography", ects: 4, category: "Faculty Elective" },

  // University Electives
  { id: "UNI101", title: "Introduction to Psychology", ects: 4, category: "University Elective" },
  { id: "UNI102", title: "Principles of Economics", ects: 4, category: "University Elective" },
  { id: "UNI201", title: "World History", ects: 4, category: "University Elective" },
];

export const CurriculumTemplate = [
  // Semester 1
  { slotId: "s1_1", semester: 1, slotType: "Mandatory", fixedCourseId: "VCD101" },
  { slotId: "s1_2", semester: 1, slotType: "Mandatory", fixedCourseId: "VCD111" },
  { slotId: "s1_3", semester: 1, slotType: "University Elective", fixedCourseId: null },
  { slotId: "s1_4", semester: 1, slotType: "University Elective", fixedCourseId: null },
  
  // Semester 2
  { slotId: "s2_1", semester: 2, slotType: "Mandatory", fixedCourseId: "VCD102" },
  { slotId: "s2_2", semester: 2, slotType: "Faculty Elective", fixedCourseId: null },
  { slotId: "s2_3", semester: 2, slotType: "University Elective", fixedCourseId: null },
  
  // Semester 3
  { slotId: "s3_1", semester: 3, slotType: "Mandatory", fixedCourseId: "VCD201" },
  { slotId: "s3_2", semester: 3, slotType: "Mandatory", fixedCourseId: "VCD211" },
  { slotId: "s3_3", semester: 3, slotType: "Department Elective", fixedCourseId: null },

  // Semester 4
  { slotId: "s4_1", semester: 4, slotType: "Mandatory", fixedCourseId: "VCD202" },
  { slotId: "s4_2", semester: 4, slotType: "Department Elective", fixedCourseId: null },
  { slotId: "s4_3", semester: 4, slotType: "Faculty Elective", fixedCourseId: null },
  
  // Semester 5
  { slotId: "s5_1", semester: 5, slotType: "Mandatory", fixedCourseId: "VCD301" },
  { slotId: "s5_2", semester: 5, slotType: "Department Elective", fixedCourseId: null },
  
  // Semester 6
  { slotId: "s6_1", semester: 6, slotType: "Mandatory", fixedCourseId: "VCD302" },
  { slotId: "s6_2", semester: 6, slotType: "Department Elective", fixedCourseId: null },

  // Semester 7
  { slotId: "s7_1", semester: 7, slotType: "Mandatory", fixedCourseId: "VCD401" },
  { slotId: "s7_2", semester: 7, slotType: "Department Elective", fixedCourseId: null },

  // Semester 8
  { slotId: "s8_1", semester: 8, slotType: "Mandatory", fixedCourseId: "VCD402" },
  { slotId: "s8_2", semester: 8, slotType: "Faculty Elective", fixedCourseId: null },
];

export const EquivalencyRules = [
  { oldCourseId: "GRA101", newCourseId: "VCD101", newCourseTitle: "Introduction to Visual Communication Design" },
  { oldCourseId: "GRA102", newCourseId: "VCD102", newCourseTitle: "Visual Design Studio I" },
  { oldCourseId: "GRA321", newCourseId: "VCD321", newCourseTitle: "Advanced Typography" },
];

// Let's inject old courses into the CoursePool for demonstration purposes.
CoursePool.push(
  { id: "GRA101", title: "Graphic Design Basics (OLD)", ects: 6, category: "Mandatory" },
  { id: "GRA102", title: "Visual Design Studio I (OLD)", ects: 8, category: "Mandatory" },
  { id: "GRA321", title: "Typography and Layout (OLD)", ects: 5, category: "Department Elective" }
);

export const SemesterRequirements = {
  1: 28,
  2: 30,
  3: 30,
  4: 30,
  5: 30,
  6: 30,
  7: 30,
  8: 30
};
