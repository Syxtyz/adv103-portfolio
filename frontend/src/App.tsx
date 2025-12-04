import FooterContent from "./screens/footer"
import LandingContent from "./screens/landing/main"
import { ScrollArea } from "./components/ui/scroll-area"
import AchievementContent from "./screens/achievement/main"
import { useRef } from "react"

function App() {
  const achievementRef = useRef<HTMLDivElement | null>(null)

  return (
    <ScrollArea className="h-screen lg:px-32 px-6">
      <LandingContent scrollToAchievement={() => achievementRef.current?.scrollIntoView({ behavior: "smooth" })} />
      {/* <ModeToggle /> */}
      <div ref={achievementRef}>
        <AchievementContent />
      </div>
      <FooterContent />
      {/* Education Tour Journal with Photos
      Certification
      Tech Stack */}
    </ScrollArea>
  )
}

export default App
