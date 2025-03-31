import coreValue from "../assets/core-values.svg"


export const SetUsApart = () => {
    return <>
        <div className="h-screen w-full">
            <div className="text-center pt-32 text-4xl font-bold text-blue-900">What Set Us Apart</div>
            <div className="px-28 mt-7 text-center text-2xl">
                <p>
                At <span className="font-bold text-blue-900">“TRINITY STEELS”</span> we understand that our clients seek not just products but reliable solutions that propel their projects forward. That’s why we focus on delivering what truly matters to you.
                </p>
            </div>
            <div className="flex justify-around pt-[130px]">
                <div className="flex flex-col gap-20">
                    <Card text="CUSTOM SOLUTIONS" logo={coreValue} />
                    <Card text="ON TIME DELIVERY" logo={coreValue} />
                    <Card text="DEDICATED SUPPORT" logo={coreValue} />
                </div>
                <div className="w-[3px] bg-gray-800"></div>
                <div className="flex flex-col gap-20">
                    <Card text="GUARANTEED EXCELLENCE" logo={coreValue} />
                    <Card text="TOTAL SAFETY PRACTICES" logo={coreValue} />
                    <Card text="EMPOWERING CAREERS" logo={coreValue} />
                </div>
            </div>
        </div>
    </>
}

interface CardProps{
    text: string;
    logo: string;
}


const Card = ({text, logo}: CardProps) => {
    return <>
        <div className="flex items-center gap-6">
            <img className="h-16 w-16" src={logo} alt="text" />
            <div className="text-4xl font-semibold text-gray-700">{text}</div>
        </div>
    </>
}