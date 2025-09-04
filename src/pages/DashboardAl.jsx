import { useState, useEffect } from "react";
import { runCelebration } from "../utils/celebration";
import { ArrowRight, Check, X } from "lucide-react";
import { useApi } from "../context/ApiContext";
import { useCourses } from "../context/CourseContext";

function DashboardAL() {


  const { playListData, fetchPlaylistURL } = useApi();
  const { addCourse } = useCourses();

  const [playlistUrl, setPlaylistUrl] = useState("");
  const [completed, setCompleted] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [courseName, setCourseName] = useState("");
  const [loading, setLoading] = useState(false); // loader state

  function extractPlaylistId(url) {
    const match = url.match(/list=([a-zA-Z0-9_-]+)/);
    return match ? match[1] : null;
  }

  async function handleFetch() {
    const id = extractPlaylistId(playlistUrl);
    if (!id) return alert("Invalid URL");

    setLoading(true); // start loader
    try {
      await fetchPlaylistURL(id); // id pass karo context ke function ko
      setShowModal(true); // Modal open after fetch
    } catch (err) {
      console.error(err);
      alert("Failed to fetch playlist");
    } finally {
      setLoading(false); // stop loader
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
      title: courseName || playlistInfo.title,
      thumbnail: playlistInfo.thumbnails.medium.url,
      description: playlistInfo.description,
      progress,
    });
    setShowModal(false);
  }

  const [hasCelebrated, setHasCelebrated] = useState(false);

  useEffect(() => {
    if (progress === 100 && !hasCelebrated) {
      runCelebration(5000); // 5 seconds
      setHasCelebrated(true);
    }
  }, [progress, hasCelebrated]);

  return (
    <div className="bg-gradient-to-br from-[#0b0f17] to-[#05070b] min-h-screen text-white py-20 px-4 flex flex-col items-center">
      {/* Input */}
      <div className="flex flex-col items-center gap-6 mb-10 w-full max-w-2xl">
        <h1 className="text-4xl font-kaushan text-white">
          Paste Youtube Playlist Link
        </h1>
        <p className="text-sm text-[#c57307]">
          Education New Era of Progress Tracking Starts Here
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
            className="rounded-xl w-60 h-40 object-cover mb-4"
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
        {playListData?.map((item) => {
          const video = item.snippet;
          const videoId = video.resourceId.videoId;
          if (completed.includes(videoId)) return null;
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
                  className="w-16 h-10 object-cover rounded"
                />
                <p className="text-sm line-clamp-2">{video.title}</p>
              </div>
            </div>
          );
        })}
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
              className="w-40 h-28 object-cover rounded-lg mx-auto mb-4"
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
