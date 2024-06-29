import React from "react";

const Card = () => {
  return (
    <div className="flex items-start space-x-1 hover:bg-gray-300 hover:backdrop-filter hover:backdrop-blur-sm hover:bg-opacity-5  cursor-pointer py-4 px-7 rounded-md hover:shadow-lg group">
      <p className="left w-[85%] text-[#5c6b82] text-sm">2020 - Present</p>
      <div className="right">
        <h4 className="text-lg text-slate-200 group-hover:text-[#5ee8d2]">
          Backend Enginner, Pinksurfing
        </h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam,
          quo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
          consequuntur numquam deserunt esse iure, fugit odio. Necessitatibus
          mollitia provident
        </p>
        <div className="tech-stack flex flex-wrap justify-start mt-2 mb-3">
          <p className="bg-[#152B39] px-2 py-1 rounded-full text-xs text-[#5ee8d2]">
            Python
          </p>
          <p className="bg-[#152B39] px-2 py-1 rounded-full text-xs text-[#5ee8d2]">
            Django
          </p>
          <p className="bg-[#152B39] px-2 py-1 rounded-full text-xs text-[#5ee8d2]">
            Django RF
          </p>
          <p className="bg-[#152B39] px-2 py-1 rounded-full text-xs text-[#5ee8d2]">
            Javascript
          </p>
          <p className="bg-[#152B39] px-2 py-1 rounded-full text-xs text-[#5ee8d2]">
            Solidity
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
