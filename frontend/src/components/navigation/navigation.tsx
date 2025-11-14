import { useState } from "react"
import { Button } from "@/components/ui/button"
import { BookTextIcon, HomeIcon, LayersIcon, MenuIcon, TrendingUpIcon, X, XIcon } from "lucide-react"
import { ModeToggle } from "./mode-toggle"
import { Link } from "react-router"
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip"
import ToolTipIcon from "../custom-ui/toolTipIcon"

export function BottomNavMenu() {
    const [open, setOpen] = useState(true)

    const handleToggle = () => setOpen(true)
    const handleClose = () => setOpen(false)

    return (
        <>
            <Button
                variant="ghost"
                className={`bg-secondary border fixed bottom-4 left-4 h-12 w-12 rounded-full p-0 shadow-lg z-50 transition-all duration-500 ${open ? "bottom-4 left-1/2 -translate-x-1/2 scale-0 opacity-0" : "scale-100 opacity-100"}`}
                onClick={handleToggle}
            >
                <MenuIcon className="h-6 w-6 transition-transform duration-500" />
            </Button>

            <div
                className={`bg-secondary border fixed bottom-4 left-1/2 transform -translate-x-1/2 flex items-center p-2 gap-2 rounded-full shadow-sm z-50 transition-[scale,opacity] duration-500 ${open ? "scale-100 opacity-100" : "scale-90 opacity-0 pointer-events-none"}`}
            >
                <ToolTipIcon label="Home" to="/">
                    <HomeIcon/>
                </ToolTipIcon>
                <ToolTipIcon label="Experience" to="/experience">
                    <TrendingUpIcon/>
                </ToolTipIcon>
                <ToolTipIcon label="Journal" to="/journal">
                    <BookTextIcon/>
                </ToolTipIcon>
                <ToolTipIcon label="Tech Stack" to="/skills">
                    <LayersIcon/>
                </ToolTipIcon>
                <ModeToggle/>
                <ToolTipIcon label="Minimize" onClick={handleClose}>
                    <XIcon/>
                </ToolTipIcon>
            </div>
        </>
    )
}
