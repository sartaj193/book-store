import React from "react";
import { Truck, Lock, PhoneCall, Star } from "lucide-react";

const icons = [
  {
    title: "Fast Delivery",
    Icon: Truck,
    gradient: "from-blue-500 via-purple-500 to-indigo-500",
    hoverGradient: "from-blue-600 via-purple-600 to-indigo-600",
  },
  {
    title: "Secure Payment",
    Icon: Lock,
    gradient: "from-green-500 via-teal-500 to-blue-500",
    hoverGradient: "from-green-600 via-teal-600 to-blue-600",
  },
  {
    title: "24/7 Support",
    Icon: PhoneCall,
    gradient: "from-pink-500 via-red-500 to-yellow-500",
    hoverGradient: "from-pink-600 via-red-600 to-yellow-600",
  },
  {
    title: "Quality Products",
    Icon: Star,
    gradient: "from-yellow-500 via-orange-500 to-red-500",
    hoverGradient: "from-yellow-600 via-orange-600 to-red-600",
  },
];

const IconGrid = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {icons.map(({ title, Icon, gradient, hoverGradient }, index) => (
          <div
            key={index}
            className="group flex flex-col items-center p-6 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl"
            style={{
              animation: `fade-up 0.5s ease-out ${index * 0.1}s both`,
            }}
          >
            <div
              className={`relative w-20 h-20 mb-6 flex items-center justify-center rounded-full bg-gradient-to-r ${gradient} group-hover:${hoverGradient} transition-all duration-300 transform group-hover:scale-110`}
            >
              <Icon
                size={40}
                strokeWidth={1.5}
                className="text-white drop-shadow-md"
              />
              <div className="absolute inset-0 bg-white opacity-10 rounded-full blur-lg"></div>
            </div>
            <h3 className="text-lg font-bold text-center text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
              {title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IconGrid;
