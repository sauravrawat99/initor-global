import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <section className="relative min-h-[80vh] overflow-hidden bg-navy-950 flex items-center justify-center px-6">
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute top-20 left-20 w-40 h-40 bg-gold-500/10 rounded-full blur-3xl"
      />

      <motion.div
        animate={{ y: [0, 25, 0], rotate: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 7 }}
        className="absolute bottom-20 right-20 w-56 h-56 bg-purple-500/10 rounded-full blur-3xl"
      />

      <div className="relative z-10 text-center max-w-2xl">
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-8xl md:text-9xl font-bold text-gold-500 mb-4"
        >
          404
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-4xl font-semibold text-white mb-4"
        >
          Lost in Space?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-gray-300 text-lg mb-8"
        >
          The page you’re trying to reach doesn’t exist or may have been moved.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Link
            to="/"
            className="inline-block px-8 py-3 rounded-xl bg-gold-500 text-navy-950 font-semibold hover:bg-gold-400 transition-all duration-300 shadow-lg hover:scale-105"
          >
            Back To Home
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
