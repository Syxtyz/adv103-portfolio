import { FacebookIcon, GithubIcon, MailIcon } from "lucide-react";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";

export default function MainContent() {
    return (
        <main className="flex gap-12 items-center h-screen px-36">
            <div className="flex gap-12">
                <div className="flex flex-col gap-6">
                    <img className="w-70 h-70 self-center"></img>
                    <p className="text-center text-primary font-bold">Cejie Refamonte</p>
                    <p className="text-center text-primary font-bold">Full Stack Developer</p>
                    <p className="text-muted-foreground text-justify">I build full-stack applications and explore web, mobile, and networking projects.</p>
                    <Button className="w-fit px-12 self-center">Download CV</Button>
                </div>
                <div className="flex flex-col gap-6">
                    <section className="grid gap-6">
                        <p className="text-muted-foreground">I am a passionate explorer of <strong>technology</strong>. Whether it is building <strong>web apps</strong>, <strong>mobile apps</strong>, or diving into the world of <strong>networking</strong>, I love exploring new technologies and turning ideas into reality.</p>
                        <p className="text-muted-foreground">I thrive on exploring the latest <strong>tools</strong>, <strong>frameworks</strong>, and <strong>protocols</strong>, always looking for ways to challenge myself and grow.</p>
                        <p className="text-muted-foreground">Currently, I’m a <strong>3rd-year student</strong> pursuing a <strong>Bachelor of Science in Information Technology</strong>, eager to apply my skills in practical projects and continue expanding my knowledge in the field.</p></section>
                    <Separator />
                    <section className="grid gap-6">
                        <p className="text-2xl font-bold text-primary">Ready to work together?</p>
                        <p className="text-muted-foreground">Whether you have a project idea, need help with web or mobile development, or just want to collaborate on something exciting, I’m always open to new opportunities. Let’s connect and create something amazing together!</p>

                        <div className="flex gap-6 items-center">
                            <p className="text-muted-foreground">Lets connect! Find me on these platforms:</p>
                            <Button variant="outline" className="w-fit px-12"><MailIcon />Email</Button>
                            <Button variant="outline" className="w-fit px-12"><FacebookIcon />Facebook</Button>
                            <Button variant="outline" className="w-fit px-12"><GithubIcon />Github</Button>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    )
}