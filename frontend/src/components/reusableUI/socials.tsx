import { Button } from "../ui/button";
import { FacebookIcon, GithubIcon, MailIcon } from "lucide-react";
import { FacebookLink, GithubLink } from "@/lib/links";

interface MySocialProps {
    size?: "default" | "icon"
    variant?: "outline" | "default" | "secondary" | "ghost"
}

export default function MySocials({ size = "default", variant = "outline"}: MySocialProps) {
    return (
        <>
            <Button size={size} variant={variant} className="flex gap-2">
                <MailIcon size={16} />
                {variant === "outline" && "Email"}
            </Button>

            <Button size={size} variant={variant} className="flex gap-2" onClick={() => window.open(FacebookLink, "_blank")}>
                <FacebookIcon size={16} />
                {variant === "outline" && "Facebook"}
            </Button>

            <Button size={size} variant={variant} className="flex gap-2" onClick={() => window.open(GithubLink, "_blank")}>
                <GithubIcon size={16} />
                {variant === "outline" && "Github"}
            </Button>
        </>
    )
}