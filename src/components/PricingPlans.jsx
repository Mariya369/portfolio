// src/components/PricingPlans.jsx
import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { pricingPackages } from "../constants";
import { styles } from "../styles";

const zoomIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 120, duration: 0.5 } }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } }
};

const bounceIn = {
  hidden: { opacity: 0, scale: 0.3 },
  visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 300, damping: 10, duration: 0.5 } }
};

const PricingPlans = () => {
  return (
    <section id="pricing-plans" className="py-20 bg-primary text-white">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn}
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
              variants={zoomIn}
              initial="hidden"
              animate="visible"
              className="relative overflow-hidden"
            >
              <Tilt
                options={{
                  max: 45,
                  scale: 1.05,
                  speed: 450,
                }}
                className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full transition-transform transform hover:scale-105'
              >
                <div className='relative w-full h-[230px]'>
                  <motion.div
                    variants={bounceIn}
                    initial="hidden"
                    animate="visible"
                    className='absolute inset-0 flex justify-center items-center card-img_hover'
                  >
                    <div className='w-10 h-10 rounded-full flex justify-center items-center cursor-pointer bg-primary'>
                      <span className='text-white text-xl font-bold'>{plan.price}</span>
                    </div>
                  </motion.div>
                </div>

                <div className='mt-5 text-center'>
                  <h3 className='text-white font-bold text-[24px]'>{plan.title}</h3>
                  <p className='mt-2 text-gray-300'>{plan.description}</p>
                </div>

                <div className='mt-4 text-gray-400 text-center'>
                  {plan.features.map((feature, idx) => (
                    <p key={idx} className='text-[14px] mb-2'>
                      <span className="mr-1">*</span> {feature}
                    </p>
                  ))}
                </div>

                <div className='relative w-full mt-5 flex justify-center'>
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
