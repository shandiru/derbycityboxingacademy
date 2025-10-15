import React from 'react'
import Hero from "../components/Hero";

import About from "../components/About";
import GetInTouch from "../components/GetInTouch"
import TrustedBySection from "../components/TrustedBySection"
import FeatureSection from "../components/FeatureSection"
import ImagesReveal from "../components/ImagesReveal"
const Home = () => {
    return (
        <div>
            <Hero />
            {/* <TrustedBySection /> */}
           
            <About />
            <FeatureSection />
            <ImagesReveal />
            <GetInTouch />
        </div>
    )
}

export default Home
