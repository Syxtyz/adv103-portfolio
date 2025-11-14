import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface TooltipIconProps {
    label: string;
    to?: string;
    onClick?: () => void;
    children: React.ReactNode;
}

export default function ToolTipIcon({ label, to, onClick, children }: TooltipIconProps) {
    const buttonClasses = "rounded-full hover:border border-black";

    return (
        <Tooltip>
            <TooltipTrigger asChild>
                {to ? (
                    <Link to={to}>
                        <Button variant="ghost" className={buttonClasses}>
                            {children}
                        </Button>
                    </Link>
                ) : (
                    <Button variant="ghost" onClick={onClick} className={buttonClasses}>
                        {children}
                    </Button>
                )}
            </TooltipTrigger>

            <TooltipContent>
                <p>{label}</p>
            </TooltipContent>
        </Tooltip>
    );
}