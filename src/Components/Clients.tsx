import textLogo from "../assets/home-bg.jpg"
import sunset from "../assets/sunset.jpg"

export const Clients = () => {
    return <>
        <div className="relative w-full h-screen mt-15">
            <img
                src={textLogo}
                alt="Background"
                className="w-full h-full object-cover"
            />

            <div className="absolute top-1/4 w-full text-white text-6xl font-extrabold  shadow-lg">
                <Client />
            </div>

            <div className="absolute top-3/4 w-full">
                <NeedHelp />
            </div>
        </div>
    </>
}

const Client = () => {
    return <>
        <div className="mx-60">OUR CLIENTS</div>
        <div className="flex justify-evenly px-30 mt-10">
            <img className="h-30" src={sunset} alt="" />
            <img className="h-30" src={sunset} alt="" />
            <img className="h-30" src={sunset} alt="" />
            <img className="h-30" src={sunset} alt="" />
        </div>
        <div className="flex justify-evenly px-30 mt-10">
            <img className="h-30" src={sunset} alt="" />
            <img className="h-30" src={sunset} alt="" />
            <img className="h-30" src={sunset} alt="" />
            <img className="h-30" src={sunset} alt="" />
        </div>
    </>
}

const NeedHelp = () => {
    return <>
        <div className="bg-blue-900/50 flex justify-evenly p-4">
            <div className="text-white text-lg">
                <p>Need Help?</p>
                <p>Don't hesitate to contact us for more information about company or service</p>
            </div>
            <div className="cursor-pointer text-lg p-2 text-white font-bold border-3 border-white hover:bg-white hover:text-blue-900">
                Contact Us
            </div>
        </div>
    </>
}