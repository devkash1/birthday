import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Wishes: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-screen w-full  bg-red-100  p-8 md:p-12 rounded-lg shadow-2xl relative overflow-hidden"
    >
      <h1 className="text-4xl md:text-4xl font-serif text-center text-red-950 mb-6">
        Wishes for My Cutie Panda
      </h1>
      <div className="w-4xl text-center mx-auto space-y-8 text-gray-800 font-serif text-lg md:text-xl leading-relaxed">
        <div className="flex justify-center items-center gap-2">
          <div>
            <motion.p
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Mere Pyare Yuvraj, on this beautiful day, my heart sings with joy
              for you. Your smile lights up my world, and every moment with you
              feels like a treasure. Happy Birthday, my love!
            </motion.p>
          </div>
          <motion.div className="w-96 h-48 ">
            <Image
              src="/birthday.jpg"
              alt="birthday"
              width={250}
              height={200}
              className="rounded-full"
            />
          </motion.div>
        </div>
        <div className="flex justify-center items-center gap-2">
          <div className="w-96 h-52">
            <Image
              src="/happy.jpg"
              alt=""
              width={250}
              height={200}
              className="rounded-full"
            />
          </div>

          <div>
            <motion.p
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              May this year wrap you in love, success, and endless happiness.
              I’m forever grateful for you, and I can’t wait to make more
              unforgettable memories together.
            </motion.p>
          </div>
        </div>

        <div>
          <div className="w-96 h-52 mx-auto">
            <Image
              src="/eat.jpg"
              alt=""
              width={250}
              height={200}
              className="rounded-full"
            />
          </div>
          <div className="mt-10">
            <p>
              My Panda, My Bacha, My Sensie, My Love, My Cuite, My Sweetie, My
              Jaan, My Darling Po, My KhuchiPuchi... <br />
              <br />
              Tumne Mujhe life kaise jete hai sikhaya hai Tum bahut jada special
              ho mere liye and aaj tumhara day hai. N yaad hai mujhe tum bole
              the mujhe jab tum born uhye the tab full lal gore the abhi bhi
              vase hi ho just born baby. Tumhare liye bahut care lagti hai just
              born baby ki tarhahi ab tumhare sath reh k samjh rahi hu mummy
              bahut care karti hai tumhari n u deserve it my love.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center ">
          <div className="w-96 h-52 ">
            <Image
              src="/hugs.jpg"
              alt=""
              width={250}
              height={200}
              className="rounded-full"
            />
          </div>
          <div>Sending U lots of Kissess Hugs and Love</div>
        </div>

        <div className="mt-44">
          <div>
            Here is something for u about us...
            <Link href="/ourStory">
              <button className="container cursor-pointer w-fit p-2 rounded-full border bg-rose-200 text-red-800 border-rose-900">
                Kahani{" "}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Wishes;
