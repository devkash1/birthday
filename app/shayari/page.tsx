"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Shayari() {
  const router = useRouter();
  return (
    <main className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-red-50  ">
      <div>
        <button
          onClick={() => router.back()}
          className="group flex items-center gap-2 text-rose-700 hover:text-rose-800 font-medium "
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
        </button>
      </div>
      <div className="flex justify-center items-center py-6 px-4">
        {/* Floating decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-2 h-2 bg-rose-300 rounded-full opacity-60"
            animate={{
              y: [0, -20, 0],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-40 right-16 w-1 h-1 bg-pink-400 rounded-full opacity-70"
            animate={{
              y: [0, -15, 0],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          <motion.div
            className="absolute bottom-32 left-20 w-1.5 h-1.5 bg-red-300 rounded-full opacity-50"
            animate={{
              y: [0, -25, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Main content card */}
          <div className="relative bg-white/80 backdrop-blur-sm border border-rose-200/50 shadow-2xl rounded-2xl p-6 md:p-8 lg:p-12">
            {/* Decorative corner elements */}
            <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-rose-300 rounded-tl-2xl opacity-60"></div>
            <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-rose-300 rounded-tr-2xl opacity-60"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-rose-300 rounded-bl-2xl opacity-60"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-rose-300 rounded-br-2xl opacity-60"></div>

            {/* Header decoration */}
            <div className="text-center mb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="inline-flex items-center gap-2 text-rose-500 mb-4"
              >
                <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-rose-400"></div>
                <span className="text-2xl">💕</span>
                <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-rose-400"></div>
              </motion.div>
              <h1 className="text-2xl md:text-3xl font-serif bg-gradient-to-r from-rose-600 via-pink-600 to-red-600 bg-clip-text text-transparent font-bold">
                Shayari
              </h1>
            </div>

            {/* Poetry content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative"
            >
              <p className="text-gray-800 text-base md:text-lg lg:text-xl leading-relaxed md:leading-loose text-center font-medium">
                Aapki Aankhen hai Nasheeli,
                <br />
                Aur in Aankhon se bhi Nasheeli aapki baatein hai... <br />
                Jis waqt nahi girana tha pyaar mai,
                <br />
                Dub gayi us waqt mai in nasheeli baaton mai... <br />
                Aur ho gayi aapki, hamesha ke liye... <br />
                <br />
                Aapne sikhaya pyaar kya hota hai <br />
                Bina shabd, sirf ehsaas ka nasha hota hai... <br />
                Aap hi ho mere dost, jo har waqt mai sath hai <br />
                Aap hi ho mera pehla pyaar, jo har saans mai baaqi hai <br />
                Aap hi ho mere Krishna, mere man ka madhur raag.. <br />
                Aap hi ho mere Sensei, jo har mod pe bane raah.. <br />
                Aap hi ho mere Sadhguru, jo roshni ka noor ban gaye.. <br />
                <br />
                Aap hi ho mera Pehla Bacha, Jiske Masoom chehre pe likhi meri
                har dua.. <br />
                Aap hi ho mera Panda Pyaara, golu-molu sa pyaar.. <br />
                jise dekh kar thakawat bhi ho jaye bekaar... <br />
                Aap hi ho meri Muskurahat ki wajah, <br />
                Jab roothi ho khushi, aap ban jayein Sabab.. <br />
                Aap hi ho mera sab kuch, mera armaan, mera junoon... <br />
                Mana dooriya hai sirf faslo ki <br />
                Pr dil mai toh baste ho har ghadi... <br />
                Aap mai hi basi hai meri har subah, meri har shaam ki sukoon
                bhari khushi.......
                <br />
                <br />
              </p>

              {/* Decorative quote marks */}
              <div className="absolute -top-4 -left-2 text-6xl text-rose-200 font-serif leading-none">
                &quot;
              </div>
              <div className="absolute -bottom-8 -right-2 text-6xl text-rose-200 font-serif leading-none rotate-180">
                &quot;
              </div>
            </motion.div>

            {/* Footer decoration */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="text-center mt-12"
            >
              <div className="inline-flex items-center gap-2 text-rose-400">
                <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-rose-300"></div>
                <span className="text-xl">💖</span>
                <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-rose-300"></div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
