import { useCourses } from "../context/CourseContext";
import { Trash2 } from "lucide-react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Courses() {
    const { courses, removeCourse } = useCourses();

    // Split courses by completion status
    const completedCourses = courses.filter(c => c.progress === 100);
    const incompletedCourses = courses.filter(c => c.progress < 100);

    return (
        <div className="bg-gradient-to-br from-[#0b0f17] to-[#05070b] min-h-screen text-white py-16 px-6 relative">
            
            {/* Back Button */}
            <Link 
                to="/dashboard"
                className="absolute top-6 right-6 flex items-center gap-2 text-sm text-zinc-300 hover:text-white transition"
            >
                <FaArrowLeft className="h-4 w-4" />
                Back to Dashboard
            </Link>

            <h1 className="text-3xl font-bold mb-10 text-center">My Courses</h1>

            <div className="max-w-5xl mx-auto space-y-12">
                {/* Incompleted Courses */}
                <div>
                    <h2 className="text-2xl font-semibold mb-6">Incompleted Courses</h2>
                    <div className="grid gap-6">
                        {incompletedCourses.length > 0 ? (
                            incompletedCourses.map((course) => (
                                <div
                                    key={course.id}
                                    className="bg-zinc-900 rounded-xl p-4 flex items-center gap-4 shadow-lg hover:bg-zinc-800 transition"
                                >
                                    <img
                                        src={course.thumbnail}
                                        alt={course.title}
                                        className="w-28 h-20 object-cover rounded-lg"
                                    />
                                    <div className="flex-1">
                                        <h2 className="text-lg font-semibold">{course.title}</h2>
                                        <p className="text-sm text-zinc-400 line-clamp-2">
                                            {course.description}
                                        </p>
                                        <div className="w-full bg-zinc-700 rounded-full h-2 mt-2">
                                            <div
                                                className="bg-blue-500 h-2 rounded-full"
                                                style={{ width: `${course.progress}%` }}
                                            />
                                        </div>
                                        <p className="text-xs text-zinc-400 mt-1">
                                            {course.progress}% completed
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => removeCourse(course.id)}
                                        className="text-red-500 hover:text-red-400"
                                    >
                                        <Trash2 className="h-5 w-5" />
                                    </button>
                                </div>
                            ))
                        ) : (
                            <p className="text-center text-zinc-400">No incompleted courses.</p>
                        )}
                    </div>
                </div>

                {/* Completed Courses */}
                <div>
                    <h2 className="text-2xl font-semibold mb-6">Completed Courses</h2>
                    <div className="grid gap-6">
                        {completedCourses.length > 0 ? (
                            completedCourses.map((course) => (
                                <div
                                    key={course.id}
                                    className="bg-zinc-900 rounded-xl p-4 flex items-center gap-4 shadow-lg hover:bg-zinc-800 transition"
                                >
                                    <img
                                        src={course.thumbnail}
                                        alt={course.title}
                                        className="w-28 h-20 object-cover rounded-lg"
                                    />
                                    <div className="flex-1">
                                        <h2 className="text-lg font-semibold">{course.title}</h2>
                                        <p className="text-sm text-zinc-400 line-clamp-2">
                                            {course.description}
                                        </p>
                                        <div className="w-full bg-zinc-700 rounded-full h-2 mt-2">
                                            <div
                                                className="bg-green-500 h-2 rounded-full"
                                                style={{ width: `${course.progress}%` }}
                                            />
                                        </div>
                                        <p className="text-xs text-zinc-400 mt-1">
                                            {course.progress}% completed
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => removeCourse(course.id)}
                                        className="text-red-500 hover:text-red-400"
                                    >
                                        <Trash2 className="h-5 w-5" />
                                    </button>
                                </div>
                            ))
                        ) : (
                            <p className="text-center text-zinc-400">No completed courses yet.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Courses;
