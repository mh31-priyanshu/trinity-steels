import sunset from "../assets/sunset.jpg"


export const Projects = () => {
    return <>
        <div className="px-40 pt-10">
            <div className="text-4xl font-extrabold text-gray-800 mb-2">PROJECTS</div>
            <p className="text-lg mb-10">We develop creative, comprehensive and sustainable engineering solutions for a future where society can thrive.</p>
            <div className="flex gap-24 mb-5">
                <Card heading="Life's Good (LG India)" subheading="3,60,000/- sqft. Warehouse In Ranjangaon" image={sunset} />
                <Card heading="Life's Good (LG India)" subheading="3,60,000/- sqft. Warehouse In Ranjangaon" image={sunset} />
                <Card heading="Life's Good (LG India)" subheading="3,60,000/- sqft. Warehouse In Ranjangaon" image={sunset} />
            </div>
            <div className="flex gap-24">
                <Card heading="Life's Good (LG India)" subheading="3,60,000/- sqft. Warehouse In Ranjangaon" image={sunset} />
                <Card heading="Life's Good (LG India)" subheading="3,60,000/- sqft. Warehouse In Ranjangaon" image={sunset} />
                <Card heading="Life's Good (LG India)" subheading="3,60,000/- sqft. Warehouse In Ranjangaon" image={sunset} />
            </div>
        </div>
    </>
}

interface CardProps {
    heading: string;
    subheading: string;
    image: string;
}


const Card = ({ heading, subheading, image }: CardProps) => {
    return <>
        <div className="bg-gray-200 rounded-2xl overflow-hidden">
            <img className="" src={image} alt="" />
            <div className="p-5">
                <p className="">{heading}</p>
                <p className="">{subheading}</p>
            </div>
        </div>
    </>
}