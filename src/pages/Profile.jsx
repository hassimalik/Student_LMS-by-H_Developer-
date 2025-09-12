// src/pages/Profile.jsx
import { useState } from "react";
import { FaCamera, FaPen } from "react-icons/fa";
import { Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useCourses } from "../context/CourseContext";
import { useUser } from "../context/UserContext"; // ✅ useUser context

function Profile() {
  const defaultAvatar = "https://www.w3schools.com/howto/img_avatar.png";

  // Avatar state
  const [avatar, setAvatar] = useState(defaultAvatar);

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatar(URL.createObjectURL(file));
    }
  };

  // Name state
  const [editingName, setEditingName] = useState(false);
  const { user, setUser, addSkill, removeSkill } = useUser(); // ✅ context values
  const [tempName, setTempName] = useState(user.name);

  // Bio state
  const [editingBio, setEditingBio] = useState(false);
  const [tempBio, setTempBio] = useState(user.bio || "Coding is my passion...");

  // Skill input
  const [newSkill, setNewSkill] = useState("");

  const handleAddSkill = () => {
    const skillName = newSkill.trim();
    if (
      skillName &&
      !user.skills.some((s) => s.toLowerCase() === skillName.toLowerCase())
    ) {
      addSkill(skillName);
      setNewSkill("");
    }
  };

  // Courses
  const { courses, removeCourse } = useCourses() || {
    courses: [],
    removeCourse: () => { },
  };

  const completedCourses = (courses || []).filter((c) => c.completed);
  const incompletedCourses = (courses || []).filter((c) => !c.completed);

  return (
    <div className="min-h-screen flex flex-col text-white items-center inset-0 justify-center p-6" style={{
      background: "radial-gradient(125% 125% at 50% 10%, #000000 40%, #010133 100%)",
    }}>
      {/* Back button */}
      <Link to="/dashboard">
        <button className="px-3 hover:scale-110 transition-ease duration-200 py-2 absolute top-13 fill-[#39ebf1] right-7 bg-[#14688a7c]  rounded-lg ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="20"
            viewBox="0 0 50 50"
          >
            <path d="M25 1.05c-.22 0-.43.07-.62.21L1.38 19.21c-.43.34-.51.97-.17 1.41.34.43.97.51 1.41.17L4 19.71V46c0 .55.45 1 1 1h14V29h12v18h14c.55 0 1-.45 1-1V19.71l1.38.79c.19.14.4.21.62.21.3 0 .59-.13.79-.39.34-.44.26-1.07-.17-1.41L25.62 1.26c-.19-.14-.41-.21-.62-.21zM35 5v1.05l6 4.68V5h-6z"></path>
          </svg>
        </button>
      </Link>

      <div className="rounded-2xl shadow-xl w-full max-w-6xl flex flex-col md:flex-row p-6 gap-6 relative" style={{
        backgroundColor: '#0a0a0a',
        backgroundImage: `
       radial-gradient(circle at 25% 25%, #222222 0.5px, transparent 1px),
       radial-gradient(circle at 75% 75%, #111111 0.5px, transparent 1px)
     `,
        backgroundSize: '10px 10px',
        imageRendering: 'pixelated',
      }}>
        {/* Left Section */}
        <div className="md:w-1/3 flex flex-col items-center">
          {/* Avatar */}
          <div className="relative">
            <img
              src={avatar}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-gray-700"
            />
            <label
              htmlFor="avatar-upload"
              className="absolute bottom-2 right-2 bg-gray-700 p-2 rounded-full hover:bg-gray-600"
            >
              <FaCamera />
              <input
                type="file"
                id="avatar-upload"
                accept="image/*"
                className="hidden"
                onChange={handleAvatarChange}
              />
            </label>
          </div>

          {/* Name */}
          <div className="mt-4 text-center" >
            {editingName ? (
              <div>
                <input
                  value={tempName}
                  onChange={(e) => setTempName(e.target.value)}
                  className="px-2 py-1 rounded bg-gray-700 border border-gray-600 text-white"
                />
                <div className="mt-2 flex justify-center gap-2">
                  <button
                    onClick={() => {
                      setUser((prev) => ({ ...prev, name: tempName }));
                      setEditingName(false);
                    }}
                    className="px-2 py-1 bg-green-600 rounded hover:bg-green-500"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => {
                      setTempName(user.name);
                      setEditingName(false);
                    }}
                    className="px-2 py-1 bg-red-600 rounded hover:bg-red-500"
                  >
                    Reset
                  </button>
                </div>
              </div>
            ) : (
              <h2 className="text-xl font-bold flex items-center gap-2 justify-center">
                {user.name}
                <FaPen
                  className="text-sm  hover:text-blue-400"
                  onClick={() => setEditingName(true)}
                />
              </h2>
            )}
          </div>

          {/* Bio */}
          <div className="mt-6 w-full">
            <h3 className="font-semibold mb-2">Bio</h3>
            {editingBio ? (
              <div>
                <textarea
                  value={tempBio}
                  onChange={(e) => setTempBio(e.target.value)}
                  maxLength={150}
                  className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white"
                />
                <div className="mt-2 flex justify-end gap-2">
                  <button
                    onClick={() => {
                      setUser((prev) => ({ ...prev, bio: tempBio }));
                      setEditingBio(false);
                    }}
                    className="px-2 py-1 bg-green-600 rounded hover:bg-green-500"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => {
                      setTempBio(user.bio || "Coding is my passion...");
                      setEditingBio(false);
                    }}
                    className="px-2 py-1 bg-red-600 rounded hover:bg-red-500"
                  >
                    Reset
                  </button>
                </div>
                <p className="text-xs text-gray-400">
                  {tempBio.length}/150 characters
                </p>
              </div>
            ) : (
              <p
                className="text-gray-300  hover:underline flex justify-between items-center"
                onClick={() => setEditingBio(true)}
              >
                {user.bio || "Coding is my passion..."}
                <FaPen className="text-sm ml-2 hover:text-blue-400" />
              </p>
            )}
          </div>

          {/* Skills */}
          <div className="mt-6 w-full">
            <h3 className="font-semibold mb-2">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {user.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-blue-600 px-3 py-1 rounded-full text-sm flex items-center gap-2"
                >
                  {skill}
                  <button
                    onClick={() => removeSkill(skill)}
                    className="ml-1 text-red-400 hover:text-red-200"
                  >
                    ✕
                  </button>
                </span>
              ))}
            </div>
            <div className="flex mt-3 gap-2">
              <input
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                placeholder="Add skill..."
                className="flex-1 px-2 py-1 rounded bg-transparent  outline-1 outline-gray-900 text-white"
              />
              <button
                onClick={handleAddSkill}
                className="px-3 py-1 bg-blue-600 rounded hover:bg-blue-500"
              >
                Add
              </button>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-2/3 rounded-xl p-6" style={{
     backgroundColor: '#0a0a0a',
     backgroundImage: `
       radial-gradient(circle at 25% 25%, #222222 0.5px, transparent 1px),
       radial-gradient(circle at 75% 75%, #111111 0.5px, transparent 1px)
     `,
     backgroundSize: '10px 10px',
     imageRendering: 'pixelated',
   }}>
          <h3 className="font-bold text-lg mb-4">My Courses</h3>

          {/* In Progress */}
          <h4 className="font-semibold mb-2">In Progress</h4>
          {incompletedCourses.length > 0 ? (
            incompletedCourses.map((course) => (
              <div
                key={course.id}
                className="flex items-center bg-gray-800 p-3 rounded-lg mb-2 gap-3"
              >
                {course.thumbnail && (
                  <img
                    src={course.thumbnail}
                    alt={course.name}
                    className="w-16 h-12 object-cover rounded"
                  />
                )}
                <div className="flex-1">
                  <p className="font-bold">{course.name}</p>
                  <p className="text-sm text-gray-400 line-clamp-1">
                    {course.description}
                  </p>
                  <div className="w-full bg-gray-600 rounded-full h-2 mt-1">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: `${course.progress || 0}%` }}
                    />
                  </div>
                </div>
                <Trash2
                  className="text-red-400 "
                  onClick={() => removeCourse(course.id)}
                />
              </div>
            ))
          ) : (
            <p className="text-gray-400">No courses in progress.</p>
          )}

          {/* Completed */}
          <h4 className="font-semibold mt-6 mb-2">Completed</h4>
          {completedCourses.length > 0 ? (
            completedCourses.map((course) => (
              <div
                key={course.id}
                className="flex items-center bg-gray-800 p-3 rounded-lg mb-2 gap-3"
              >
                {course.thumbnail && (
                  <img
                    src={course.thumbnail}
                    alt={course.name}
                    className="w-16 h-12 object-cover rounded"
                  />
                )}
                <div className="flex-1">
                  <p className="font-bold">{course.name}</p>
                  <p className="text-sm text-gray-400 line-clamp-1">
                    {course.description}
                  </p>
                </div>
                <Trash2
                  className="text-red-400 "
                  onClick={() => removeCourse(course.id)}
                />
              </div>
            ))
          ) : (
            <p className="text-gray-400">No completed courses.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
