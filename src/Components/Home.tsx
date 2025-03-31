import textLogo from "../assets/home-bg.jpg"
import { Header } from "./Header";

const Home = () => {
    return (
        <div className="relative w-full h-screen">
            <img 
                src={textLogo}
                alt="Background" 
                className="w-full h-full object-cover"
            />

            <div className="fixed top-0 left-0 w-full shadow-md z-10">
                <Header />
            </div>

            <div className="absolute top-1/3 left-1/12 text-white text-6xl font-extrabold  shadow-lg">
                <div className="mb-2">WE UNCOVER YOUR DREAM</div>
                <div>UNDER ONE ROOF</div>
            </div>
        </div>
    );
};

export default Home;
