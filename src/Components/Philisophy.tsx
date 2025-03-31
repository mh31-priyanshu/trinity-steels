import coreValue from "../assets/core-values.svg"
import sunset from "../assets/sunset.jpg"
export const Philosophy = () => {
    return <>
        <div className="flex h-screen w-full">
            {/* Left section */}
            <div className="flex-1 bg-gray-700 pt-32 px-28 text-gray-200">
                <div className="text-5xl  font-bold">OUR PHILOSOPHY</div>
                <div className="mt-10 bg-blue-950 p-3 text-2xl">Values</div>
                <div className="flex mt-7 gap-12 ml-7">
                    {/* Bar */}
                    <div className="w-[2px] bg-blue-950"></div>
                    <div className="flex flex-col gap-6">
                        <div>Incorporating Company Values</div>
                        <div>Cultivating Tomorrow's Leaders</div>
                        <div>Developing Functional Excellence</div>
                    </div>
                </div>

                <div className="mt-10 bg-blue-950 p-3 text-2xl">Outlook</div>
                <div className="flex mt-7 gap-12 ml-7">
                    {/* Bar */}
                    <div className="w-[2px] bg-blue-950"></div>
                    <div className="flex flex-col gap-6">
                        <div>Strength in Innovation, Excellence in Manufacturing</div>
                        <div>We integrate these principles into every aspect of our operations.</div>
                        <div>Our commitment to ethical practices ensures a strong, value-driven culture.</div>
                        <div>This approach fosters professional growth and alignment with our organizational values.</div>
                    </div>
                </div>
            </div>


            {/* Right Section */}
            <div className="flex-1 pt-32">
                <div className="text-center text-5xl">A Legacy of Strength</div>
                <div className="flex mt-14 items-center gap-6 justify-center">
                    <img className="h-24 w-24" src={coreValue} alt="" />
                    <div className="w-[2px] bg-blue-950 h-28"></div>
                    <div className="text-2xl">
                        <div>Shri. Ramkrishna Funde</div>
                        <div className="font-light">Founder Chairman</div>
                        <div className="font-light text-blue-900">TRINITY STEELS</div>
                    </div>
                </div>
                <div className="w-auto bg-blue-950 h-[2px] mx-36 mt-4"></div>
                <p className="mt-7 px-36 text-lg">Over 50 years ago, Shri O.P. Jindal had a vision of a self-reliant India. We, at JSP, are committed to realising his dreams and making India self-reliant</p>

                <div className="flex gap-5 px-36 mt-14">
                    <Card text="We started our journey form the 16 march 2007 with the small amount of investment" photo={sunset} year="2007"/>
                    <Card text="We also got some angel investment and the expansion also increased" photo={sunset} year="2010"/>
                </div>
            </div>
        </div>
    </>
}

interface CardProps{
    text: string;
    photo: string;
    year: string;
}

const Card = ({text, photo, year}: CardProps) =>{
    return <>
        <div>
            <img className="w-64" src={photo} alt="" />
            <div>{year}</div>
            <div>{text}</div>
        </div>
    </>
}