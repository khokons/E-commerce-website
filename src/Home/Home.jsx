import AboutUs from "./AboutUs";
import AppSection from "./AppSection";
import Banner from "./Banner";
import CategoryShowcase from "./CategoryShowcase";
import HomeCategory from "./HomeCategory";
import LocationSprade from "./LocationSprade";
import Register from "./Register";
import Sponsor from "./Sponsor";


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <HomeCategory></HomeCategory>
           <CategoryShowcase></CategoryShowcase>
           <Register></Register>
           <LocationSprade></LocationSprade>
           <AboutUs></AboutUs>
           <AppSection></AppSection>
           <Sponsor></Sponsor>
         
        </div>
    );
};

export default Home;