import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import TechStackSection from "./techstack"
import { useState } from "react"
import CertificateSection from "./certificates"

export default function AchievementContent() {
    const [open, setOpen] = useState("item-1")

    return (
        <main className="h-fit pb-12">
            <Accordion type="single" collapsible className="w-full" value={open} onValueChange={setOpen}>
                <AccordionItem value="item-1">
                    <AccordionTrigger className={`text-lg font-semibold py-2 px-4 cursor-pointer ${open === "item-1" ? "opacity-100" : "opacity-50 hover:opacity-100"}`}>Tech Stack</AccordionTrigger>
                    <AccordionContent className="flex flex-wrap gap-4 mt-4">
                        <TechStackSection />
                    </AccordionContent>
                </AccordionItem>


                <AccordionItem value="item-2">
                    <AccordionTrigger  className={`text-lg font-semibold py-2 px-4 cursor-pointer ${open === "item-2" ? "opacity-100" : "opacity-50 hover:opacity-100"}`}>Certificates</AccordionTrigger>
                    <AccordionContent>
                        <CertificateSection/>
                    </AccordionContent>
                </AccordionItem>


                <AccordionItem value="item-3">
                    <AccordionTrigger className={`text-lg font-semibold py-2 px-4 cursor-pointer ${open === "item-3" ? "opacity-100" : "opacity-50 hover:opacity-100"}`}>Educational Tour / Journal</AccordionTrigger>
                    <AccordionContent className="mt-2">
                        Test
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </main>
    )
}
