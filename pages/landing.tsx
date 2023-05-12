import Navbar from "../components/navbar/navbar";
import Title from "../components/title/Title";
import AboutUs from '../components/aboutUs/aboutUs'
import Programming from "../components/programming/programming"
import Steps from "../components/steps/steps";
import FAQ from "../components/FAQ/FAQ";
import Review from "../components/review/review";
import Gallery from "../components/gallery/gallery";
import Footer from "../components/footer/footer";

export default function Landing(){
    return (
        <>
            <Navbar/>
            <Title/>
            <AboutUs/>
            <Programming/>
            <Steps/>
            <FAQ/>
            <Review/>
            <Gallery/>
            <Footer/>
        </>
    )
}