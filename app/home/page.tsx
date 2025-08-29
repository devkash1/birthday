"use client";
import { useState, useEffect } from "react";
import type React from "react";

import { motion, AnimatePresence } from "framer-motion";
import Wishes from "../wishes/page";

const BIRTHDAY_DATE = "2025-08-16T00:00:00"; // Set your birthday here

const Confetti = () => {
  const confettiPieces = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 3 + Math.random() * 2,
    color: [
      "#ff6b6b",
      "#4ecdc4",
      "#45b7d1",
      "#96ceb4",
      "#feca57",
      "#ff9ff3",
      "#54a0ff",
    ][Math.floor(Math.random() * 7)],
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {confettiPieces.map((piece) => (
        <motion.div
          key={piece.id}
          className="absolute w-3 h-3 rounded-full"
          style={{
            backgroundColor: piece.color,
            left: `${piece.x}%`,
            top: "-10px",
          }}
          initial={{ y: -10, rotate: 0, opacity: 1 }}
          animate={{
            y: typeof window !== "undefined" ? window.innerHeight + 10 : 800,
            rotate: 360,
            opacity: 0,
          }}
          transition={{
            duration: piece.duration,
            delay: piece.delay,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
};

const FloatingBalloons = () => {
  const balloons = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    x: 10 + i * 10,
    delay: i * 0.3,
    color: [
      "#ff6b6b",
      "#4ecdc4",
      "#45b7d1",
      "#96ceb4",
      "#feca57",
      "#ff9ff3",
      "#54a0ff",
      "#fd79a8",
    ][i],
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-40">
      {balloons.map((balloon) => (
        <motion.div
          key={balloon.id}
          className="absolute"
          style={{ left: `${balloon.x}%` }}
          initial={{
            y: typeof window !== "undefined" ? window.innerHeight + 50 : 850,
            scale: 0,
          }}
          animate={{
            y: -100,
            scale: 1,
            x: [0, 20, -20, 0],
          }}
          transition={{
            duration: 6,
            delay: balloon.delay,
            ease: "easeOut",
            x: {
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            },
          }}
        >
          <div
            className="w-8 h-10 rounded-full shadow-lg"
            style={{ backgroundColor: balloon.color }}
          />
          <div className="w-px h-12 bg-gray-400 mx-auto" />
        </motion.div>
      ))}
    </div>
  );
};

const Home: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isBirthday, setIsBirthday] = useState(false);
  const [showWishes, setShowWishes] = useState(false);
  const [showPartyEffects, setShowPartyEffects] = useState(false);

  useEffect(() => {
    const targetDate = new Date(BIRTHDAY_DATE).getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        setIsBirthday(true);
        setShowPartyEffects(true);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {showPartyEffects && (
        <>
          <Confetti />
          <FloatingBalloons />
        </>
      )}

      <div className="min-h-screen bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-400 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-10 left-10 w-20 h-20 bg-pink-300 rounded-full opacity-30"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-32 right-16 w-16 h-16 bg-purple-300 rounded-full opacity-30"
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-20 left-20 w-24 h-24 bg-blue-300 rounded-full opacity-30"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, 20, 0],
            }}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="relative z-10 flex items-center justify-center min-h-screen p-4 sm:p-6 lg:p-8">
          <AnimatePresence mode="wait">
            {!isBirthday ? (
              <motion.div
                key="timer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-center bg-white/90 backdrop-blur-sm p-6 sm:p-8 lg:p-10 rounded-3xl shadow-2xl max-w-sm sm:max-w-md lg:max-w-lg w-full border border-white/20"
              >
                <motion.h1
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 sm:mb-8"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  Countdown to Your Birthday! 🎉🎂
                </motion.h1>

                <div className="grid grid-cols-4 sm:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
                  {["Days", "Hours", "Minutes", "Seconds"].map(
                    (unit, index) => (
                      <motion.div
                        key={unit}
                        className="flex flex-col items-center bg-gradient-to-br from-pink-100 to-purple-100 p-3 sm:p-4 rounded-2xl shadow-lg"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <motion.span
                          className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent"
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{
                            repeat: Number.POSITIVE_INFINITY,
                            duration: 1.5,
                            delay: index * 0.2,
                          }}
                        >
                          {
                            timeLeft[
                              unit.toLowerCase() as keyof typeof timeLeft
                            ]
                          }
                        </motion.span>
                        <span className="text-xs sm:text-sm lg:text-base text-gray-600 font-medium mt-1">
                          {unit}
                        </span>
                      </motion.div>
                    )
                  )}
                </div>
              </motion.div>
            ) : !showWishes ? (
              <motion.div
                key="birthday"
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center px-4 sm:px-6 lg:px-8"
              >
                <motion.h1
                  className="text-4xl sm:text-6xl lg:text-8xl font-extrabold text-red-900 mb-6 sm:mb-8 lg:mb-12 leading-tight"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    backgroundPosition: {
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    },
                    scale: {
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    },
                  }}
                >
                  WISHING YOU HAPPIEST BIRTHDAY YUVRAJ MY LOVE! 🎉🎂
                </motion.h1>

                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(236, 72, 153, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowWishes(true)}
                  className="px-6 sm:px-8 lg:px-10 py-3 sm:py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full text-base sm:text-lg lg:text-xl font-bold shadow-2xl flex items-center justify-center gap-2 sm:gap-3 mx-auto hover:from-pink-600 hover:to-purple-700 transition-all duration-300"
                >
                  <span>🎁 Special Wishes</span>
                  <motion.svg
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </motion.svg>
                </motion.button>

                <motion.p
                  className="text-base sm:text-lg lg:text-xl text-white font-semibold mt-6 sm:mt-8 drop-shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.6 }}
                >
                  🌟 Today is your special day! 🌟
                </motion.p>
              </motion.div>
            ) : (
              <Wishes key="Wishes" />
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default Home;
