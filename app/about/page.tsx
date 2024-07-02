import Navbar from "../components/shared/Navbar"
import PageIntro from "../components/shared/PageIntro"
import Mission from "../components/about/Mission"
import WhyUs from "../components/about/why-us"
import Onboarding from "../components/shared/Onboarding"
import Banner from "../components/shared/Banner"
import Footer from "../components/shared/Footer"

const About = () => {
  return (
    <div>
        <Navbar />
        <PageIntro title="Simplifying proffitable savings & investments" description="Our goal is to simply empower ADC members to grow their finances through profittable savings and investments opportunities." />
        <Mission />
        <WhyUs />
        <Onboarding />
        <Banner />
        <Footer />
    </div>

  )
}

export default About