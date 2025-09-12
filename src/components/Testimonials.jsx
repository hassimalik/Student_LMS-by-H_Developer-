// src/components/TestimonialsSection.jsx
import React from "react";

function Testimonials() {
    const testimonials = [
        {
            name: "Ali Raza",
            role: "Computer Science Student",
            feedback:
                "This LMS changed the way I study. I can track my progress, manage playlists, and stay motivated!",
            img: "https://randomuser.me/api/portraits/men/32.jpg",
        },
        {
            name: "Sara Khan",
            role: "IT Undergraduate",
            feedback:
                "The smooth dashboard and achievements system makes learning so much fun. It feels rewarding!",
            img: "https://randomuser.me/api/portraits/women/44.jpg",
        },
        {
            name: "Bilal Ahmed",
            role: "Software Engineering Student",
            feedback:
                "Managing skills and courses is so easy now. The design is clean and animations are really cool.",
            img: "https://randomuser.me/api/portraits/men/76.jpg",
        },
    ];

    return (
        <section
            id="testimonials"
            className="relative py-20  text-white"  style={{
        background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(99, 102, 241, 0.25), transparent 70%), #000000",
      }}
        >
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="t-heading  text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-500">
                    What Students Say
                </h2>
                <p className="t-para text-gray-400 mb-12 text-lg">
                    Hear from learners who use our platform daily to grow their skills.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((t, index) => (
                        <div 
                            key={index}
                            className="t-card p-6 rounded-2xl bg-white/10 backdrop-blur-xl shadow-lg border border-white/20 hover:scale-105 transition-transform text-left"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <img
                                    src={t.img}
                                    alt={t.name}
                                    className="w-14 h-14 rounded-full border-2 border-purple-400"
                                />
                                <div>
                                    <h3 className="text-lg font-semibold">{t.name}</h3>
                                    <p className="text-sm text-gray-400">{t.role}</p>
                                </div>
                            </div>
                            <p className="text-gray-300 italic">“{t.feedback}”</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
