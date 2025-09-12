import { useState, useEffect, useRef } from "react";
import { runCelebration } from "../utils/celebration";
import { ArrowRight, Check, X } from "lucide-react";
import { useApi } from "../context/ApiContext";
import { useCourses } from "../context/CourseContext";
import { useUser } from "../context/UserContext";
import AddSkillModal from "../components/AddSkillModal"; // ✅ new import
import congratsSound from "../assets/congrats.mp3";

function DashboardAL() {
  const { playListData, fetchPlaylistURL } = useApi();
  const { addCourse } = useCourses();
  const { addSkill } = useUser(); // ✅ skills context se

  const [playlistUrl, setPlaylistUrl] = useState("");
  const [completed, setCompleted] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [courseName, setCourseName] = useState("");
  const [loading, setLoading] = useState(false);

  function extractPlaylistId(url) {
    const match = url.match(/list=([a-zA-Z0-9_-]+)/);
    return match ? match[1] : null;
  }

  async function handleFetch() {
    const id = extractPlaylistId(playlistUrl);
    if (!id) return alert("Invalid URL");

    setLoading(true);
    try {
      await fetchPlaylistURL(id);
      setShowModal(true);
    } catch (err) {
      console.error(err);
      alert("Failed to fetch playlist");
    } finally {
      setLoading(false);
    }
  }

  function toggleComplete(videoId) {
    setCompleted((prev) =>
      prev.includes(videoId)
        ? prev.filter((id) => id !== videoId)
        : [...prev, videoId]
    );
  }

  const progress =
    playListData?.length > 0
      ? Math.min(100, Math.round((completed.length / playListData.length) * 100))
      : 0;

  const playlistInfo = playListData?.[0]?.snippet;

  function handleSaveCourse() {
    if (!playlistInfo) return;
    addCourse({
      id: Date.now(),
      name: courseName || playlistInfo.title,   // 🔥 yahan 'name' rakha
      thumbnail: playlistInfo.thumbnails.medium.url,
      description: playlistInfo.description,
      progress,
      completed: progress === 100, // agar pura complete ho jaye
    });
    setShowModal(false);
  }


  // 🎉 Celebration logic
  const [hasCelebrated, setHasCelebrated] = useState(false);
  const [showCongrats, setShowCongrats] = useState(false);
  const [showSkillModal, setShowSkillModal] = useState(false); // ✅ skill modal
  const audioRef = useRef(null);

  useEffect(() => {
    if (progress === 100 && !hasCelebrated) {
      runCelebration(5000, setShowCongrats, audioRef);
      setHasCelebrated(true);

      // 🎯 Skill modal ko 5s baad kholna (jab celebration + audio stop ho jaye)
      const timer = setTimeout(() => {
        setShowSkillModal(true);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [progress, hasCelebrated]);

  return (
    <div className=" min-h-screen text-white py-20 px-4 flex flex-col items-center relative" style={{
      background: `
          radial-gradient(ellipse 120% 80% at 70% 20%, rgba(255, 20, 147, 0.15), transparent 50%),
          radial-gradient(ellipse 100% 60% at 30% 10%, rgba(0, 255, 255, 0.12), transparent 60%),
          radial-gradient(ellipse 90% 70% at 50% 0%, rgba(138, 43, 226, 0.18), transparent 65%),
          radial-gradient(ellipse 110% 50% at 80% 30%, rgba(255, 215, 0, 0.08), transparent 40%),
          #000000
        `,
    }}>
      {/* Hidden Audio */}
      <audio ref={audioRef} src={congratsSound} />

      {/* Congrats Overlay */}
      {showCongrats && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/70 z-50">
          <h1 className="text-5xl md:text-7xl font-black text-center 
                        bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 
                        bg-clip-text text-transparent 
                        drop-shadow-[0_0_20px_rgba(255,165,0,0.7)] 
                        tracking-widest uppercase animate-bounce">
            ✨ Congratulations ✨ <br /> Course Completed 🏅
          </h1>
        </div>
      )}

      {showSkillModal && (
        <AddSkillModal
          isOpen={showSkillModal}   // ✅ ye zaroor dena hoga
          onClose={() => setShowSkillModal(false)}
          onSave={(skillName) => {
            addSkill(skillName);
            setShowSkillModal(false);
          }}
        />
      )}



      {/* Input */}
      <div className="flex flex-col items-center gap-6  w-full max-w-2xl">
        <h1 className="text-4xl mt-12 font-kaushan font-extrabold 
                bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-600 
                bg-clip-text text-transparent 
                drop-shadow-[0_0_15px_rgba(255,215,0,0.8)] 
                tracking-wide text-center">
          Paste Youtube Playlist Link
        </h1>

        <p className="text-sm animate-bounce text-[#c57307]">
          Education's New Era of Progress Tracking Starts Here
        </p>
        <div className="flex gap-2 w-full">
          <input
            type="url"
            placeholder="Paste YouTube playlist URL…"
            value={playlistUrl}
            onChange={(e) => setPlaylistUrl(e.target.value)}
            className="w-full rounded-xl border border-zinc-700/60 bg-zinc-900/60 px-4 py-3 text-sm text-white outline-none"
          />
          <button
            onClick={handleFetch}
            disabled={loading}
            className="inline-flex items-center rounded-xl bg-white/10 px-5 py-3 text-sm hover:bg-white/20 disabled:opacity-50"
          >
            {loading ? (
              <span className="animate-spin border-2 border-white border-t-transparent rounded-full h-5 w-5"></span>
            ) : (
              <>
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </>
            )}
          </button>
        </div>
      </div>

      {/* Playlist Info */}
      {playlistInfo && (
        <div className="flex flex-col items-center text-center mb-10 max-w-2xl">
          <img
            src={playlistInfo.thumbnails.medium.url}
            alt="Playlist thumbnail"
            className="rounded-xl mt-10  object-cover mb-4"
          />
          <h2 className="text-xl font-semibold">{playlistInfo.title}</h2>
        </div>
      )}

      {/* Progress */}
      {playListData?.length > 0 && (
        <div className="max-w-2xl w-full mb-10">
          <div className="w-full bg-zinc-800 rounded-full h-4">
            <div
              className="bg-blue-500 h-4 rounded-full transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-center mt-2 text-sm text-zinc-400">
            {progress}% completed
          </p>
        </div>
      )}

      {/* Playlist videos */}
      <div className="flex flex-col gap-3 w-full max-w-2xl">
        {playListData
          ?.filter((item) => !completed.includes(item.snippet.resourceId.videoId)) // ✅ completed videos skip
          .map((item) => {
            const video = item.snippet;
            const videoId = video.resourceId.videoId;

            return (
              <div
                key={videoId}
                className="flex items-center justify-between bg-zinc-900/70 rounded-lg p-3 hover:bg-zinc-800 transition"
              >
                {/* Checkbox */}
                <button
                  onClick={() => toggleComplete(videoId)}
                  className="w-6 h-6 flex items-center justify-center border-2 border-zinc-500 rounded-sm hover:border-blue-500 group"
                >
                  <Check className="h-4 w-4 text-blue-500 opacity-0 group-hover:opacity-100 transition" />
                </button>

                {/* Thumbnail + Title */}
                <div className="flex items-center gap-3 flex-1 ml-4">
                  <img
                    src={video.thumbnails.default.url}
                    alt={video.title}
                    className=" rounded"
                  />
                  <p className="text-sm line-clamp-2">{video.title}</p>
                </div>
              </div>
            );
          })}

        {/* ✅ Add Skill button last video ke neeche */}
        {playListData?.length > 0 && (
          <button
            onClick={() => setShowSkillModal(true)}
            className="mt-4 w-full rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 py-3 font-semibold hover:opacity-90 transition"
          >
            ➕ Add Skill
          </button>
        )}
      </div>


      {/* Modal */}
      {showModal && playlistInfo && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-zinc-900 p-6 rounded-xl w-full max-w-md shadow-xl relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-zinc-400 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>

            <img
              src={playlistInfo.thumbnails.medium.url}
              alt="Playlist Thumbnail"
              className=" object-cover rounded-lg mx-auto mb-4"
            />
            <h1 className="text-center text-3xl mb-2 font-kaushan text-white">
              Add Course
            </h1>
            <input
              type="text"
              value={courseName || playlistInfo.title}
              onChange={(e) => setCourseName(e.target.value)}
              className="w-full bg-zinc-800 border border-zinc-600 rounded-lg px-3 py-2 text-white mb-4"
            />
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 rounded-lg bg-zinc-700 hover:bg-zinc-600 text-sm"
              >
                Close
              </button>
              <button
                onClick={handleSaveCourse}
                className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-sm"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DashboardAL;
