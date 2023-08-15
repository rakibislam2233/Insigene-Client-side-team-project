import { Link } from "react-router-dom";
import PricingCard from "./PricingCard";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

const BaaS = () => {
  return (
    <div className=" p-5">
      <Helmet>
        <title>BaaS - INSiGENe</title>
      </Helmet>
      <div className="w-full  max-w-6xl mx-auto">
        <h2 className="mt-12 mb-4 text-3xl font-semibold">
          Get access to a whole team for a fraction of the cost hiring one
          person!
        </h2>
        <p className="text-xl">
          INSiGENe delivers customizable bioinformatics as a service (BaaS)
          support for your project driven by experts in Systems Biology and
          Biostatistics. Our BaaS services include end-to-end support from
          project conception through data dissemination (see figure below)
          depending on the needs of your specific project.
        </p>
        <p className="text-xl mt-6">
          {" "}
          <Link className="text-[#2499E7]">Click here</Link> to meet our team of
          experts.
        </p>
        <div>
          {/* <img
            className="pt-20"
            src="https://insigene.com/wp-content/uploads/2023/04/Baas_Process.png"
            alt=""
          /> */}
          <div className="flex gap-3 mt-4" >
            <motion.div
              animate={{ x: 20 }}
              transition={{ ease: "easeOut", duration: 2 }}
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <div className="h-[140px] w-[180px] bg-[#2499E7] rounded-xl flex justify-center text-center items-center relative hover:bg-gradient-to-r from-cyan-500 to-blue-500">
                  <h2 className="max-w-xs transition duration-300 ease-in-out hover:scale-110">
                    1. <br /> Project <br /> conceptualization
                  </h2>
                </div>
              </motion.button>
            </motion.div>
            <motion.div
              animate={{ x: 20 }}
              transition={{ ease: "easeOut", duration: 2 }}
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <div className="h-[140px] w-[180px] bg-[#0084E2] rounded-xl flex justify-center text-center items-center relative hover:bg-gradient-to-r from-cyan-500 to-blue-500">
                  <h2 className="max-w-xs transition duration-300 ease-in-out hover:scale-110">
                    2. <br /> Experiment <br /> design
                  </h2>
                </div>
              </motion.button>
            </motion.div>
            <motion.div
              animate={{ x: 20 }}
              transition={{ ease: "easeOut", duration: 2 }}
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <div className="h-[140px] w-[180px] bg-[#0074E3] rounded-xl flex justify-center text-center items-center relative hover:bg-gradient-to-r from-cyan-500 to-blue-500">
                  <h2 className="max-w-xs transition duration-300 ease-in-out hover:scale-110">
                    3. <br /> Sequencing <br /> design
                  </h2>
                </div>
              </motion.button>
            </motion.div>
            <motion.div
              animate={{ x: 20 }}
              transition={{ ease: "easeOut", duration: 2 }}
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <div className="h-[140px] w-[180px] bg-[#0064E4] rounded-xl flex justify-center text-center items-center relative hover:bg-gradient-to-r from-cyan-500 to-blue-500">
                  <h2 className="max-w-xs transition duration-300 ease-in-out hover:scale-110">
                    4. <br /> Sample <br /> randomization
                  </h2>
                </div>
              </motion.button>
            </motion.div>
            <motion.div
              animate={{ x: 20 }}
              transition={{ ease: "easeOut", duration: 2 }}
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <div className="h-[140px] w-[180px] bg-[#0054E6] rounded-xl flex justify-center text-center items-center relative hover:bg-gradient-to-r from-cyan-500 to-blue-500">
                  <h2 className="max-w-xs transition duration-300 ease-in-out hover:scale-110">
                    5. <br /> Data <br /> generation <br /> (completed by client)
                  </h2>
                </div>
              </motion.button>
            </motion.div>
            <motion.div
              animate={{ x: 20 }}
              transition={{ ease: "easeOut", duration: 2 }}
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <div className="h-[140px] w-[180px] bg-[#0043E7] rounded-xl flex justify-center text-center items-center relative hover:bg-gradient-to-r from-cyan-500 to-blue-500">
                  <h2 className="max-w-xs transition duration-300 ease-in-out hover:scale-110">
                    6. <br /> Data <br /> QC
                  </h2>
                </div>
              </motion.button>
            </motion.div>
          </div>
          <div className="flex gap-3 mt-2">
            <motion.div
              animate={{ x: 20 }}
              transition={{ ease: "easeOut", duration: 2 }}
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <div className="h-[140px] w-[180px] bg-[#2499E7] rounded-xl flex justify-center text-center items-center relative hover:bg-gradient-to-r from-cyan-500 to-blue-500">
                  <h2 className="max-w-xs transition duration-300 ease-in-out hover:scale-110">
                  12. <br />
Publication, <br /> patents, <br /> grants.
                  </h2>
                </div>
              </motion.button>
            </motion.div>
            <motion.div
              animate={{ x: 20 }}
              transition={{ ease: "easeOut", duration: 2 }}
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <div className="h-[140px] w-[180px] bg-[#0084E2] rounded-xl flex justify-center text-center items-center relative hover:bg-gradient-to-r from-cyan-500 to-blue-500">
                  <h2 className="max-w-xs transition duration-300 ease-in-out hover:scale-110">
                  11. <br /> Public <br /> repository
                  </h2>
                </div>
              </motion.button>
            </motion.div>
            <motion.div
              animate={{ x: 20 }}
              transition={{ ease: "easeOut", duration: 2 }}
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <div className="h-[140px] w-[180px] bg-[#0074E3] rounded-xl flex justify-center text-center items-center relative hover:bg-gradient-to-r from-cyan-500 to-blue-500">
                  <h2 className="max-w-xs transition duration-300 ease-in-out hover:scale-110">
                    10. <br /> Reporting <br /> {`(results + code)`}
                  </h2>
                </div>
              </motion.button>
            </motion.div>
            <motion.div
              animate={{ x: 20 }}
              transition={{ ease: "easeOut", duration: 2 }}
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <div className="h-[140px] w-[180px] bg-[#0064E4] rounded-xl flex justify-center text-center items-center relative hover:bg-gradient-to-r from-cyan-500 to-blue-500">
                  <h2 className="max-w-xs transition duration-300 ease-in-out hover:scale-110">
                  9. <br /> Data <br /> interpretation
                  </h2>
                </div>
              </motion.button>
            </motion.div>
            <motion.div
              animate={{ x: 20 }}
              transition={{ ease: "easeOut", duration: 2 }}
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <div className="h-[140px] w-[180px] bg-[#0054E6] rounded-xl flex justify-center text-center items-center relative hover:bg-gradient-to-r from-cyan-500 to-blue-500">
                  <h2 className="max-w-xs transition duration-300 ease-in-out hover:scale-110">
                    8. <br /> Data <br /> analysis
                  </h2>
                </div>
              </motion.button>
            </motion.div>
            <motion.div
              animate={{ x: 20 }}
              transition={{ ease: "easeOut", duration: 2 }}
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <div className="h-[140px] w-[180px] bg-[#0043E7] rounded-xl flex justify-center text-center items-center relative hover:bg-gradient-to-r from-cyan-500 to-blue-500">
                  <h2 className="max-w-xs transition duration-300 ease-in-out hover:scale-110">
                    6. <br /> Data <br /> preprocessing
                  </h2>
                </div>
              </motion.button>
            </motion.div>
          </div>
        </div>
        <div>
          <p className="text-xl py-20">
            INSiGENe BaaS support is available as a monthly subscription. There
            are 2 subscription plans – Pro and Premium. In addition to whole
            team access providing end-to-end support, the Pro plan comes with
            reproducible workflows with results delivered within months for
            typical projects. Premium subscriptions provide the same features as
            Pro plans but with increased bandwidth provided by two dedicated
            data analysts working on your project in parallel for expedited
            turnaround times.
          </p>
        </div>
        <div>
          <PricingCard></PricingCard>
        </div>
        <p className=" text-xl py-12">
          Ready to overcome the data analysis bottleneck? Onboarding as a client
          with INSiGENe is a straightforward, 3-step process. We will provide a
          quote that is tailored to your requirements and timelines.
        </p>
        <div className="pt-12 pb-32">
          <img
            src="https://insigene.com/wp-content/uploads/2023/04/baas_steps2.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default BaaS;
