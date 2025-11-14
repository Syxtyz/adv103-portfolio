import FooterContent from "@/components/footer";
import MainContent from "@/components/home/main";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function HomePage() {
    return (
        <ScrollArea className="h-screen">
            <MainContent />

            <FooterContent />
        </ScrollArea>
    )
}