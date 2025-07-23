import React, { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { UserCog } from "lucide-react";
import { Users } from "lucide-react";
import { CircleCheck } from "lucide-react";

function Features() {
  const cards = [
    {
      count: 5,
      label: "Years Experience",
      icon: <Sparkles className="w-6 h-6" />,
    },
     {
      count: 5,
      label: "Team Members",
      icon: <UserCog className="w-6 h-6" />,
    },
     {
      count: 5,
      label: "Satisfied Clients",
      icon: <Users className="w-6 h-6" />,
    },
     {
      count: 5,
      label: "Compleate Projects",
      icon: <CircleCheck className="w-6 h-6" />,
    },
  ];

  const [count, setCount] = useState(0);
  const target = 12542;

  useEffect(() => {
    let start = 0;
    const duration = 1000; // total time in ms
    const intervalTime = 10; // update every 10ms
    const step = Math.ceil(target / (duration / intervalTime));

    const interval = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="md:flex justify-center bg-neutral-50/5 border border-neutral-300/20 p-3 rounded-2xl items-center container mx-auto ">
      <div className="flex flex-col md:flex-row  gap-3 ">
        {cards.map((Card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="w-full md:w-60 bg-gray-200  text-gray-800 dark:text-neutral-100 dark:bg-linear-to-r dark:from-cyan-900 dark:to-cyan-700 hover:from-cyan-700 hover:to-cyan-900 cursor-pointer  transition-colors duration-300 border-cyan-700 dark:border-cyan-500/70 border flex justify-start items-center gap-2 p-4 bg-gray- rounded-md"
          >
            <div className="">
              <span className="bg-cyan-600 text-white dark:text-white dark:bg-cyan-700 p-2 border rounded-md border-cyan-500 dark:border-cyan-500 inline-flex items-center justify-center">
                {Card.icon}
              </span>
            </div>
            <div className="flex flex-col border-l pl-2 border-gray-500 dark:border-cyan-500">
              <span className="text-2xl dark:text-white text-cyan-700 font-bold">{count}</span>
              <span className="text-sm">{Card.label}</span>
            </div>
          </motion.div>
        ))}
       
      </div>
    </section>
  );
}

export default Features;
