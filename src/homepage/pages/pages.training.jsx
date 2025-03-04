import Card from "../components/component.card";
import Logo from "../assets/athletic-mma.png";
const Training = () => {
    return(
        <div className="sm:min-h-screen py-10">
        <h1 className="text-2xl sm:text-5xl text-yellow-400 font-semibold font-[Shafarik] text-center mb-4">
            Available Training Offers
        </h1>
        <p className="text-md sm:text-lg  font-semibold text-center mx-5 mb-10">
            These are our available training sessions where we teach you the fundamentals
        </p>
        <div className="container mx-auto flex flex-wrap justify-center gap-6">
            <Card 
                title="Bodybuilding Training" 
                information="We'll teach you how to build and gain muscles with a proper diet and workout training" 
                img={Logo}
            />
            <Card 
                title="Whole body cardio" 
                information="We'll teach you how to improve your stamina by showing you the proper diet and training regime" 
                img={Logo}
            />
        </div>
    </div>
    );
}

export default Training;