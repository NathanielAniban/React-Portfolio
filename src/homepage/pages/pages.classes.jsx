import Card from "../components/component.card";
import Logo from "../assets/athletic-mma.png";

const Classes = () => {
    return (
        <div className="sm:min-h-screen py-10">
            <h1 className="text-2xl sm:text-5xl text-yellow-400 font-semibold font-[Shafarik] text-center mb-4">
                Available Classes
            </h1>
            <p className="text-md sm:text-lg  font-semibold text-center mx-5 mb-10">
                These are our available classes where we teach you the fundamentals
            </p>
            <div className="container mx-auto flex flex-wrap justify-center gap-6">
                <Card 
                    title="Boxing Classes" 
                    information="We'll teach you the fundamentals of defending yourself using your hands." 
                    img={Logo}
                />
                <Card 
                    title="Nogi Jiu-Jitsu Classes" 
                    information="We'll teach you the fundamentals of defending yourself on the ground." 
                    img={Logo}
                />
                <Card 
                    title="MMA Classes" 
                    information="We'll teach you the fundamentals of defending yourself in striking and grappling." 
                    img={Logo}
                />
            </div>
        </div>
    );
};

export default Classes;
