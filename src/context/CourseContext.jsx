import { createContext, useContext, useState } from "react";

export const CourseContext = createContext();

export function CourseContextProvider({ children }) {
    const [courses, setCourses] = useState(null);

    const addCourse = (newCourse) => {
        setCourses((prev) => (prev ? [newCourse, ...prev] : [newCourse]));
    };

    const removeCourse = (id) => {
        setCourses((prev) => prev.filter((c) => c.id !== id));
    }

    const updateCourse = (id, updatedData) => {
        setCourses((prev) =>
            prev.map((c) => (c.id === id ? { ...c, ...updatedData } : c))
        );
    };
    return (
        <CourseContext.Provider value={{ courses, setCourses, addCourse, updateCourse, removeCourse }}>
            {children}
        </CourseContext.Provider>
    )

}

export const useCourses = () => useContext(CourseContext);