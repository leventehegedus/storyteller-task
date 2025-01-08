import React from "react";

const UserAvatar: React.FC = () => (
  <div className="flex items-center gap-[19px] md:gap-8">
    <div className="w-5 h-5 bg-white rounded-full text-dark-primary flex items-center justify-center">
      ?
    </div>
    <div className="bg-blue-dark w-9 h-9 text-xl uppercase flex items-center justify-center rounded-full">
      RJ
    </div>
  </div>
);

export default UserAvatar;
