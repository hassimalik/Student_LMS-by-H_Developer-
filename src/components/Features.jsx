// src/components/Features.jsx
import React from "react";
import { BookOpen, Trophy, UserCheck, Layers } from "lucide-react"; // lucide-react se icons
import CourseImg from '../assets/course-management.png'
import Star from '../assets/star.png'
import Graduate from '../assets/Graduate.png'
import DB from '../assets/Dashboard.png'
function Features() {
    const features = [
        {
            title: "Easy Course Management",
            desc: "Add YouTube playlists, track progress, and complete courses seamlessly.",
            icon: <BookOpen className="w-12 h-12 text-purple-400" />,
            img: CourseImg
        },
        {
            title: "Achievements & Rewards",
            desc: "Earn badges and celebrate milestones as you finish more courses.",
            icon: <Trophy className="w-12 h-12 text-yellow-400" />,
            img: Star
        },
        {
            title: "Profile & Skills",
            desc: "Manage your profile, update skills, and showcase what you’ve mastered.",
            icon: <UserCheck className="w-12 h-12 text-green-400" />,
            img: Graduate
        },
        {
            title: "Smooth Dashboard",
            desc: "Modern, animated dashboard with progress indicators and glassy UI.",
            icon: <Layers className="w-12 h-12 text-blue-400" />,
            img: DB
        },
    ];

    return (
        <section id="features" className="relative py-20  text-white" style={{
      background: "radial-gradient(125% 125% at 50% 10%, #000000 40%, #010133 100%)",
    }}>
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="f-heading  text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                    Why Choose Our LMS?
                </h2>
                <p className="f-text text-gray-400 mb-12 text-lg">
                    A student-first platform designed to help you grow your skills in a structured way.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="f-card p-6 rounded-2xl bg-white/10 backdrop-blur-xl shadow-lg border border-white/20 hover:scale-105 transition-transform"
                        >
                            <div className=" flex flex-col items-center">
                                <img src={feature.img} alt={feature.title} className="w-20 h-20 mb-4" />
                                {feature.icon}
                                <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
                                <p className="text-gray-400 mt-2">{feature.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Features;
