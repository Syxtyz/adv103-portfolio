import { Separator } from "./ui/separator";

export default function FooterContent() {
    return (
        <footer className="flex flex-col gap-4 mx-36 mb-4">
            <Separator orientation="horizontal"/>
            <p className="text-center">@ 2025 Cejie Refamonte. All rights reserved</p>
        </footer>
    )
}