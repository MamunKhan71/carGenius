import AboutUs from "../components/AboutUs";
import CallToAction from "../components/CallToAction";
import Header from "../components/Header";
import Products from "../components/Products";
import Services from "../components/Services";

const Home = () => {
    return (
        <div className="my-12 space-y-32">
            <Header />
            <AboutUs />
            <Services />
            <CallToAction />
            <Products />
        </div>
    );
};

export default Home;