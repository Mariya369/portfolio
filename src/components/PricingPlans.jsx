// src/components/PricingPlans.jsx
import React from "react";
import { pricingPackages } from "../constants";
import { motion } from "framer-motion";
import { styles } from "../styles";

const PricingPlans = () => {
  return (
    <section id="pricing-plans" className="py-20 bg-primary text-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className={styles.sectionHeadText}>Pricing Plans</h2>
          <p className={styles.sectionSubText}>Choose the best plan for your needs</p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {pricingPackages.map((plan, index) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="p-5 bg-secondary rounded-lg shadow-lg text-center"
            >
              <h3 className="text-2xl font-semibold">{plan.title}</h3>
              <p className="mt-2 text-gray-300">{plan.description}</p>
              <ul className="mt-4 text-gray-400">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="mt-1">
                    {feature}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-3xl font-bold">{plan.price}</p>
              <button className="mt-5 px-5 py-2 bg-primary text-white rounded-lg">
                Choose Plan
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
