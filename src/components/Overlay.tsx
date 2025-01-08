// Overlay.tsx
import React from "react";

interface OverlayProps {
  isVisible: boolean;
  onClick: () => void;
}

const Overlay: React.FC<OverlayProps> = ({ isVisible, onClick }) => {
  if (!isVisible) return null;

  return (
    <div
      className="fixed top-[60px] w-full bottom-0 bg-black opacity-80 z-10"
      onClick={onClick}
    ></div>
  );
};

export default Overlay;
