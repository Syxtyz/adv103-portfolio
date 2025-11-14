import { Moon, Sun } from "lucide-react"
import { Button } from "../ui/button"
import { useTheme } from "../../lib/theme-provider"
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    if (theme === "light") setTheme("dark")
    else setTheme("light")
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="ghost" className="rounded-full hover:border border-black" onClick={toggleTheme}>
          <Sun
            className={`h-[1.2rem] w-[1.2rem] ${theme === "light" ? "scale-100 rotate-0" : "scale-0 -rotate-90"
              }`}
          />
          <Moon
            className={`absolute h-[1.2rem] w-[1.2rem] ${theme === "dark" ? "scale-100 rotate-0" : "scale-0 rotate-90"
              }`}
          />
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Change Theme</p>
      </TooltipContent>
    </Tooltip>
  )
}
