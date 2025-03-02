import React from 'react';
import { motion } from 'framer-motion';
import './Features.css';

const Features = () => {
    const navigateTo = (path) => {
        window.location.href = path;
    };

    const particles = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * 100 + "vw",
        size: Math.random() * 8 + 5 + "px",
        delay: Math.random() * 5,
        duration: Math.random() * 15 + 8,
    }));

    const featuresData = [
        { title: "AI Powered Smart Irrigation", desc: " Optimize water usage with AI-driven irrigation scheduling.", icon: "https://img.icons8.com/?size=100&id=9CQnMaixiqUW&format=png", link: "/irrigation-planner" },
        { title: "AI-Based Pest & Disease Detection", desc: "Instantly detect pests and diseases using advanced image analysis.", icon: "https://img.icons8.com/?size=100&id=VY9MLUH4ggfo&format=png", link: "http://localhost:3005/" },
        { title: "Weather Forecast & Crop Planning", desc: " Plan efficiently with real-time weather updates and AI insights..", icon: "https://img.icons8.com/?size=100&id=VY9MLUH4ggfo&format=png", link: "http://localhost:3006/Disease" },
        { title: "Farmer Collaboration ", desc: "Connect with farmers and compare crop prices easily.  ", icon: "https://img.icons8.com/?size=100&id=DAZeLXBmj5dA&format=png", link: "/iot-soil-analysis" },
        { title: "Voice-Enabled AI Assistant", desc: "Get agricultural guidance through simple voice commands.  ", icon: "https://img.icons8.com/?size=100&id=AIwrOoWVG6nq&format=png", link: "https://farmer-eight.vercel.app/" },
        { title: " Soil Quality Analysis & Monitoring", desc: "  Ensure healthy soil with AI-driven quality assessment.", icon: "https://img.icons8.com/?size=100&id=22858&format=png", link: "http://localhost:3004/" },
    ];

    return (
        <>
        <h2 className='bg-gradient-to-br from-green-900 to-emerald-800 text-white text-4xl font-bold text-center py-2'>Features We Provide</h2>
        <div className="features-section">
            
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    className="particle"
                    style={{
                        width: p.size,
                        height: p.size,
                        left: p.x,
                    }}
                    initial={{ y: "-100vh", opacity: 0 }}
                    animate={{ y: "100vh", opacity: [0, 1, 1, 0] }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        delay: p.delay,
                        ease: "linear",
                    }}
                />
            ))}

            <div className="features-container">
                {featuresData.map((feature, index) => (
                    <motion.div
                        key={index}
                        className="feature-card"
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.7, delay: index * 0.2 }}
                    >
                        <div className="icon-box">
                            <motion.img
                                src={feature.icon}
                                alt={feature.title}
                                whileHover={{ scale: 1.15 }}
                                transition={{ duration: 0.3 }}
                            />
                        </div>
                        <motion.h2
                            className="feature-title"
                        >
                            {feature.title}
                        </motion.h2>
                        <p>{feature.desc}</p>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => navigateTo(feature.link)}
                        >
                            Explore Now
                        </motion.button>
                    </motion.div>
                ))}
            </div>
        </div>
        </>
    );
};

export default Features;
