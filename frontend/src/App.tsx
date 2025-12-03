import FooterContent from "./components/screens/footer"
import { ModeToggle } from "./components/screens/mode-toggle"
import LandingContent from "./components/screens/landing/main"
import { ScrollArea } from "./components/ui/scroll-area"

function App() {

  return (
    <ScrollArea className="h-screen px-32">
      <LandingContent />
      <ModeToggle/>
      <FooterContent/>
    </ScrollArea>
  )
}

export default App
