import Heropage from './pages/pages.heropage';
import About from './pages/pages.about';
import Offers from './pages/pages.offers';
import ContactForm from './pages/pages.contact';
import TrainersGrid from './pages/pages.trainers';
const Index = () => {
    return (
        <div className=' bg-gradient-to-r from-gray-800 to-black text-white'>
            <div id="Heropage">
                <Heropage/>
            </div>
            <div id='About' className="bg-gray-900">
                <About/>
            </div>
            <div id='Offers'>
                <Offers/>
            </div>
            <div id='Trainers'>
                <TrainersGrid/>
            </div>
            <div id='Contact'>
                <ContactForm/>
            </div>
        </div>
        
    );
};

export default Index;