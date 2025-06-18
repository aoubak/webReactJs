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
  const target = 1234;

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
    <section className="md:flex justify-center items-center">
      <div className="flex flex-col md:flex-row gap-2 p-4">
        {cards.map((Card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="w-full md:w-72 bg-linear-to-r hover:from-cyan-700 cursor-pointer hover:to-cyan-900 transition-colors duration-300 from-cyan-900 to-cyan-700 border-cyan-500/70 border flex justify-start items-center gap-4 p-4 bg-gray- rounded-md"
          >
            <div className="">
              <span className="bg-cyan-700 p-2 border rounded-md border-cyan-500 inline-flex items-center justify-center">
                {Card.icon}
              </span>
            </div>
            <div className="flex flex-col border-l pl-3 border-cyan-500">
              <span className="text-3xl font-bold">{count}</span>
              <span className="text-lg">{Card.label}</span>
            </div>
          </motion.div>
        ))}
       
      </div>
    </section>
  );
}

export default Features;
