// src/pages/DashboardAL.jsx
import { ArrowRight } from "lucide-react";
function DashboardAL() {
  return (
    <div className="bg-gradient-to-br from-[#0b0f17] via-[#0a0d14] to-[#05070b] p-15 min-h-screen text-white">
      {/* Hero Section */}
      <div className="relative w-full overflow-hidden">
        <div className="mx-auto flex max-w-6xl flex-col items-center px-6 pt-28">
          <h1 className="type-caret mx-auto max-w-3xl text-3xl font-semibold tracking-tight -mt-12 sm:text-5xl">
            Welcome to Student LMS. 
          </h1>
          <p className="text-[#e29912] mt-7">Education new era of Tracking Starts Here</p>
          <div className="mx-auto  mt-5 flex w-full max-w-xl flex-col items-center gap-3 sm:flex-row">
            <input
              type="url"
              placeholder="Paste YouTube playlist URL…"
              className="w-full rounded-xl border border-zinc-700/60 bg-zinc-900/60 px-4 py-3 text-sm outline-none focus:border-zinc-400 text-white"
            />
            <button 
              className="inline-flex items-center justify-center rounded-xl bg-white/10 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/20 active:scale-[0.98]"
            >
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default DashboardAL;
