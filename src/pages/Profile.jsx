/* eslint-disable react-hooks/rules-of-hooks */
// src/pages/Profile.jsx
import { useState } from "react";
import { FaCamera } from "react-icons/fa";
import { useUser } from "@clerk/clerk-react";

function Profile() {
  const { isLoaded, isSignedIn, user } = useUser();

  // Clerk load checks
  if (!isLoaded) return <div className="text-white">Loading...</div>;
  if (!isSignedIn) return <div className="text-white">You must be signed in to view this page.</div>;

  // States
  const [name, setName] = useState(user.fullName || ""); 
  const [editingName, setEditingName] = useState(false);
  const [tempName, setTempName] = useState(name);

  const [bio, setBio] = useState("Coding is my passion...");
  const [editingBio, setEditingBio] = useState(false);
  const [tempBio, setTempBio] = useState(bio);

  const [skills, setSkills] = useState(["React", "Tailwind", "Firebase"]);
  const [newSkill, setNewSkill] = useState("");

  // Skill add
  const addSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill)) {
      setSkills([...skills, newSkill]);
      setNewSkill("");
    }
  };

  // Skill remove
  const removeSkill = (skill) => {
    setSkills(skills.filter((s) => s !== skill));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-6">
      <div className="bg-gray-800 rounded-2xl shadow-xl w-full max-w-5xl flex flex-col md:flex-row p-6 gap-6">
        
        {/* Left Section */}
        <div className="md:w-1/3 flex flex-col items-center">
          {/* Avatar */}
          <div className="relative">
            <img
              src={user.imageUrl || "https://via.placeholder.com/150"}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-gray-700"
            />
            <div
              className="absolute bottom-2 right-2 bg-gray-700 p-2 rounded-full cursor-not-allowed"
              title="Avatar set by Clerk"
            >
              <FaCamera />
            </div>
          </div>

          {/* Name + Username */}
          <div className="mt-4 text-center">
            {editingName ? (
              <div>
                <input
                  value={tempName}
                  onChange={(e) => setTempName(e.target.value)}
                  className="px-2 py-1 rounded bg-gray-700 border border-gray-600 text-white"
                  title="Edit name"
                />
                <div className="mt-2 flex justify-center gap-2">
                  <button
                    onClick={() => {
                      setName(tempName);
                      setEditingName(false);
                    }}
                    className="px-2 py-1 bg-green-600 rounded hover:bg-green-500"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => {
                      setTempName(name);
                      setEditingName(false);
                    }}
                    className="px-2 py-1 bg-red-600 rounded hover:bg-red-500"
                  >
                    Reset
                  </button>
                </div>
              </div>
            ) : (
              <h2
                className="text-xl font-bold cursor-pointer hover:underline"
                onClick={() => setEditingName(true)}
                title="Click to edit name"
              >
                {name}
              </h2>
            )}
            <p className="text-gray-400 text-sm">@{user.username}</p>
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
                  title="Edit bio"
                />
                <div className="mt-2 flex justify-end gap-2">
                  <button
                    onClick={() => {
                      setBio(tempBio);
                      setEditingBio(false);
                    }}
                    className="px-2 py-1 bg-green-600 rounded hover:bg-green-500"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => {
                      setTempBio(bio);
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
                className="text-gray-300 cursor-pointer hover:underline"
                onClick={() => setEditingBio(true)}
                title="Click to edit bio"
              >
                {bio}
              </p>
            )}
          </div>

          {/* Skills */}
          <div className="mt-6 w-full">
            <h3 className="font-semibold mb-2">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-blue-600 px-3 py-1 rounded-full text-sm flex items-center gap-2"
                  title={skill}
                >
                  {skill}
                  <button
                    onClick={() => removeSkill(skill)}
                    className="ml-1 text-red-400 hover:text-red-200"
                    title="Remove skill"
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
                className="flex-1 px-2 py-1 rounded bg-gray-700 border border-gray-600 text-white"
                title="Add new skill"
              />
              <button
                onClick={addSkill}
                className="px-3 py-1 bg-blue-600 rounded hover:bg-blue-500"
              >
                Add
              </button>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-2/3 bg-gray-700 rounded-xl p-6">
          <h3 className="font-bold text-lg mb-4">My Courses / Badges</h3>
          <p className="text-gray-300">
            (Yahan tum apne courses aur badges fetch/display karoge.)
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
