import Navbar from "../components/navbar/navbar";
import Title from "../components/title/Title";
import AboutUs from '../components/aboutUs/aboutUs'
import Programming from "../components/programming/programming"
import Steps from "../components/steps/steps";
import FAQ from "../components/FAQ/FAQ";

export default function Landing(){
    return (
        <>
            <Navbar/>
            <Title/>
            <AboutUs/>
            <Programming/>
            <Steps/>
            <FAQ/>
        </>
    )
}