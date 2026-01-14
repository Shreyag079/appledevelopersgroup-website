import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  const fullText = "Apple Developers' Group"
  const [displayedText, setDisplayedText] = useState('')
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[index])
        setIndex(index + 1)
      }, 80)
      return () => clearTimeout(timeout)
    }
  }, [index])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden
                 bg-creme-light  pt-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Logo */}
            <div className="inline-block mb-6">
              <img
                src="/logo.svg"
                alt="ADG Logo"
                className="w-24 h-24 rounded-2xl shadow-xl mx-auto
                           transform hover:scale-105 transition-transform duration-300
                           object-contain"
              />
            </div>

            {/* Typing Heading */}
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6
                           text-creme-900
                           flex justify-center">
              <span className="flex items-center">
                {displayedText}

                {/* Thin moving cursor */}
                <span
                  className="inline-block ml-1"
                  style={{
                    width: '1px',
                    height: '1.1em',
                    backgroundColor: 'currentColor',
                    animation: 'blink 1s infinite',
                  }}
                />
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-400 mb-8 leading-relaxed">
              Empowering Innovation, Fostering Excellence, Building the Future
            </p>

            <p className="text-lg text-black-800 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join us in exploring cutting-edge technologies, collaborating on exciting projects,
              and growing together as a community of passionate developers and innovators.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  document.querySelector('#events')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="px-8 py-4 bg-white dark:bg-gray-100
                           text-gray-900 font-semibold rounded-lg shadow-lg
                           border border-gray-300 hover:shadow-xl transition-all"
              >
                Explore Events
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="px-8 py-4 bg-white dark:bg-gray-100
                           text-gray-900 font-semibold rounded-lg shadow-lg
                           border border-gray-300 hover:shadow-xl transition-all"
              >
                Get in Touch
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-gray-800 dark:border-gray-400
                     rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-1 h-3 bg-gray-800 dark:bg-gray-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>

      {/* Cursor Blink Animation */}
      <style>{`
        @keyframes blink {
          0%, 50%, 100% { opacity: 1; }
          25%, 75% { opacity: 0; }
        }
      `}</style>
    </section>
  )
}

export default Hero
