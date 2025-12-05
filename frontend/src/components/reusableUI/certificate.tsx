import { AwardIcon, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

interface CertificateProps {
    title: string
    certificate: "Participation" | "Completion"
    date: string
    imageSrc?: string
}

export function CertificateForm({ title, certificate, date, imageSrc }: CertificateProps) {
    const [hovered, setHovered] = useState(false)
    const [openMobile, setOpenMobile] = useState(false)
    const [width, setWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 0)

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    const isMobile = width < 768

    return (
        <div
            className="relative"
            onMouseEnter={() => !isMobile && setHovered(true)}
            onMouseLeave={() => !isMobile && setHovered(false)}
        >
            <div className="grid gap-2 md:cursor-pointer">
                <div>
                    <p className="font-semibold text-sm">{title}</p>
                    <p className="text-xs">Certificate of {certificate}</p>
                </div>

                {imageSrc && (
                    <div
                        className="flex gap-2 border w-fit px-2 py-1 rounded-lg items-center sm:cursor-pointer"
                        onClick={() => isMobile && setOpenMobile(true)}
                    >
                        <AwardIcon size={16} /> View Certificate
                    </div>

                )}

                <p className="text-xs text-muted-foreground">Date issued: {date}</p>
            </div>

            <AnimatePresence>
                {!isMobile && hovered && imageSrc && (
                    <motion.div
                        initial={{ x: 150, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: 150, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 260, damping: 28 }}
                        className="fixed top-0 right-0 h-screen w-120 z-50 hidden md:flex items-center mx-16"
                    >
                        <img src={imageSrc} className="rounded-lg shadow-xl" />
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isMobile && openMobile && imageSrc && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4 md:hidden"
                    >
                        <motion.div
                            initial={{ y: 40, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 40, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 200, damping: 20 }}
                            className="relative w-full max-w-md"
                        >
                            <button
                                onClick={() => setOpenMobile(false)}
                                className="absolute -top-4 -right-4 bg-white text-black rounded-full p-2 shadow-md"
                            >
                                <X size={20} />
                            </button>

                            <img src={imageSrc} className="rounded-lg shadow-lg w-full" />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
