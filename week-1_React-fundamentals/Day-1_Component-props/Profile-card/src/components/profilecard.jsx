import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const ProfileCard = ({ name, age, image, isOnline, bio }) => {
  return (
    <div className="max-w-sm bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200 transform transition hover:scale-100 hover:shadow-2xl p-5">
      {/* Profile Image */}
      <div className="relative">
        <img src={image} alt={name} className="w-10 h-10 md:w-14 md:h-14 rounded-full object-cover mx-auto" />
        <div className={`absolute top-3 right-3 p-2 rounded-full ${isOnline ? "bg-green-500" : "bg-red-500"}`}>
          {isOnline ? "🟢" : "🔴"}
        </div>
      </div>

      {/* Profile Info */}
      <div className="p-5 text-center">
        <h2 className="text-2xl font-semibold text-gray-900">{name}</h2>
        <p className="text-gray-500 text-sm">Age: {age}</p>
        <p className="text-gray-600 mt-3">{bio}</p>
      </div>

      {/* Social Links */}
      <div className="flex justify-center space-x-4 pb-4">
        <FaFacebook className="text-blue-600 cursor-pointer hover:text-blue-800 text-2xl" />
        <FaTwitter className="text-sky-500 cursor-pointer hover:text-sky-700 text-2xl" />
        <FaLinkedin className="text-blue-700 cursor-pointer hover:text-blue-900 text-2xl" />
      </div>
    </div>
  );
};

export default ProfileCard;
