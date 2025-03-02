import React from "react";
import FeatureCard from "./FeatureCard";
const Card = ({ children, className }) => {
  return (
    <div
      className={`bg-white shadow-lg rounded-3xl overflow-hidden transition-transform transform hover:scale-105 ${className}`}
    >
      {children}
    </div>
  );
};

const CardContent = ({ image, title, description }) => {
  return (
    <div className="p-6 flex flex-col items-start text-left gap-5">
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover rounded-xl"
        />
      )}
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

const services = [
  {
    title: "AI - For Farmers ",
    description:
      "Empowering Farmers with AI  We leverage AI-driven solutions to tackle farming challenges like unpredictable weather, inefficient irrigation, and crop diseases. Our smart technology enhances decision-making, improving efficiency, sustainability, and overall farm productivity. ",
    image: "CardAcces.webp",
  },
  {
    title: "End To End Solutions",
    description:
      "Revolutionizing Agriculture with IoT  Our IoT-based systems provide real-time monitoring, from storage room security to automated irrigation. These innovations help farmers reduce losses, optimize resources, and increase their yield with minimal manual intervention",
    image: "Biometrics (1).webp",
  },
  {
    title: "Language Barrier Removal",
    description:
      "Breaking Language Barriers  With multilingual AI assistance supporting 12 languages, we ensure that farmers from diverse regions can easily access advanced agricultural insights, making technology inclusive and accessible for all levels of literacy.  ",
    image: "Kisok.webp",
  },
  {
    title: "Local AI ",
    description:
      "Building a Sustainable Future  We aim to bridge the gap between tradition and technology, helping farmers maximize productivity while adopting eco-friendly practices. Our solutions promote long-term sustainability, benefiting both farmers and the environment.",
    image: "Biometrics (3).webp",
  },
  {
    title: "Video Integration",
    description:
      "Visual identification is occasionally useful to verify the validity of an access request.",
    image: "Kisok.webp",
  },
  {
    title: "Thermal Scanning",
    description:
      "Autonomous thermographic scanning ensures that individuals with fever are identified.",
    image: "Thermal.webp",
  },
  {
    title: "Entry Gates",
    description:
      "Control access to your facilities by providing your users access credentials via physical gates.",
    image: "EntryGate.webp",
  },
  {
    title: "Turnstiles",
    description:
      "Turnstiles are often employed as a control, or to enforce single-file compliance constraints.",
    image: "Turn.webp",
  },
  {
    title: "Visitor Management",
    description:
      "Custom digital touchscreen kiosks are often used to interface with visitors.",
    image: "Visitor.webp",
  },
];

const featureData = [
  {
    title: "Smart Crop Advisory",
    description:
      "Get AI-driven crop recommendations based on soil health, climate conditions, and best farming practices.",
    image:
      "https://khetibuddy.com/wp-content/uploads/2024/02/Enhancing-Farmer-Engagement-Through-Digital-Crop-Advisories.jpg",
  },
  {
    title: "Weather Forecasting",
    description:
      "Stay updated with real-time weather alerts and forecasts to plan your farming activities effectively.",
    image:
      "https://khetibuddy.com/wp-content/uploads/2024/02/Hand-using-device-with-stats-and-crops-in-the-background.png",
  },
  {
    title: "Market Price Insights",
    description:
      "Access live market rates for crops and commodities to sell your produce at the best prices.",
    image:
      "https://www.alliedmarketresearch.com/assets/sampleimages/precision-agriculture-market-2021-2030-1633329428.jpeg",
  },
  {
    title: "E-Commerce for Farmers",
    description:
      "Buy high-quality seeds, fertilizers, and farming equipment at the best prices from trusted suppliers.",
    image: "https://agriculturepost.com/wp-content/uploads/2020/10/eNAM.jpg",
  },
  {
    title: "Community Support & Forums",
    description:
      "Join a community of farmers, experts, and agronomists to share knowledge, ask questions, and get support.",
    image:
      "https://agricultureextension.files.wordpress.com/2015/08/farmers_training.jpg",
  },
  {
    title: "Pest & Disease Diagnosis",
    description:
      "Identify crop diseases early with AI-based pest detection and receive solutions from experts.",
    image:
      "https://cdn.britannica.com/77/191677-050-138A808F/Integrated-pest-management-rice.jpg",
  },
  {
    title: "Government Schemes & Loans",
    description:
      "Stay informed about government subsidies, schemes, and loan facilities available for farmers.",
    image:
      "https://static.toiimg.com/thumb/msid-82596560,width-400,resizemode-4/82596560.jpg",
  },
];

export default function AccessControlUI() {
  return (
    <div className="flex flex-col bg-[#1E3A24] py-1.5">
      <div className="mt-4 mb-2">
        <h1 className="text-white text-center font-bold mt-4  text-3xl">Features</h1>
      </div>

      <div className="bg-[#1E3A24] py-14 grid grid-cols-2 gap-6  px-3">
       
        {featureData.map((item, index) => (
          <FeatureCard
            key={index}
            title={item.title}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}
