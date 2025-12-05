import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function SplashScreen({ onFinish }: { onFinish: () => void }) {
    const [step, setStep] = useState(0)

    useEffect(() => {
        const timers: number[] = []

        timers.push(window.setTimeout(() => setStep(1), 100))

        timers.push(window.setTimeout(() => setStep(2), 3500))

        timers.push(window.setTimeout(() => setStep(3), 3500))

        timers.push(window.setTimeout(() => {
            setStep(4)
            window.setTimeout(onFinish, 100)
        }, 5600))

        return () => timers.forEach(t => clearTimeout(t))
    }, [onFinish])

    return (
        <AnimatePresence>
            {step < 4 && (
                <motion.div
                    key="splash"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={`fixed inset-0 flex items-center justify-center z-50 ${step === 4 ? "backdrop-blur-md" : "bg-black"
                        }`}
                >
                    {step === 1 && (
                        <motion.img
                            src="/cateyes.gif"
                            alt="Cat"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1 }}
                            className="w-6xl h-288 object-contain"
                        />
                    )}

                    {step === 3 && (
                        <motion.h1
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1 }}
                            className="text-white text-5xl font-bold"
                        >
                            Tweiqht
                        </motion.h1>
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    )
}
