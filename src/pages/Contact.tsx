import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { HeroAlt } from "../components/HeroAlt";
import { CommisionInfo } from "../components/contact_page/CommissionInfo";
import { PricingGuide } from "../components/contact_page/PricingGuide";
import { PaymentInfo } from "../components/contact_page/PaymentInfo";
import { Licensing } from "../components/contact_page/Licensing";
import { Deliverables } from "../components/contact_page/Deliverables";

export default function Contact() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-light">
      <div className="flex h-full flex-col">
        <Header />
        <main className="flex flex-col items-center lg:py-16 max-w-300 m-auto">
          <HeroAlt
            titleStart="Commi"
            titleEnd="sions"
            text="Thank you so much for your interest in my work! I’m honored you’re considering a commission ♡"
          />
          <CommisionInfo />
          <PricingGuide />
          <PaymentInfo />
          <Licensing />
          <Deliverables />
        </main>
        <Footer />
      </div>
    </div>
  );
}
