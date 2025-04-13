import { Logo } from "./Logo"

export const Header = () => {
    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="flex justify-between px-[100px] py-[20px] bg-blue-950 text-white items-center opacity-90">
            <div>
                <Logo />
            </div>
            <div className="flex gap-[50px]">
                <div className="cursor-pointer" onClick={() => scrollToSection("home")}>HOME</div>
                <div className="cursor-pointer" onClick={() => scrollToSection("about")}>ABOUT US</div>
                <div className="cursor-pointer" onClick={() => scrollToSection("production")}>SERVICES</div>
                <div className="cursor-pointer" onClick={() => scrollToSection("projects")}>PROJECTS</div>
                <div className="cursor-pointer" onClick={() => scrollToSection("clients")}>CLIENTS</div>
                <div className="cursor-pointer" onClick={() => scrollToSection("contact")}>CONTACT US</div>
            </div>
        </div>
    );
};
