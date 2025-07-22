import React from "react";
import "../StartGame.css";

const StartGame = ({ onStart }) => {
  return (
    <div className="relative w-full h-screen bg-[#ffffff] overflow-hidden flex justify-center items-center">
      {/* Cercle animé derrière */}
      <div className="absolute w-[200px] sm:w-[256px] h-[200px] sm:h-[256px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <span key={i} style={{ "--i": i }} />
        ))}
      </div>

      {/* Bouton Start */}
      <button
        onClick={onStart}
        className="relative z-10 px-6 sm:px-8 py-3 sm:py-4 bg-black/70 hover:bg-white/70 hover:text-black text-white text-lg sm:text-xl font-bold rounded-xl shadow-lg transition duration-300"
      >
        Start
      </button>
    </div>
  );
};

export default StartGame;
