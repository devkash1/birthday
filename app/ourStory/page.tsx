"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Heart, Sparkles, Calendar, MapPin } from "lucide-react";

export default function OurStory() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-red-50 py-4 px-4">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-4 text-rose-300"
        >
          <Heart className="w-6 h-6 fill-current" />
        </motion.div>
        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [0, -5, 5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute top-40 right-6 text-pink-300"
        >
          <Sparkles className="w-5 h-5 fill-current" />
        </motion.div>
        <motion.div
          animate={{
            y: [0, -25, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 7,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 4,
          }}
          className="absolute bottom-40 left-8 text-rose-200"
        >
          <Heart className="w-4 h-4 fill-current" />
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <div className="relative inline-block">
            <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-red-600 bg-clip-text text-transparent mb-2">
              OUR STORY
            </h1>
            <div className="absolute -top-2 -right-2">
              <Heart className="w-6 h-6 text-rose-400 fill-current" />
            </div>
          </div>
          <p className="text-rose-700 text-lg md:text-xl italic font-medium">
            Mere Nazariya se
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-pink-400 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-rose-100 p-6 md:p-8 lg:p-12 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-rose-100 to-transparent rounded-bl-full opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-pink-100 to-transparent rounded-tr-full opacity-50"></div>

          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Heart className="w-5 h-5 text-rose-500 fill-current" />
              <h2 className="text-2xl md:text-3xl font-bold text-rose-800">
                From strangers to lovers
              </h2>
              <Heart className="w-5 h-5 text-rose-500 fill-current" />
            </div>
            <p className="text-rose-600 text-lg font-medium">
              The Journey was so adventurous and joyful.
            </p>
          </div>

          <div className="prose prose-rose max-w-none">
            <div className="space-y-6 text-rose-900 leading-relaxed">
              <div className="bg-rose-50 rounded-2xl p-6 border-l-4 border-rose-400">
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="w-5 h-5 text-rose-600" />
                  <h3 className="text-xl font-semibold text-rose-800">
                    First Meeting
                  </h3>
                </div>
                <p className="text-base md:text-lg">
                  Our first meet talk, was BIS portal induction in Atishay Ltd.
                  Mai Process coordinator thi aur tum Frontend Developer. Tumne
                  white shirt pehna tha formals mai the bt in nhi kiya tha aur
                  hairs oily as usual. Maine Pooja ko bola tha tumne induction
                  dena keli bt pooja was not ready toh dono de rahe the. N usme
                  u was the only one jo itne sare questions puch raha tha jiske
                  bareme hume bhi pata nhi tha so I was like "yaar ise itna kya
                  hai jo bol rahi hu sunke le aur baadme HR ko puch. Kyu dimag
                  kha raha hai."😅
                </p>
              </div>

              <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-rose-800 mb-3 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-pink-600" />
                  The Smoothie Incident 🧃
                </h3>
                <p className="text-base md:text-lg">
                  Aapna second interaction tha smooodh 🧃 As I'm introvert mai
                  jada kisi se baat nahi karti thi only pranali se baat karti
                  thi. Lunch break mai maine apne liye smoothie laya tha ki
                  evening mai piungi, bt ek chor tha jisne mera smoothie liya
                  tha 😑 Haa ye baat alag thi ki usne pucha tha ki 'kiska hai ye
                  mai le raha hu' bt mera dhyan nhi tha n pranali ne bola mujhe
                  ki mera smoothie yuvraj ne liya hai and mera action was "aye
                  ye mera hai!!" jorse chilai thi. That moment was horrible.
                  abhi soch kar bahut hassi aati hai 🤪🤣🤣.
                </p>
              </div>

              <div className="space-y-4 text-base md:text-lg">
                <p>
                  Aur uske baadme ek interaction Pranali k cabin mai tha. U was
                  talking with her in her cabin aur mai aai thi use kuch baat
                  karne n tum the vaha pe aur tumne bola tha "iski smile same IT
                  wale joker jaisi dikhati hai same Joker jaise dikhati hai tu
                  jab hasti hai" 🤡🤨. Kya sachme meri smile joker jaisi hai,
                  haa ye baat alag hai ki mai chudel hu 🤭😝
                </p>

                <div className="bg-yellow-50 rounded-2xl p-6 border-l-4 border-yellow-400">
                  <h3 className="text-xl font-semibold text-rose-800 mb-3">
                    Becoming My Sensei 👨‍🏫
                  </h3>
                  <p>
                    Then next was jab tumhe pata chala ki mai frontend kar rahi
                    hu toh tab baat hui. Aur baadme tumne sir ko bola and U
                    became MY SENSEI on 17th May, 2024. Tabhi toh roj second
                    half mai aake baithe the n mujhe aur pooja ko sikhate the
                    actually baatein karte the pravachan Yuvraj Baba. Voh time
                    mai like july mai mai thodi down hogayi thi due to some
                    reason pata nahi kya tha mujhe yaad bhi nhi hai kyu mai down
                    thi bt daily quotes likhe the use samjh aarha hai n voh time
                    pe tum second half mai ake jo ek smile late the tabhi notice
                    nahi kiya tha bt mai ghar jate time happy jati thi 🤗 n
                    reason was ur stupid talks.😁
                  </p>
                  <p>
                    Haa I was talking that tabhi mai quotes likhati thi n ek din
                    mai office nahi aai thi toh tumne jo mere quotes sahi kiye n
                    ek quote mere liye likha tha... like next day aake dekha ye
                    sab and I was happy aur big smile on face 😊 n bahut
                    emotional 🥹 feel kar rahi thi. Like kisine ye mere liye
                    likha hai mujhe samjhaya hai aur mujhe pata tha itni
                    samjhdari wali baat Yuvraj hi kar sakta hai🤗
                  </p>
                </div>

                <div className="bg-purple-50 rounded-2xl p-6 border-l-4 border-purple-400">
                  <h3 className="text-xl font-semibold text-rose-800 mb-3 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-purple-600" />
                    Ganpati Celebration 🎉
                  </h3>
                  <p>
                    And next was Ganpati. Ganpati mai office saree pehen ke ayi
                    thi jo mujhe nahi pehni thi pranali ne force kiya tha. And U
                    was wearing a dark blue kurta (looking handsome 🫣). Photo
                    nikalne k liye dono bhi awkward the pata nahi kyu. N mujhe
                    pata hai mai apne age se badi dikhati hu n voh time saree
                    mai aunty bhi lag rahi rahungi I don't care bt tab Narayan
                    aisa hi kuch toh bolne wala tha pr tumne use rokha tha tabhi
                    ik, pata nahi kyu us time thoda acha laga tha tumne roka
                    toh.
                  </p>
                  <p>
                    Aur ek hai ganpati ka moment jab tum mere ghar nahi aye the.
                    Yaar sach bolu toh mujhe bhi pata nahi tha mai kyu tum se
                    gussa ho kar roothi thi. Mujhe samjh aarha tha ki possible
                    nahi hai fir bhi idk why? Aur tumne mujhe manane k liye
                    maggi bhi banvai thi and nahi khai toh baadme garam karke
                    lai thi n bartan bhi dhoke rakha tha and that time I was
                    like okay thike hai karna chahiye, kyu karna chahiye pata
                    nahi 😅
                  </p>
                </div>

                <p>
                  Uske baad Ghansoli. Mai Ghansoli chali gayi thi n tum fort
                  office tabhi ka jo conversation tha was something different.
                  pata nahi bt tab late night talks start hue the 2 baje tak 3
                  baje tak small chat convert into big daily conversation. Aur
                  tum baadme VC bhi karna start kiye, something was there bt not
                  knowing.
                </p>

                <div className="bg-gradient-to-r from-rose-100 to-pink-100 rounded-2xl p-6 border-2 border-rose-300">
                  <div className="flex items-center gap-2 mb-4">
                    <Heart className="w-6 h-6 text-rose-600 fill-current" />
                    <h3 className="text-2xl font-bold text-rose-800">
                      24th April, 2025
                    </h3>
                    <Heart className="w-6 h-6 text-rose-600 fill-current" />
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="w-5 h-5 text-rose-600" />
                    <span className="font-semibold text-rose-700">
                      Central Park, Thane
                    </span>
                  </div>
                  <p className="text-lg">
                    Pata nhi voh din kya tha pehel iskcon gaye darshan kiye fir
                    vaha se central park gaye bt tabhi voh band tha 😅. Fir vaha
                    se Mall gaye juice piya tha watermelon and sitafal. Pura
                    mall haat pakad ke ghume. Firse Central Park gaye vaha tumne
                    mujhe dahi roti khilai apne haat se...
                  </p>
                </div>

                <div className="bg-rose-50 rounded-2xl p-6">
                  <p className="text-lg font-medium text-rose-800 mb-4">
                    Bass bahut sari baate hai bahut sare memories hai bt abhi
                    yahi ruk rahi hu varna tum bore ho jaoge Birthday k din, aur
                    bologe ki ye kya itna likha hai aur kyu likha hai, pata hai
                    mujhe bhi aur tumhe bhi toh likh ke sabud kyu bana rahi hai
                    kisine dekha toh. Kyuki mujhe tum se bahut sari baatein
                    karni hai pr tum samne aate ho n I'm blank.
                  </p>
                </div>

                <p>
                  Tumhe pata hai abhi tum jo busy hogaye ho phele jaisi baat
                  nahi ho rahi hai dimag se mai samjh rahi hu okay thike hai
                  busy hai kaam mai hai koi baat nahi hai chill. Pr ye dil hai
                  na pagal samjhta hi nhi hai barbar dimag ko bolta hai 'kya hai
                  koi itna busy thodi ho sakta hai ek msg karne ko nahi hota koi
                  chinta hi nahi hai pehele roj har waqt baat karta tha ab kya
                  subha ek bar aur raat ko thoda sa...' Ye dimag samjhata hai
                  dil ko koi baat nahi samjhati, pata hai mujhe tum hamesha sath
                  ho mere, mere pass, mere andhar.
                </p>

                <div className="text-center bg-gradient-to-r from-pink-100 to-rose-100 rounded-2xl p-8">
                  <p className="text-lg font-medium text-rose-800 mb-4">
                    Tumhe pata hai tum bahut innocent aur cute ho, ur just
                    YUVRAJ n be like this forever.
                  </p>
                  <p className="text-lg font-medium text-rose-800 mb-4">
                    Okay mai apni katha yahi samapt karti hu pr bahut kuch kehna
                    hai sirf tumse.
                  </p>
                  <p className="text-2xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent mb-2">
                    Love You my Jaan Darling ❤️
                  </p>
                  <p className="text-xl font-semibold text-rose-700">
                    and Happiest Birthday My Forever Pagal Panda...😘❤️
                  </p>
                </div>

                <div className="text-center italic text-rose-700 text-lg font-medium bg-rose-50 rounded-2xl p-6">
                  <p>The Journey from stranger- kya dimag kha raha hai</p>
                  <p>
                    To lover- Mujhe tumhari baatein pasand hai chup maat rehna
                    kabhi.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            className="flex justify-center mt-12"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/shayari">
              <button className="group relative overflow-hidden bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2">
                <Heart className="w-5 h-5 fill-current group-hover:animate-pulse" />
                <span className="text-lg">Special Shayari</span>
                <Sparkles className="w-5 h-5 fill-current group-hover:animate-pulse" />
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
