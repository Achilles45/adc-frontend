// Import components here 
import Navbar from "./components/shared/Navbar";
import Herosection from "./components/landingpage/Herosection";
import Intro from "./components/landingpage/Intro";
import Features from "./components/landingpage/Features";
import Onboarding from "./components/shared/Onboarding";
import Support from "./components/shared/Support"
import Referral from "./components/shared/Referral";
import Faqs from "./components/shared/Faqs";
import Banner from "./components/shared/Banner";
import Footer from "./components/shared/Footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <Herosection />
      <Intro />
      <Features />
      <Onboarding />
      <Referral />
      <Support />
      <Faqs />
      <Banner />
      <Footer />
    </>
  );
}
