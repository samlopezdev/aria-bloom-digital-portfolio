import { Contact } from "../components/Contact";
import { Gallery } from "../components/Gallery";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Footer } from "../components/Footer"

export default function Home() {
    return (
      <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
        <div className="flex h-full flex-col">
          <Header />
          <main className="flex flex-col items-center bg-light py-10 px-20 lg:px-50">
            <Hero />
            <Gallery />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    );
}