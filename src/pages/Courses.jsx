import { useCourses } from "../context/CourseContext";
import { Trash2 } from "lucide-react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";


function Courses() {
    const { courses = [], removeCourse } = useCourses() || [];

    const completedCourses = courses.filter(c => c?.progress === 100);
    const incompletedCourses = courses.filter(c => c?.progress < 100);

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

            <h1 className="text-4xl font-extrabold mb-12 text-center text-gradient bg-clip-text from-purple-400 to-pink-500">
                My Courses
            </h1>

            <div className="max-w-6xl mx-auto space-y-14">

                {/* Incompleted Courses */}
                <section>
                    <h2 className="text-3xl font-semibold mb-8 border-b border-zinc-700 pb-2">In Progress</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {incompletedCourses.length > 0 ? (
                            incompletedCourses.map(course => (
                                <div
                                    key={course.id}
                                    className="bg-zinc-900/70 backdrop-blur-md rounded-2xl p-5 flex flex-col items-center shadow-2xl hover:scale-105 transition-transform duration-300"
                                >
                                    <img
                                        src={course.thumbnail}
                                        alt={course.title}
                                        className="w-full h-36 object-cover rounded-xl mb-4 shadow-md"
                                    />
                                    <h3 className="text-xl font-bold mb-2 text-center">{course.title}</h3>
                                    <p className="text-sm text-zinc-400 line-clamp-3 text-center mb-3">{course.description}</p>
                                    <div className="w-full bg-zinc-700 rounded-full h-3 mb-2">
                                        <div
                                            className="bg-blue-500 h-3 rounded-full"
                                            style={{ width: `${course.progress || 0}%` }}
                                        />
                                    </div>
                                    <p className="text-xs text-zinc-400 mb-3">{course.progress || 0}% completed</p>
                                    <button
                                        onClick={() => removeCourse(course.id)}
                                        className="text-red-500 hover:text-red-400 flex items-center gap-1"
                                    >
                                        <Trash2 className="h-5 w-5" /> Remove
                                    </button>
                                </div>
                            ))
                        ) : (
                            <p className="text-center text-zinc-400 col-span-full">No courses in progress.</p>
                        )}
                    </div>
                </section>

                {/* Completed Courses */}
                <section>
                    <h2 className="text-3xl font-semibold mb-8 border-b border-zinc-700 pb-2">Completed</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {completedCourses.length > 0 ? (
                            completedCourses.map(course => (
                                <div
                                    key={course.id}
                                    className="bg-zinc-900/70 backdrop-blur-md rounded-2xl p-5 flex flex-col items-center shadow-2xl hover:scale-105 transition-transform duration-300"
                                >
                                    <img
                                        src={course.thumbnail}
                                        alt={course.title}
                                        className="w-full h-36 object-cover rounded-xl mb-4 shadow-md"
                                    />
                                    <h3 className="text-xl font-bold mb-2 text-center">{course.title}</h3>
                                    <p className="text-sm text-zinc-400 line-clamp-3 text-center mb-3">{course.description}</p>
                                    <div className="w-full bg-zinc-700 rounded-full h-3 mb-2">
                                        <div
                                            className="bg-green-500 h-3 rounded-full"
                                            style={{ width: `${course.progress || 0}%` }}
                                        />
                                    </div>
                                    <p className="text-xs text-zinc-400 mb-3">{course.progress || 0}% completed</p>
                                    <button
                                        onClick={() => removeCourse(course.id)}
                                        className="text-red-500 hover:text-red-400 flex items-center gap-1"
                                    >
                                        <Trash2 className="h-5 w-5" /> Remove
                                    </button>
                                </div>
                            ))
                        ) : (
                            <p className="text-center text-zinc-400 col-span-full">No completed courses yet.</p>
                        )}
                    </div>
                </section>

            </div>
        </div>
    );
}

export default Courses;
