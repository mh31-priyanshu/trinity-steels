import { Logo } from "./Logo"

export const Header = () => {
    return <>
        <div className="flex justify-between px-[100px] py-[20px] bg-blue-950 text-white items-center opacity-90">
            <div>
                <Logo />
            </div>
            <div className="flex gap-[50px]">
                <div className="cursor-pointer">HOME</div>
                <div className="cursor-pointer">ABOUT US</div>
                <div className="cursor-pointer">PRODUCTS</div>
                <div className="cursor-pointer">SERVICES</div>
                <div className="cursor-pointer">PROJECTS</div>
                <div className="cursor-pointer">CONTACT US</div>
            </div>
        </div>
    </>
}