import React from "react";

const FeatureCard = ({ title, description, image }) => {
  return (
    <div className="flex bg-white text-white p-3 gap-2 rounded-3xl w-full max-w-3xl mx-auto">
      {/* Left Section */}
      <div className="flex-1 p-6 rounded-3xl bg-[#214D30] relative">
        <h2 className="text-yellow-300 text-2xl font-semibold">{title}</h2>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>

      {/* Right Section */}
      <div className="relative flex-1 rounded-3xl overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-3xl"
        />
        {/* Badge */}
        <div className="absolute bottom-4 right-4 bg-[#1E3A24] text-white px-2 py-2 rounded-xl text-[10px] flex items-center gap-2">
          <span className="text-xl">🌿</span>
          100%
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
