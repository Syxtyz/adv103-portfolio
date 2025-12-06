import HeroSection from "./hero";
import AboutSection from "./about";
import { ChevronDown } from "lucide-react";

export default function LandingContent({ scrollToAchievement }: { scrollToAchievement: () => void}) {
    return (
        <main className="min-h-screen grid items-center justify-center pt-12">
            <div className="flex flex-col lg:flex-row gap-12 max-w-5xl mx-auto">
                <HeroSection />

                <AboutSection />
            </div>
            <div className="relative bottom-0 grid justify-center opacity-75 cursor-pointer mt-4 2xl:mt-0" onClick={scrollToAchievement}>
                <span>Scroll Down</span>
                <ChevronDown className="mx-auto" />
            </div>
        </main>
    )
}
