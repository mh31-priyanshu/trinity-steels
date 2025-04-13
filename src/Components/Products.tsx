import sunset from "../assets/sunset.jpg"


export const Products = () => {
    return <>
        <div className="px-40 my-32">
            <div className="text-4xl font-extrabold text-gray-800 mb-2">OUR PRODUCTS</div>
            <p className="text-lg mb-10">We develop creative, comprehensive and sustainable engineering solutions for a future where society can thrive.</p>
            <div className="flex gap-16 mb-5">
                <Card heading="Roof & Wall Claddin" subheading="A full range of products are available for every type
of building..-" image={sunset} />
                <Card heading="Pre-Engineered Building" subheading="A full range Of products are available for every type
of building..." image={sunset} />
                <Card heading="Purlines & Deck Sheets" subheading="A full range of products are available for every type
of building.." image={sunset} />
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