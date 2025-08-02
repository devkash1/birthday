"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import Head from "next/head";
import Wishes from "../wishes/page";

const BIRTHDAY_DATE = "2025-09-16T00:00:00"; // Set your birthday here

const Home: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isBirthday, setIsBirthday] = useState(false);
  const [showWishes, setShowWishes] = useState(false);

  useEffect(() => {
    const targetDate = new Date(BIRTHDAY_DATE).getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        setIsBirthday(true);
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
      <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 flex items-center justify-center p-4">
        <AnimatePresence mode="wait">
          {!isBirthday ? (
            <motion.div
              key="timer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="text-center bg-white bg-opacity-80 p-8 rounded-2xl shadow-xl max-w-md w-full"
            >
              <h1 className="text-3xl md:text-4xl font-bold text-purple-600 mb-6">
                Countdown to Your Birthday!
              </h1>
              <div className="grid grid-cols-4 gap-4 mb-8">
                {["Days", "Hours", "Minutes", "Seconds"].map((unit, index) => (
                  <div key={unit} className="flex flex-col items-center">
                    <motion.span
                      className="text-4xl md:text-5xl font-bold text-pink-600"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{
                        repeat: Infinity,
                        duration: 1,
                        delay: index * 0.2,
                      }}
                    >
                      {timeLeft[unit.toLowerCase() as keyof typeof timeLeft]}
                    </motion.span>
                    <span className="text-sm md:text-base text-gray-600">
                      {unit}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ) : !showWishes ? (
            <motion.div
              key="birthday"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 mb-8">
                HAPPY BIRTHDAY
              </h1>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowWishes(true)}
                className="px-6 py-3 bg-pink-500 text-white rounded-full text-lg md:text-xl font-semibold shadow-lg flex items-center justify-center gap-2"
              >
                <span>Special Wishes</span>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </motion.button>
            </motion.div>
          ) : (
            <Wishes key="Wishes" />
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Home;
