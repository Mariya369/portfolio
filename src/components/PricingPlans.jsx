// src/components/PricingPlans.jsx
import React from "react";
import Tilt from "react-parallax-tilt";
import { pricingPackages } from "../constants";
import { motion } from "framer-motion";
import { styles } from "../styles";

const fadeInUpSpring = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120 } }
};

const textVariant = () => ({
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } }
});


const PricingPlans = () => {
  return (
    <section id="pricing-plans" className="py-20 bg-primary text-white">
      <div className="container mx-auto">
        <motion.div
          variants={textVariant()}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <h2 className={styles.sectionHeadText}>Pricing Plans</h2>
          <p className={styles.sectionSubText}>Choose the best plan for your needs</p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {pricingPackages.map((plan, index) => (
            <motion.div
              key={plan.title}
              variants={fadeInUpSpring}
              initial="hidden"
              animate="visible"
              className="relative overflow-hidden"
              >
               <Tilt
                options={{
                  max: 45,
                  scale: 1,
                  speed: 450,
                }}
                className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
              >
                <div className="relative w-full h-[230px]">
                  <div className="absolute inset-0 flex justify-center items-center card-img_hover">
                    <div className="w-10 h-10 rounded-full flex justify-center items-center cursor-pointer bg-primary">
                      <span className="text-white text-xl font-bold">{plan.price}</span>
                    </div>
                  </div>
                  <img
                    src={plan.image}
                    alt={plan.title}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>

                <div className="mt-5 text-center">
                  <h3 className="text-white font-bold text-[24px]">{plan.title}</h3>
                  <p className="mt-2 text-gray-300">{plan.description}</p>
                </div>

                <div className="mt-4 text-gray-400 text-center">
                  {plan.features.map((feature, idx) => (
                    <p key={idx} className="text-[14px] mb-2">
                      <span className="mr-1">*</span> {feature}
                    </p>
                  ))}
                </div>

                <div className="relative w-full mt-5 flex justify-center">
                  <button className="text-white bg-primary py-2 px-4 rounded-lg">
                    Choose Plan
                  </button>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
