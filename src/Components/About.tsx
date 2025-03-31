import coreValue from "../assets/core-values.svg"

export const About = () => {
    return (
        <>
            <div className="h-screen w-full flex">
                <div className="h-full flex-1 flex items-center justify-center p-8">
                    <p className="text-3xl text-gray-800 px-10 md:px-32">
                        <span className="font-bold text-blue-900">“TRINITY STEELS”</span> 
                        believes in open communication, fostering discussions where the best ideas thrive. Our customer-centric approach ensures that our clients remain at the heart of our efforts, striving to deliver exceptional service and products. Collaboration is key, as we actively share knowledge and ideas, working enthusiastically to uplift one another.
                    </p>
                </div>
                <div className="h-full flex-1 flex flex-col items-center justify-center gap-12 bg-gray-100">
                    <Card heading="Vision" logo={coreValue} content="TRINITY STEELS aims to global leader in designing, manufacturing and erecting PEB" />
                    <Card heading="Mission" logo={coreValue}  content="We deliver innovative engineering solutions, staying ahead as trusted technology partners" />
                    <Card heading="Values" logo={coreValue}  content="We uphold excellence teamwork, prioritizing customer focus growth and empowerment" />
                </div>
            </div>
        </>
    );
};

interface CardProps {
    heading: string;
    logo: string;
    content: string;
}

const Card = ({ heading, logo, content }: CardProps) => {
    return (
        <div className="flex w-full max-w-sm h-32 bg-white rounded-r-lg shadow-md items-center border-gray-300 border-8 border-l-blue-900">
            <div className="flex-[1] flex items-center justify-center text-2xl rounded-l-lg">
                <img src={logo} alt={heading} className="w-16 h-16 object-contain font-extrabold" />
            </div>
            <div className="flex-[3] p-3  rounded-r-lg">
                <h3 className="font-bold text-lg text-blue-900">{heading}</h3>
                <p className="text-md">{content}</p>
            </div>
        </div>
    );
};

export default About;
