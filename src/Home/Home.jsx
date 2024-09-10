import Banner from "./Banner";
import CategoryShowcase from "./CategoryShowcase";
import HomeCategory from "./HomeCategory";


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <HomeCategory></HomeCategory>
           <CategoryShowcase></CategoryShowcase>
         
        </div>
    );
};

export default Home;