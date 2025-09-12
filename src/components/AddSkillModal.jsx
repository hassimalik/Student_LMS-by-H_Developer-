import { X } from "lucide-react";
import { useState } from "react";

function AddSkillModal({ isOpen, onClose, onSave }) {
    const [skill, setSkill] = useState("");

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
            <div className="bg-zinc-900 p-6 rounded-xl w-full max-w-md shadow-xl relative">
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-zinc-400 hover:text-white"
                >
                    <X className="h-5 w-5" />
                </button>

                <h1 className="text-center text-2xl mb-4 font-bold text-white">
                    Add Skill
                </h1>
                <input
                    type="text"
                    value={skill}
                    onChange={(e) => setSkill(e.target.value)}
                    placeholder="Enter skill name…"
                    className="w-full bg-zinc-800 border border-zinc-600 rounded-lg px-3 py-2 text-white mb-4"
                />
                <div className="flex justify-end gap-3">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 rounded-lg bg-zinc-700 hover:bg-zinc-600 text-sm"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={() => {
                            if (skill.trim()) {
                                onSave(skill);
                                setSkill("");
                            }
                        }}
                        className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-sm"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AddSkillModal;
