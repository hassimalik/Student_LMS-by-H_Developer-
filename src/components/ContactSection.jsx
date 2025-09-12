// src/components/ContactSection.jsx
import React from "react";
import { Link } from 'react-router-dom';

function ContactSection() {
    return (
        <section
            id="contact"
            className="relative py-20 flex -mt-15 flex-col gap-3 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white"
        >

            <button className=" px-1 w-[5%] ml-12 bg-transparent outline-1 outline-gray-800 text-white rounded-lg cursor-pointer transition-ease duration-400 hover:scale-110">
                <Link to="/dashboardbl">
                    🡸
                </Link>
            </button>

            <div className="max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                    Get in Touch
                </h2>
                <p className="text-gray-400 mb-12 text-lg">
                    Have questions, feedback, or just want to say hello? Fill out the form below and we’ll get back to you soon.
                </p>

                <form className="space-y-6 text-left">
                    <div>
                        <label className="block mb-2 text-sm font-medium">Name</label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="w-full p-3 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                        />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm font-medium">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full p-3 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                        />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm font-medium">Message</label>
                        <textarea
                            rows="5"
                            placeholder="Write your message..."
                            className="w-full p-3 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 rounded-xl bg-gradient-to-r from-green-400 to-blue-500 hover:opacity-90 transition-opacity font-semibold text-white shadow-lg"
                    >
                        Send Message
                    </button>
                </form>

            </div>
        </section>
    );
}

export default ContactSection;
