import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { HeroAlt } from "../components/HeroAlt";
import { CommisionInfo } from "../components/contact_page/CommissionInfo";
import { PricingGuide } from "../components/contact_page/PricingGuide";

export default function Contact() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-light">
      <div className="flex h-full flex-col">
        <Header />
        <main className="flex flex-col items-center lg:py-16 pt-0 px-0 md:px-8 lg:px-16 max-w-300 m-auto">
          <HeroAlt
            titleStart="Commi"
            titleEnd="sions"
            text="Thank you so much for your interest in my work! I’m honored you’re considering a commission ♡"
          />
          <CommisionInfo />
          <PricingGuide />
        </main>
        <Footer />
      </div>
    </div>
  );
}
