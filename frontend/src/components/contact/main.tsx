import { calLink } from "@/lib/values/links";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";

export default function MeetingContent() {
    return (
        <main className="py-6 flex justify-center">
            <div className="w-3/4 py-24 flex flex-col items-center justify-center gap-6">
                <div className="flex flex-col items-center gap-3">
                    <p className="text-4xl font-semibold">Let's Connect</p>
                    <p className="text-muted-foreground text-md">Set up a meeting and take the next step toward achieving your project goals.</p>
                </div>
                <Button className="cursor-pointer group gap-1" onClick={() => window.open(calLink, "_blank")}>
                    <p>Book a Meeting</p>
                    <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Button>
            </div>
        </main>
    )
}