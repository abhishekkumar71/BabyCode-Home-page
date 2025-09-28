import React from "react";
import styles from "../styles/pages.module.css";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-[90vh] sm:min-h-[60vh] bg-[url('/heroImg.jpg')] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundColor: "rgba(0,0,0,0.45)",
        backgroundBlendMode: "overlay",
        color: "white",
      }}
    >
      {/* Content */}
      <div className="relative z-10 max-w-full sm:max-w-3xl text-center px-4 sm:px-6 md:px-8">
        <h1 className="font-heading text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-snug md:leading-tight">
          <span className="block md:inline-block overflow-hidden">
            <span className={styles.typing}>Crack IELTS with Confidence</span>
          </span>
        </h1>
        {/* Extra description line */}
        <h3
          className="text-sm sm:text-base md:text-xl lg:text-2xl mb-2 sm:mb-4 animate-fadeIn delay-300"
          style={{
            fontFamily: "PT Sans Narrow, sans-serif",
            fontSize: "1.5rem",
          }}
        >
          Join our expert-led courses and achieve your dream score with
          personalized training and mock tests. Learn at your own pace and track
          your progress!
        </h3>
        {/* New line with fade-out and cursive */}
        <h4
          className="text-xs sm:text-sm md:text-lg lg:text-xl text-white/90 font-light italic mb-4 sm:mb-8 animate-fadeOut delay-500"
          style={{ fontFamily: "Alan Sans, sans-serif", fontSize: "2rem" }}
        >
          Your journey to global opportunities starts here.
        </h4>

        {/* Heartbeat button */}
        <button className="font-body bg-blue-600 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-lg text-sm sm:text-base md:text-lg font-medium hover:bg-blue-700 transform hover:scale-105 animate-heartbeat transition duration-300">
          Get Started
        </button>
      </div>

      {/* Custom animations */}
      <style>
        {`
         .animate-typing {
  display: inline-block;     
  white-space: nowrap;        
  overflow: hidden;           
  border-right: 0.15em solid white;
  animation: typing 3s steps(30, end) forwards, blink 0.5s 3s forwards;
}
@keyframes typing {
  from { width: 0; }
  to { width: 100%; }
}

@keyframes blink {
  0%, 100% { border-color: transparent; }
  50% { border-color: white; }
}


          @keyframes heartbeat {
            0%, 100% { transform: scale(1); }
            25% { transform: scale(1.1); }
            50% { transform: scale(1); }
            75% { transform: scale(1.1); }
          }

          .animate-heartbeat {
            animation: heartbeat 2s infinite;
          }

          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes fadeOut {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .animate-fadeIn {
            animation: fadeIn 1s ease forwards;
          }

          .animate-fadeOut {
            animation: fadeOut 3s ease forwards;
          }

          .delay-300 {
            animation-delay: 0.3s;
          }

          .delay-500 {
            animation-delay: 0.5s;
          }
        `}
      </style>
    </section>
  );
}
