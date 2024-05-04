import AboutUs from "../components/AboutUs";
import CallToAction from "../components/CallToAction";
import ChooseUs from "../components/ChooseUs";
import Header from "../components/Header";
import Products from "../components/Products";
import Services from "../components/Services";
import Team from "../components/Team";

const Home = () => {
    return (
        <div className="my-12 space-y-32">
            <Header />
            <AboutUs />
            <Services />
            <CallToAction />
            <Products />
            <Team />
            <ChooseUs />
        </div>
    );
};

export default Home;